# Nisr Website 

## Getting started

you can check our webiste on the production link. but if you want to chck on you system, follow this steps:

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

To preview a production build locally:

```
npm run preview
```

If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```

## Deployment

The repository ships with a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) that builds the Vite app and deploys it to GitHub Pages (branch `main`, Pages source "GitHub Actions"). Every push to `main` automatically rebuilds and publishes the site at [https://amanuelyosef.github.io/Nisr-website/](https://amanuelyosef.github.io/Nisr-website/).
