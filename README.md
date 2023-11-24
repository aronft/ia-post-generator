# AI Post generator | [Demo](https://ia-post-generator.vercel.app)

This web application allows users to generate text content using [PaLM API](https://developers.generativeai.google/products/palm).

Additionally, this project is part of the [BigDevSoon](https://app.bigdevsoon.me/projects/ai-post-generator-822948c3-c9c4-471c-8ee2-f123eba1d5e7), which I completed using React and [node.js](https://github.com/aronft/ia-post-generator-proxy)

## Features

-   Automatic post generation using AI for various social media platforms, including:
    -   Facebook
    -   X (Twitter)
    -   Reddit
    -   LinkedIn
-   Customization of post styles.
-   Configuration of the post's tone of voice.

## Getting started

First, install all the dependencies:

```shell
pnpm install
```

Then, run the development server:

```shell
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result.

You can start editing the page by modifying `src/pages/home.tsx`.

Aditionaly needs to configure the `.env` and put the [server](https://github.com/aronft/ia-post-generator-proxy) up

```shell
VITE_API_URL = 'http://localhost:3000'
VITE_TEST_URL = 'http://localhost:5173
```
