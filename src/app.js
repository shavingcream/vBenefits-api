import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Main route');
});

app.listen(3000, () => {
    console.log('vBenefits API running at localhost:3000');
});
