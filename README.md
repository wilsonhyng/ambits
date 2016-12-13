# ambits
Mobile-first web application for habit tracking and location-based accountability

# How to Run the App in Dev Environment:
  `npm install`
  `npm start`

# How to set up the app for deployment

1. Set up an account on MongoLab
2. Set up a Heroku account
3. Create a MongoLab database for the app
4. Set a user and password for the MongoLab database

Lastly, makke sure to set the following environment vars on Heroku, using `heroku set:config KEY=VALUE`:

- MONGOLAB_URL = Your MongoLab URL, with db user/pass
- NPM_CONFIG_PRODUCTION = false, so that Heroku postinstall can run the deployment Webpack build
- NODE_ENV = 'production', if not set already
