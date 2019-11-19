FROM node:10

# #ARG read data
# ARG mongo_uri_arg
# ARG port_arg

# #ENV Variables
# ENV MONGO_URI=$mongo_uri_arg
# ENV PORT=$port_arg

# Create app directory
WORKDIR /app/

# Copy all to docker dir image
COPY . .

# Copy hidden files
COPY ["server/.env", "/app/"]

RUN pwd && ls

#install all client dependecies 
RUN cd client/ && npm install 

#install all server dependecies 
RUN cd server && npm install 

#build production version
RUN cd client && npm run build


EXPOSE 5000

RUN cd server

WORKDIR /app/server

#CMD for run server
CMD ["npm", "start" ]

