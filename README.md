# Livesotope

PostGraphile live queries with animated rankings.

![](./demo.gif)

The demo inserts 16 "people" into a database, and then runs a script
(`./random.js`) which periodically increases the ranking of one of these people
by a random amount. We then use Apollo and `react-flip-move` to render the live
query of people ordered by ranking.

Read more about PostGraphile live queries [in our docs](https://www.graphile.org/postgraphile/live-queries/).

---

To install locally, first make sure you have a local PostgreSQL server
installed and [configured to support logical
decoding](https://www.graphile.org/postgraphile/live-queries/#graphilesubscriptions-lds)
by ensuring the following settings are set in `postgresql.conf` (and then
restarting PostgreSQL):

```
wal_level = logical
max_wal_senders = 10
max_replication_slots = 10
```

(NOTE: you can determine where your `postgresql.conf` file is by running `psql template1 -c 'SHOW config_file'`)

You also need to install the `wal2json` PostgreSQL plugin:

```
git clone https://github.com/eulerto/wal2json.git
cd wal2json
USE_PGXS=1 make
USE_PGXS=1 make install
cd ..
```

Finally you need Node v8.6 or higher (v12 recommended) installed; then run:

```
git clone https://github.com/graphile/livesotope.git
cd livesotope
createdb livesotope
psql -f schema.sql livesotope
yarn
yarn dev
```

The default `create-react-app` text follows:

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
