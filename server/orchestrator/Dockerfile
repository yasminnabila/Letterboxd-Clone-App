FROM node:latest
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD ["nodemon", "app.js"]