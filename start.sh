#! /bin/bash

sed -i "s/NGINX_PORT/${PORT}/" /etc/nginx/nginx.conf
cat /etc/nginx/nginx.conf
nginx -g "daemon off;"
