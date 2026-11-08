# Coda Fix & Design Hub

A responsive React website for IT support, website design and development, graphic design, and branding services in Maseru, Lesotho.

## Run locally

```sh
npm install
npm run dev
```

To check the production build and lint the source:

```sh
npm run build
npm run lint
```

## Add portfolio images

1. Copy your project images into `public/projects/` (create the folder if needed).
2. In `src/App.jsx`, set the matching `image` value in the `projects` list to a path such as `/projects/my-website.jpg`.
3. Update the project's `alt` text to describe the image.

Leave `image` as an empty string to keep the designed placeholder artwork. Images placed in `public/` are served from the site root, so use `/projects/filename.jpg` rather than `/public/projects/filename.jpg`.
