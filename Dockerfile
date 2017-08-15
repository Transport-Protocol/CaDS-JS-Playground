# Dockerfile
# using debian:jessie for it's smaller size over ubuntu
FROM debian:jessie

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set environment variables
ENV appDir /var/www/app/current

# Run updates and install deps
RUN apt-get update

RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    make \
    nginx \
    nano \
    git \
    sudo \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.10.0

RUN echo 'deb http://ftp2.de.debian.org/debian/ testing main' >> /etc/apt/sources.list
RUN apt-get update \
  && apt-get install -y python-certbot-apache -t testing \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p /etc/letsencrypt/live/cads.informatik.haw-hamburg.de \
  && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/letsencrypt/live/cads.informatik.haw-hamburg.de/privkey.pem \
    -out /etc/letsencrypt/live/cads.informatik.haw-hamburg.de/fullchain.pem \
    -subj /CN=cads.informatik.haw-hamburg.de

# Install nvm with node and nqpm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Set the work directory
RUN mkdir -p /var/www/app/current
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD package.json ./

#Expose the port
EXPOSE 443
EXPOSE 8080

# RUN letsencrypt certonly --standalone --email martin.becke@haw-hamburg.de --agree-tos   -w /var/www/app/current/ -d cads.informatik.haw-hamburg.de
RUN npm i --production
RUN apt-get -y upgrade 
RUN npm install

# Add application files
ADD . /var/www/app/current

CMD ["cd", "/var/www/app/current" ]
CMD ["npm", "start" ]

# voila!
