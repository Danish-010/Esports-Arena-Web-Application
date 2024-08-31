import express from 'express';
import Detail from '../models/Detail.js';
import Game from '../models/Game.js';
import Slider from '../models/Slider.js';
import Contact from '../models/Contact.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const details = await Detail.findOne({ brandname: 'Gaming Era' });
        const slides = await Slider.find();
        const games = await Game.find();
        console.log(slides);

        res.render('index.hbs', {
            details,
            slides,
            games,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Process contact form
router.post('/process-contact-form', async (req, res) => {
    console.log('Form is submitted');
    console.log(req.body);

    try {
        const data = await Contact.create(req.body);
        console.log(data);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

export default router;
