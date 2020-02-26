

const sessionConfig = {
    name: 'user',
    secret: 'he who controls the spice, controls the universe',
    resave: false,
    saveUnintialized: true,
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    }
}

module.exports = sessionConfig;