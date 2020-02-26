

const sessionConfig = {
    name: 'user',
    secret: 'he who controls the spice, controls the universe',
    resave: false,
    saveUnintialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true
    }
}

module.exports = sessionConfig;