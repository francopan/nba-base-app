FROM node:12

# Create app directory
WORKDIR /usr/baseapp

# Copy files from Development
COPY package*.json ./
COPY gruntfile.js ./
COPY www ./www

# Install Dependencies and build
RUN npm install
RUN npm run build

# Copy artifacts to apache folder
FROM httpd:2.4
COPY ./dist /usr/local/apache2/htdocs/