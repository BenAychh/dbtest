module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/dbtest',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '/dbtest',
  },
};
