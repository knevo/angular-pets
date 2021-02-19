import { Model, Server } from 'miragejs';
import { Pet } from './models/pet.model'
const pets = [
  {
    "_id": "p122",
    "name": "Popo",
    "price": 100
  },
  {
    "_id": "p121",
    "name": "Puki",
    "price": 54
  },
  {
    "_id": "p123",
    "name": "Lola",
    "price": 122
  }
];

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        pets
      });
    },

    models: {
      pets: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/pet/', (schema) => schema.db.pets)
      this.get('/pet/:id', (schema, request) => schema.db.pets.findBy({ _id: request.params.id }))

      this.post('/pets', (schema, request) => {
        const post = JSON.parse(request.requestBody);
        return schema.db.pets.insert(post);
      });

      this.put('/pets/:id', (schema, request) => {
        const post = schema.db.pets.find(request.params.id);
        post.like = !post.like;
        return post;
      });

      this.delete('/pets/:id');
    }
  });
};
