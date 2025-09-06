import json
import pymysql
import os
from dotenv import load_dotenv

def _extract_rows_from_json(data):
    """Extract a flat list of row dictionaries from various JSON shapes.

    Supported shapes:
      - List[Dict]
      - Dict[str, List[Dict]]
      - Dict[str, Dict[str, List[Dict]]] (e.g., nested categories each having a list)
    """
    if isinstance(data, list):
        return [item for item in data if isinstance(item, dict)]

    if isinstance(data, dict):
        rows = []
        for value in data.values():
            if isinstance(value, list):
                rows.extend([item for item in value if isinstance(item, dict)])
            elif isinstance(value, dict):
                # one more level down
                for inner_value in value.values():
                    if isinstance(inner_value, list):
                        rows.extend([item for item in inner_value if isinstance(item, dict)])
        return rows

    return []

def import_json_to_mysql(host_name, user_name, user_password, db_name, table_name, json_file_path, port_num=3306, charset_type='utf8mb4'):
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

        with open(json_file_path, 'r', encoding='utf-8') as json_file:
            parsed = json.load(json_file)
            rows = _extract_rows_from_json(parsed)

            if not rows:
                print("오류: JSON에서 삽입 가능한 레코드를 찾지 못했습니다.")
                return

            # Determine columns as a union of keys across all rows
            column_set = set()
            for item in rows:
                column_set.update(item.keys())
            columns = sorted(list(column_set))

            escaped_columns = [f"`{col_name.strip()}`" for col_name in columns]
            placeholders = ', '.join(['%s'] * len(columns))
            query = f"INSERT INTO `{table_name}` ({', '.join(escaped_columns)}) VALUES ({placeholders})"

            rows_inserted = 0
            for item in rows:
                values = [item.get(col) for col in columns]
                try:
                    cursor.execute(query, values)
                    rows_inserted += 1
                except pymysql.Error as e:
                    print(f"데이터 삽입 중 오류 발생 (레코드: {item}): {e}")

            connection.commit()
            print(f"'{json_file_path}' 파일의 데이터 {rows_inserted} 건이 '{table_name}' 테이블에 삽입 완료.")

    except pymysql.Error as e:
        print(f"MySQL 연결 또는 작업 중 오류 발생: {e}")
        if connection:
            connection.rollback()
            print("작업 롤백.")
    except FileNotFoundError:
        print(f"오류: JSON 파일 '{json_file_path}' 찾을 수 없음.")
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

    json_path = os.getenv("JSON_FILE_PATH")
    target_table = os.getenv("TARGET_TABLE_NAME")

    required_vars = [db_host, db_user, db_password, db_database, json_path, target_table]
    if not all(required_vars):
        missing = [var_name for var_name, var_val in [
            ("DB_HOST", db_host), ("DB_USER", db_user), ("DB_PASSWORD", db_password),
            ("DB_NAME", db_database), ("JSON_FILE_PATH", json_path), ("TARGET_TABLE_NAME", target_table)
        ] if not var_val]
        print(f"오류: 다음 필수 환경 변수 누락 {', '.join(missing)}")
    else:
        try:
            db_port = int(db_port_str)
            import_json_to_mysql(
                db_host,
                db_user,
                db_password,
                db_database,
                target_table,
                json_path,
                port_num=db_port
            )
        except ValueError:
            print(f"오류: DB_PORT 환경 변수 '{db_port_str}' 정수 변환 불가.")

if __name__ == "__main__":
    main()