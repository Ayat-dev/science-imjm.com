# Use an official Nginx image as the base
FROM nginx:alpine

# Copy all local website files into the Nginx web root directory inside the container
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Command to start the Nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
