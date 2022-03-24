## Installation instructions using docker
- Generate key/certificate using [certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster)
- Copy key/cert to the root folder of the project as root and change owner to your owner or add permissions:
```console
root@bar: ~$ cp /etc/letsencrypt/live/tdtruong.com/fullchain.pem <website_repository>
root@bar: ~$ cp /etc/letsencrypt/live/tdtruong.com/privkey.pem <website_repository>
root@bar:/<website_repository> chown <new_owner> fullchain.pem
root@bar:/<website_repository> chown <new_owner> privkey.pem
```
- Build using docker as a regular user:
```console
foo@bar: ~$ docker build -t website-image
```
- Run a new container:
```
foo@bar: ~$ docker run --name website-container -dit -p 80:80 -p 443:443 website-image
```

## Installation instructions
- Clone the project
- Install the dependencies: ```npm install```
- Create the buid: ``` npm run build```
- Install apache: ```sudo apt install apache2```
- For apache, enable the rewrite module: ```sudo a2enmod rewrite```, copy the build to the right folder: ```cp build/. /var/www/html``` and make sure the .htaccess file is copied.
- For apache, enable override in /etc/apache2/apache2.conf: 
```
<Directory /var/www/>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```
- Restart apache server: ```systemctl restart apache2```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
