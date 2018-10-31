## About ##
This project takes advantage of my [React-Redux-Router Start Kit](https://github.com/LegoGao/boilerPlate). Setting up full react / redux / react-router structure takes less than one minute. Front end uses React+Redux+React-Router+Fetch. Back end uses Express(A Node.js framework) to mock REST APIs. There are more than 10 page routers and more than 20 react components. User is able to locate current city, login, browse restaurants, search for restaurants, save a restaurant, add to cart, and write comments for restaurants. This is a relatively complete front end project.

## Features ##
- User Login / Logout
- Locate your city
- Change city
- Browse restaurants
- Infinitely load more restaurants
- Search by category
- Search by key words
- Restaurant details page
- Save restaurant
- Add restaurant to cart
- Write review/ comment to a restaurant you purchased

## Tech Stack ##
- [React-Redux-Router Start Kit](https://github.com/LegoGao/boilerPlate)
- React to structure project with react components
- Redux to manage react states
- React Router for page routing
- Fetch to handle backend REST API
- Express to set up back end server
- Webpack for module bundler
- Less to write organized CSS code

## Demo
### HomePage ###
![Home Page](gif/HomePage.gif)

### Change City ###
![Change City](gif/ChangeCity.gif)

### Search by Keywords ###
![Search By Keywords](gif/Search.gif)

### User Login ###
![Login](gif/Login.gif)

### Write Review / Comment ###
![Write Review](gif/Review.gif)

## Run locally
```
Run server first:

git clone https://github.com/LegoGao/React-Yelp.git

cd React-Yelp

npm install --save

npm run mock
```

```
Run client:

cd React-Yelp

npm start

Visit http://localhost:8080
```

# Project Structure

```
.
├── app                        All front end code in this folder
|    ├─ actions                Redux actions
|    ├─ components             Dumb react component(get and display data only)
|    ├─ config                 LocalStorage util
|    ├─ constants              Redux constants
|    ├─ containers             React Container Components(Handle redux store data)
|    ├─ fetch                  RESt API handlers
|    ├─ reducers               Reducers
|    ├─ router                 Page routing
|    ├─ static                 Static
|    ├─ store                  Redux store
|    ├─ util                   Utils
|    ├─ index.jsx              HTML entry
├── mock                       All back end code in this folder
|    ├─ detail                 Detail page data
|    ├─ home                   Home page data
|    ├─ orderList              OrderList data
|    ├─ search                 Search result data
|    ├─ server.js              Backend server logic
├── test                       Test code
├── .babelrc                   Babel config
├── package.json               Package.json
├── webpack.config.js          Webpack module bundler
.

```
