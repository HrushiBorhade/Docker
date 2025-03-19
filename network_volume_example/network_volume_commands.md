` docker network create my_custom_network`

` docker volume create mongo_temp_volume`

` docker run -p 27017:27017 -v mongo_temp_volume:/data/db --name mongo_container --network  my_custom_network  mongo`

` docker build -t docker-network-example .`

` docker run -p 3000:3000 --network my_custom_network docker-network-example`


