FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/ecommerce-frontend /usr/share/nginx/html
