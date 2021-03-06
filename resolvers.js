import authorModel from './models/authors';

/*const authors = [{
    id: 21,
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Gobelt of Fire', 'Harry Potter and Prisioner of Azkaban']
},
{
    id: 34,
    name: 'George RR Martin',
    age: 60,
    books: ['GOT - Song of Ice and Fire', 'GOT - A Dance with Dragons']
},
{
    id: 12,
    name: 'Stephen King',
    age: 60,
    books: ['The Green Mile', 'Carrie']
}];*/

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        authors: (root, { age }) => {
            //return authors
            return authorModel.find({ age: age });
        },
        author: (root, { id }) => {
            //return authors.find(author => author.id === id);
            return authorModel.findOne({ id: id });
        }
    },
    Mutation: {
        addAuthor: (root, { age, name, books }) => {
            const author = new authorModel({ age: age, name: name, books: books });
            return author.save();
        },
        deleteAuthor: (root, { id }) => {
            return authorModel.findOneAndRemove({ id: id });
        },
        updateAuthor: (root, { id, name }) => {
            return authorModel.findOneAndUpdate({ id: id, name: name });
        }
    }
}

export default resolvers;