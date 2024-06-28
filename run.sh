docker stop website_links
docker remove website_links

docker run --detach \
    --name website_links \
    --env "VIRTUAL_HOST=carloseppi.xyz, www.carloseppi.xyz" \
    --env "LETSENCRYPT_HOST=carloseppi.xyz, www.carloseppi.xyz" \
    --env "VIRTUAL_PORT=3000" \
    website_links
