FROM node:22.11.0

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN userdel -f node \
    && if getent group node ; then groupdel node; fi \
    && groupadd -g ${GROUP_ID} node \
    && useradd -l -u ${USER_ID} -g node node && echo "node:node" | chpasswd \
    && adduser node sudo \
    && install -d -m 0755 -o node -g node /home/node

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN chown --changes --silent --no-dereference --recursive ${USER_ID}:${GROUP_ID}  \
    /home/node  \
    /var/www || true

WORKDIR /var/www/ebics-api-client-node
