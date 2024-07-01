#!/bin/bash

# load .env file
source .env


#######################################################################################
# check if nginx-proxy container is running
NGINX_PROXY_CONTAINER_NAME=nginx-proxy
if [ ! "$(docker ps -q -f name=$NGINX_PROXY_CONTAINER_NAME)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=$NGINX_PROXY_CONTAINER_NAME)" ]; then
        # cleanup
        docker rm $NGINX_PROXY_CONTAINER_NAME
    fi
    # run your container
    docker run --detach \
        --name $NGINX_PROXY_CONTAINER_NAME \
        --publish 80:80 \
        --publish 443:443 \
        --volume certs:/etc/nginx/certs \
        --volume html:/usr/share/nginx/html \
        --volume /var/run/docker.sock:/tmp/docker.sock:ro \
        nginxproxy/nginx-proxy
else
    echo "Container $NGINX_PROXY_CONTAINER_NAME is already running"
fi

# check if nginx-proxy-acme container is running
NGINX_PROXY_CONTAINER_NAME_ACME=nginx-proxy-acme
if [ ! "$(docker ps -q -f name=$NGINX_PROXY_CONTAINER_NAME_ACME)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=$NGINX_PROXY_CONTAINER_NAME_ACME)" ]; then
        # cleanup
        docker rm $NGINX_PROXY_CONTAINER_NAME_ACME
    fi
    # run your container
    docker run --detach \
        --name $NGINX_PROXY_CONTAINER_NAME_ACME \
        --volumes-from $NGINX_PROXY_CONTAINER_NAME \
        --volume /var/run/docker.sock:/var/run/docker.sock:ro \
        --volume acme:/etc/acme.sh \
        --env "DEFAULT_EMAIL=$MAIL_SERVER" \
        nginxproxy/acme-companion
else
    echo "Container $NGINX_PROXY_CONTAINER_NAME_ACME is already running"
fi

#######################################################################################
### HERE WE START THE WEBSITE CONTAINER ###

# check if website container is running
if [ "$(docker ps -q -f name=$WEBSITE_CONTAINER_NAME)" ]; then
    echo "Container $WEBSITE_CONTAINER_NAME exists."
    read -p "Do you want to remove the container and image $WEBSITE_CONTAINER_NAME? (y/n): " remove_container
    # Check the user input and act accordingly
    if [[ $remove_container == "y" || $remove_container == "Y" ]]; then
            # stop and remove container
            docker stop  $WEBSITE_CONTAINER_NAME
            docker remove  $WEBSITE_CONTAINER_NAME
            # remove image
            docker rmi -f $WEBSITE_CONTAINER_NAME
    else
        echo "Nothing to do..."
        exit 1
    fi
else
    echo "Container $WEBSITE_CONTAINER_NAME does not exist."
fi

# build the image
read -p "Do you want to build container and image $WEBSITE_CONTAINER_NAME? (y/n): " build_image
    # Check the user input and act accordingly
if [[ $build_image == "y" || $build_image == "Y" ]]; then
    docker build -t $WEBSITE_CONTAINER_NAME .
    docker run --detach \
    --name website_links \
    --env "VIRTUAL_HOST=$SITES" \
    --env "LETSENCRYPT_HOST=$SITES" \
    --env "VIRTUAL_PORT=3000" \
    $WEBSITE_CONTAINER_NAME

else
    echo "Nothing to do..."
    exit 1
fi