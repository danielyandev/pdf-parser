FROM node:14-alpine
WORKDIR /api

COPY . ./
RUN npm i
RUN npm run build

# Expose port 80 for HTTP Traffic
EXPOSE 8080

CMD ["npm", "start"]
