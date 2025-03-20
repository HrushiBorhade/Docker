## Manual installation
 - Install nodejs locally
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally
    - `docker run -e POSTGRES_PASSWORD=random -d -p 5432:5432 postgres`
 - Change the .env file and update your DB credentials
 - npx prisma migrate dev
 - npx prisma generate
 - npm run dev

 ## Docker installation
 - Install docker
 - Create a network - `docker network create docker_compose_example_network`
 - Start postgres
    -  `docker run --network docker_compose_example_network --name postgres -e POSTGRES_PASSWORD=random -d -p 5432:5432 postgres`
 - Build the image - `docker build --network=host -t docker_compose_example .`
 - Start the image - `docker run -e DATABASE_URL=postgresql://postgres:random@postgres:5432/postgres --network docker_compose_example_network -p 3000:3000 docker_compose_example`

 ## Docker Compose installation steps
 - Install docker, docker-compose
 - Run `docker-compose up`