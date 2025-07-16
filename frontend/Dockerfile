# Frontend Dockerfile (React)
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Start Vite dev server
CMD ["npm", "run", "dev"]