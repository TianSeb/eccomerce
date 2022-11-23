module.exports = {
    development: {
        client: 'pg',
        connection: 'mongodb://user:pass@mongo:27017/coderhouse',
        searchPath:  ['knex', 'public'],
        pool: { min: 0, max: 7 },
    },
    production: {
        client: 'pg',
        connection: 'mongodb://user:pass@mongo:27017/coderhouse',
        searchPath:  ['knex', 'public'],
        pool: { min: 0, max: 7 },
    },
  }