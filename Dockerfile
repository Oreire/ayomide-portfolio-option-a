
# Option A: static site served by Nginx
FROM nginx:alpine

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy web content
COPY . /usr/share/nginx/html

# Expose HTTP
EXPOSE 80
