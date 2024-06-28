docker run --detach \
    --name nginx-proxy \
    --publish 80:80 \
    --publish 443:443 \
    --volume certs:/etc/nginx/certs \
    --volume html:/usr/share/nginx/html \
    --volume /var/run/docker.sock:/tmp/docker.sock:ro \
    nginxproxy/nginx-proxy


docker run --detach \
    --name nginx-proxy-acme \
    --volumes-from nginx-proxy \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    --volume acme:/etc/acme.sh \
    --env "DEFAULT_EMAIL=mail@carloseppi.xyz" \
    nginxproxy/acme-companion

docker run --detach \
    --name website_links \
    --env "VIRTUAL_HOST=carloseppi.xyz,www.carloseppi.xyz" \
    --env "LETSENCRYPT_HOST=carloseppi.xyz,www.carloseppi.xyz" \
    --env "VIRTUAL_PORT=3000" \
    website_links
