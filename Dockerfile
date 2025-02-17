# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the app's static files to the Nginx container
COPY . /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

