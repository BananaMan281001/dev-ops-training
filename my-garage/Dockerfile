# Use official Python base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy dependencies
COPY app/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY app/ .

# Expose port
EXPOSE 5000

# Run the application
CMD ["python", "main.py"]
