---
image: /generated/articles-docs-deploy-remotion-studio.png
id: deploy-studio
title: Deploy the Remotion Studio
sidebar_label: Deploy Remotion Studio
crumb: "Building video apps"
---

<YouTube
  minutes={3}
  href="https://www.youtube.com/watch?v=430B9xSs06U"
  thumb="https://i.ytimg.com/vi/430B9xSs06U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFJ4FoC-8enbWW4aU8uo9NLhEl6w"
  title="Deploy the Remotion Studio"
/>

_available from v4.0.46_

You can deploy the Remotion Studio to a long-running server in the cloud and make it accessible to your team. To do so, you need to:

- Install Node.js and Chrome
- Run `npx remotion studio` on the server
- Ensure port 3000 is available to the internet

The following examples have been tested with the [Hello World](/templates/hello-world) template initialized using `npm init video`.

## Dockerizing the Remotion Studio

```docker title="Dockerfile"
FROM node:20-bookworm

RUN apt-get update
RUN apt-get install -y chromium

# Copy everything from your project to the Docker image. Adjust if needed.
COPY package.json package*.json yarn.lock* pnpm-lock.yaml* bun.lockb* tsconfig.json* remotion.config.* .prettierrc* ./
COPY src ./src

# If you have a public folder:
COPY public ./public

# Install the right package manager and dependencies. Adjust if needed.
RUN npm i

CMD ["npx", "remotion studio"]
```

## Fly.io

To deploy the Remotion Studio to [Fly.io](https://fly.io):

- First add the above `Dockerfile` to the repo.
- Ensure you are on a paid plan (free plan has too little memory)
- Use the following command:

```bash
fly launch \
  # Get 2 CPU cores and 4GB of memory
  --vm-size=performance-2x \
  # Disable 2x replication
  --ha=false \
  # Use Remotion's port
  --internal-port=3000 \
  # Use Docker, not Node
  --dockerfile Dockerfile
```

For the following questions, answer no:

```txt
? Would you like to set up a Postgresql database now? No
? Would you like to set up an Upstash Redis database now? No
? Create .dockerignore from 1 .gitignore files? No
```

Answer Yes when asking if you want to deploy:

```
? Do you want to deploy now? Yes
```

You should get a URL where the Studio was deployed!

## Render.com

To deploy the Remotion Studio to [Render.com](https://render.com):

- First add the above `Dockerfile` to the repo.
- Create a new "Web Service" and link your repository.
- Choose at least the "Standard" plan (2GB Memory).
- Deploy!

## DigitalOcean App Platform

Is not working at the moment. The Render Button is disabled, because the DigitalOcean HTTP Proxy [does not support server-sent events](https://www.digitalocean.com/community/questions/does-app-platform-support-sse-server-sent-events-application).

A normal DigitalOcean droplet does work, though.

## Example for deployment

A test project to deploy the Remotion Studio is available [here](https://github.com/remotion-dev/shorts-customizer).

## See also

- [Dockerizing an Remotion app](/docs/docker)
