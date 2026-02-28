# Use official Node image
FROM node:18

# App directory create
WORKDIR /app

# Package files copy
COPY package*.json ./

# Install dependencies
RUN npm install

# Project files copy
COPY . .

# App port expose
EXPOSE 3000

# Start app
CMD ["node", "server.js"]