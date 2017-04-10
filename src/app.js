import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const response = {
        hi: 'you',
    };
    res.send(response);
});

app.listen(8000, () => {
    console.log('vBenefits API running at localhost:8000');
});
