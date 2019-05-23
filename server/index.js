'use strict';

const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://192.168.0.23:27017/DiscIndex';

mongoose.connect(DB_URL, { useNewUrlParser: true });

const resolvers = require('./resolvers/resolvers');

const server = new GraphQLServer({ 
  typeDefs: './schema/schema.graphql', 
  resolvers 
});

server.start(() => console.log('Server is running on localhost:4000'));
