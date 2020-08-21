FROM node:12 as build

# Create app directory
WORKDIR /usr/baseapp

# Copy files from Development
COPY package*.json ./
COPY gruntfile.js ./
COPY www ./www
COPY nginx/ ./nginx/

# Install Dependencies and build
RUN npm install
RUN npm run build

# Copy artifacts to apache folder
FROM nginx:alpine
COPY --from=build /usr/baseapp/dist/ /usr/share/nginx/html/
COPY --from=build /usr/baseapp/nginx /etc/nginx/templates/
