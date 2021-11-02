FROM node:15.11.0-buster-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    sudo


ENV UNAME=docker
ENV GID=1000
ENV UID=1000

RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -G sudo -o -s /bin/bash $UNAME
RUN echo "$UNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers


RUN curl https://raw.githubusercontent.com/nektos/act/master/install.sh | bash

RUN npm i -g typescript
RUN npm install -g firebase-tools vercel

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY  . .

CMD [ "/bin/bash", "-c", "yarn && yarn build" ]
