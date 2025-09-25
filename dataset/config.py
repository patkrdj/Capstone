import os
from pathlib import Path

try:
    from dotenv import load_dotenv  # type: ignore
except Exception:
    load_dotenv = None


def load_env_if_available() -> None:
    """Load .env from project root if python-dotenv is installed."""
    if load_dotenv is None:
        return
    # Try repo root .env
    repo_root = Path(__file__).resolve().parents[1]
    env_path = repo_root / ".env"
    if env_path.exists():
        load_dotenv(dotenv_path=str(env_path))


load_env_if_available()


def get_env(name: str, default: str | None = None) -> str:
    value = os.getenv(name, default)
    if value is None:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


def get_db_config() -> dict:
    return {
        "host": get_env("DB_HOST"),
        "port": int(os.getenv("DB_PORT", "3306")),
        "user": get_env("DB_USER"),
        "password": get_env("DB_PASSWORD"),
        "database": get_env("DB_NAME"),
        "charset": os.getenv("DB_CHARSET", "utf8mb4"),
        "autocommit": True,
    }


def get_dataset_dir() -> str:
    return os.getenv("APP_DATASET_DIR", "/app/dataset")


