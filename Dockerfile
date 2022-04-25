FROM node:lts as builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN node -v
RUN npm -v

RUN npm ci

RUN npm run build


FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/cors.conf /etc/nginx/cors.conf

COPY nginx/server.template /tmp

RUN rm -r /usr/share/nginx/html/*

COPY --from=builder /app/build/ /usr/share/nginx/html/

ENV API_URL="http://localhost:8080"

# Checking if NGINX config is valid
RUN envsubst '$API_URL' < /tmp/server.template > /etc/nginx/conf.d/default.conf && nginx -t && rm /etc/nginx/conf.d/default.conf

CMD envsubst '$API_URL' < /tmp/server.template > /etc/nginx/conf.d/default.conf && /usr/sbin/nginx -g 'daemon off;'
