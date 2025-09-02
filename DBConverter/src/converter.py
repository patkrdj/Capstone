import csv
import pymysql
import os
from dotenv import load_dotenv

def import_csv_to_mysql(host_name, user_name, user_password, db_name, table_name, csv_file_path, port_num=3306, charset_type='utf8mb4'):
    connection = None
    cursor = None
    try:
        connection = pymysql.connect(
            host=host_name,
            user=user_name,
            password=user_password,
            database=db_name,
            port=int(port_num),
            charset=charset_type,
        )
        print(f"'{db_name}' 데이터베이스 접속 성공.")

        cursor = connection.cursor()

        with open(csv_file_path, 'r', encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file)
            header = next(csv_reader)
            escaped_header = [f"`{col_name.strip()}`" for col_name in header]
            placeholders = ', '.join(['%s'] * len(header))
            query = f"INSERT INTO `{table_name}` ({', '.join(escaped_header)}) VALUES ({placeholders})"

            rows_inserted = 0
            for row in csv_reader:
                try:
                    cursor.execute(query, row)
                    rows_inserted += 1
                except pymysql.Error as e:
                    print(f"데이터 삽입 중 오류 발생 (행: {row}): {e}")

            connection.commit()
            print(f"'{csv_file_path}' 파일의 데이터 {rows_inserted} 건이 '{table_name}' 테이블에 삽입 완료.")

    except pymysql.Error as e:
        print(f"MySQL 연결 또는 작업 중 오류 발생: {e}")
        if connection:
            connection.rollback()
            print("작업 롤백.")
    except FileNotFoundError:
        print(f"오류: CSV 파일 '{csv_file_path}' 찾을 수 없음.")
    except Exception as e:
        print(f"기타 오류 발생: {e}")
        if connection:
            connection.rollback()
            print("작업 롤백.")
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
            print("MySQL 연결 종료.")

def main():
    #load_dotenv()

    db_host = os.getenv("DB_HOST")
    db_user = os.getenv("DB_USER")
    db_password = os.getenv("DB_PASSWORD")
    db_database = os.getenv("DB_NAME")
    db_port_str = os.getenv("DB_PORT", "3306")

    csv_path = os.getenv("CSV_FILE_PATH")
    target_table = os.getenv("TARGET_TABLE_NAME")

    required_vars = [db_host, db_user, db_password, db_database, csv_path, target_table]
    if not all(required_vars):
        missing = [var_name for var_name, var_val in [
            ("DB_HOST", db_host), ("DB_USER", db_user), ("DB_PASSWORD", db_password),
            ("DB_NAME", db_database), ("CSV_FILE_PATH", csv_path), ("TARGET_TABLE_NAME", target_table)
        ] if not var_val]
        print(f"오류: 다음 필수 환경 변수 누락 {', '.join(missing)}")
    else:
        try:
            db_port = int(db_port_str)
            import_csv_to_mysql(
                db_host,
                db_user,
                db_password,
                db_database,
                target_table,
                csv_path,
                port_num=db_port
            )
        except ValueError:
            print(f"오류: DB_PORT 환경 변수 '{db_port_str}' 정수 변환 불가.")

if __name__ == "__main__":
    main()