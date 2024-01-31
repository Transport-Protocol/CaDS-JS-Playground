\
sudo docker stop hp
sudo docker rm -f hp 
sudo docker run --restart always  -p 443:443 \
		 -v  /etc/letsencrypt/live/cads.informatik.haw-hamburg.de/privkey.pem:/etc/letsencrypt/live/cads.informatik.haw-hamburg.de/privkey.pem:ro \
		 -v /etc/letsencrypt/live/cads.informatik.haw-hamburg.de/fullchain.pem:/etc/letsencrypt/live/cads.informatik.haw-hamburg.de/fullchain.pem:ro \
		 --name hp scimbe/cads-hp-nodejs-app
