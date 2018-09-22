# Base Image
FROM node:8.12-alpine as base
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json

# Development Image
FROM node:8.12-alpine as development
COPY --from=base /app /app
WORKDIR /app
RUN npm install -q
EXPOSE 3000
