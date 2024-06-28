# Use the official Node.js 20 image from the Docker Hub
#FROM node:20
FROM node:latest

# Set the working directory inside the container
WORKDIR /website

# Update the package list and install additional dependencies
RUN apt-get update && apt-get install -y \
    htop \
    screen \
    nano \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory to /app/website for subsequent commands
WORKDIR /app/website

# Copy package.json and yarn.lock files to the working directory
COPY ./website/package.json ./website/yarn.lock ./

# Install dependencies
RUN yarn install

# Install missing peer dependencies
RUN yarn add @babel/core@latest @testing-library/dom@latest @babel/plugin-syntax-flow@latest

# Copy the rest of the application code to the working directory
COPY ./website .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

