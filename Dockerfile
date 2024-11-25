# Use a Node.js base image compatible with ARM
FROM node:22-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose the port on which the application will run
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]