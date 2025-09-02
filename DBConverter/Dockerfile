FROM python:3.9-slim

WORKDIR /app

COPY requirement.txt requirement.txt
RUN pip install --no-cache-dir -r requirement.txt

COPY ./src ./src

CMD ["python", "src/converter.py"]