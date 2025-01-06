# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight production image for serving
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the base image
COPY --from=base /app/package.json /app/package-lock.json /app/
COPY --from=base /app/.next /app/.next
COPY --from=base /app/public /app/public

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]