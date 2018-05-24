# Start with node environment.
#  * Download packages
#  * Build application
FROM node:8.9.1-alpine
COPY ./package.json vue/src/package.json
WORKDIR /vue/src
RUN npm install
COPY . /vue/src
EXPOSE  8080
CMD ["npm","run","dev"]
 

#FROM nginx
# Copy the distribution files to be served by nginx
#COPY --from=builder /build/dist /usr/share/nginx/html
#ARG ENV
#EXPOSE 80
#COPY /nginx/${ENV}.conf /etc/nginx/conf.d/default.conf