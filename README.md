# Getting Started

This project was bootstrapped with [Vite React Typescript](https://vite.new/react-ts).
it also uses [Tailwind](https://tailwindcss.com/) and [PostCSS](https://tailwindcss.com/docs/installation/using-postcss) with some postcss plugins installed by default: [autoprefixer](https://github.com/postcss/autoprefixer), [tailwindcss](https://tailwindcss.com/) (obviosuly), [cssnano](https://github.com/cssnano/cssnano) and [postcss-import](https://github.com/postcss/postcss-import)

**IMPORTANT**
To start go into the `package.json` file and change the `USERNAME` and `REPO` values in the homepage property to your own github username and repository name, then go into the `vite.config.ts` and change the `REPO` to the same value as in the `package.json`.

Obviously you also need to run npm install just like any other template.

That's it!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### `npm run preview`

works just like Reacts serve -s build, shows a static build on [http://localhost:3000](http://localhost:3000).

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html#testing-the-app-locally) for more information.

### `npm run deploy`

Builds the app and then deploys the app to github pages with 1 command.
