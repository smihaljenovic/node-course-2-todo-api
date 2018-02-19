// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });


    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });


    db.collection('Users').deleteMany({name: 'Andrew'});

    db.collection('Users').findOneAndDelete({
        _id:'ObjectId("5a8a53ecab06a50a49442ded")'
    }).then(results => {
        console.log(JSON.stringify(results, undefined, 2));
    });


    client.close();
});
