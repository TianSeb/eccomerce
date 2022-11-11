export default {
    port: process.env.PORT || 8080,
    admin: true,
    db:{
        client: 'pg',
        connection: 'postgres://user:pass@localhost:5432/eccomerce',
        searchPath:  ['knex', 'public'],
        pool: { min: 0, max: 7 },
        migrations: {
            tableName: 'knex_migrations',
        }
      },
    }
