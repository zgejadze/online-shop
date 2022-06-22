const expressSession = require('express-session')
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore(session){
    const MongoDbStore = mongoDbStore(expressSession);

    const store = new MongoDbStore({
        uri: "mongodb://127.0.0.1:27017",
        databaseName: 'online-shop',
        collection: 'sessions'
    })
    return store;
}

function createSessionConfig () {
    return {
        secret: 'more-random-string',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 2
        }
    }
}

module.exports = createSessionConfig

