# Stage 0: Base image with Node.js and pnpm installed
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Stage 1: Build the application
FROM base AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application's code
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Setup the runtime environment
FROM base

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Install production dependencies only
RUN pnpm install --prod

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["pnpm", "start"]
