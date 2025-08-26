# --------- Stage 1: Build React App ----------
FROM node:14.17.0-alpine AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . ./

# Build React app
RUN npm run build

# --------- Stage 2: Serve with Nginx ----------
FROM nginx:stable-alpine

# Optional: create /app folder like your old project
RUN mkdir /app

# Copy the React build output to Nginx html folder
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy your existing nginx.conf (still listens on 8080)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the container port (matches nginx.conf)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
