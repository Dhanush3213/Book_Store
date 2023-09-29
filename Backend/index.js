import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.get('/', (req, res) => {
    return res.status(234).send('Welcome to Mern stack tutorial!');
});

app.use('/books',bookRoutes);
mongoose.connect(mongoDBURL).then(() => {
    console.log("App connection established");

    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });

}).catch((error) => {
    console.error(error);
});
