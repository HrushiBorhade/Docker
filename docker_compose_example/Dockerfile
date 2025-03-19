FROM node:22-alpine

WORKDIR /app

COPY package* .
COPY ./prisma* .

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm install

ENV DATABASE_URL="postgresql://postgres:random@localhost:5432/postgres"

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"] 