FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4 as production-stage
COPY --from=build-stage /app/build /usr/local/apache2/htdocs/

RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        conf/httpd.conf

EXPOSE 80 443