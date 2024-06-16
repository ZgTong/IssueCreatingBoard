FROM node:20

WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./
COPY ./packages/client/package.json ./packages/client/

RUN npm install -g pnpm

RUN pnpm install

COPY ./packages/client ./packages/client

WORKDIR /app/packages/client

EXPOSE 3000

CMD ["pnpm", "start"]