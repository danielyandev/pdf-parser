FROM node:16-alpine
WORKDIR /api

COPY . ./
RUN npm i
RUN npm run build

# Expose port 80 for HTTP Traffic
EXPOSE 80

CMD ["npm", "start"]
