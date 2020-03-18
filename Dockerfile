FROM node:lts-alpine

# Setting working directory. All the path will be relative to WORKDIR
RUN mkdir -p /project/app/2ndkoleksi-nextjs
WORKDIR /project/app/2ndkoleksi-nextjs

# Installing dependencies
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3002

# Running the app
CMD [ "yarn", "start" ]
