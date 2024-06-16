FROM node:20

WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./
COPY ./packages/server/package.json ./packages/server/

RUN npm install -g pnpm

RUN pnpm install

COPY ./packages/server ./packages/server

WORKDIR /app/packages/server

EXPOSE 8080

CMD ["pnpm", "start"]