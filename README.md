
---

# SitemateQuiz Project Setup

Follow these steps to set up and run the SitemateQuiz project.

## Prerequisites

- Ensure you have [Docker](https://www.docker.com/get-started) installed on your machine.
- Node.js and npm should be installed. You can download them from [here](https://nodejs.org/).

## Setup Instructions

### 1. Start with Docker Compose

Build and run the Docker containers:

```sh
docker-compose up --build
```

### 2. Setup and Run from the Command Line

#### Install pnpm (if not already installed):

```sh
npm install -g pnpm
```

#### Install project dependencies:

```sh
pnpm install
```

#### Start the server:

```sh
pnpm run server
```

#### Start the client:

```sh
pnpm run client
```

## Access the Project

- **Server:** [http://localhost:8080](http://localhost:8080)
- **Client:** [http://localhost:3000](http://localhost:3000)

---