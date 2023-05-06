# Specify the base image
FROM node:10-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

ENV APP_PORT=4000
# ENV APP_HOST=localhost
ENV CORS_PORT=3000
ENV CORS_HOST=localhost
# Expose the port the app will run on
EXPOSE 4000

# Start the app
CMD ["node", "app.js"]

#command to run
#docker rmi resource-monitor-app --force  
#docker build -t resource-monitor-app . 
#docker run -p 4000:4000 resource-monitor-app 
