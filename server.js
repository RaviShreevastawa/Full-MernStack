import express from 'express';

const app = express();

app.use(express.static('dist'));

//app.get('/', (req, res) =>{
//    res.send('Server is ready');
//});

//get a list of jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another  joke',
            content: 'This is a another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    }
);