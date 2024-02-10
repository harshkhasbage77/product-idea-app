# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Install serve globally to serve the static files
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to serve the static files
CMD ["serve", "-s", "build", "-l", "5000"]