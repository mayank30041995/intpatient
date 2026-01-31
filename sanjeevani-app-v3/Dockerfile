# Use official Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy application source
COPY . .

# Expose app port (change if your app uses a different port)
EXPOSE 8080

# Environment
ENV NODE_ENV=production

# Start the app
CMD ["node", "src/index.js"]
