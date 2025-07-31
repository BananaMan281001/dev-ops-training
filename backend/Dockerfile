# Backend Dockerfile (Flask)
# Use an official Python image
FROM python:3.11

# Set the working directory
WORKDIR /app  

# Copy project files into the container
COPY . /app  

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=run.py

CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000", "--debug"]