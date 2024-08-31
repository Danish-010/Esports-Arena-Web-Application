import express from 'express';
import hbs from 'hbs';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/main.js';
import Detail from './models/Detail.js';
import Slider from './models/Slider.js';
import Game from './models/Game.js';

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('D:\\My Data\\COLLEGE STUFF AND STUDY\\CS WORK\\my projects\\web dev\\website\\public'));
app.use('/', routes);

// View engine setup
app.set('views', 'D:\\My Data\\COLLEGE STUFF AND STUDY\\CS WORK\\my projects\\web dev\\website\\views');
app.set('view engine', 'hbs');

hbs.registerPartials('D:\\My Data\\COLLEGE STUFF AND STUDY\\CS WORK\\my projects\\web dev\\website\\views\\partials');

// Database connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/mywebsitedatabase', () => {
    console.log('Database connected successfully');

    Game.create([
        {
            icon: 'fa-solid fa-gamepad',
            title: 'DOTA 2',
            description: 'Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve.Dota 2 is played in matches between two teams of five players.',
            linktext: 'https://www.dota2.com/home',
            link: 'More Details',
            teamlink: 'https://pro.eslgaming.com/worldranking/dota2/',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Battlegrounds Mobile India',
            description: 'BGMI developed by Krafton brought the biggest jump in the history of esports in India and spiked up the Indian gaming market reaching $2.6 billion in revenue.',
            linktext: 'https://na.battlegrounds.pubg.com/',
            link: 'More Details',
            teamlink: 'https://www.indiatoday.in/sports/e-sports/story/espl-season-2-india-s-top-bgmi-teams-including-team-soul-godlike-tsm-invited-for-espl-season-2-1967256-2022-08-08',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Fortnite',
            description: 'Fortnite is an online video game developed by Epic Games and released in 2017. It is a battle royale in which the last man standing in the lobby of 100 wins.',
            linktext: 'https://www.fortnite.com/',
            link: 'More Details',
            teamlink: 'https://www.ranker.com/list/best-fortnite-esports-teams/ranker-games',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Counter-Strike: Global Offensive',
            description: 'Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment.',
            linktext: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
            link: 'More Details',
            teamlink: 'https://pro.eslgaming.com/worldranking/csgo/',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Apex Legends',
            description: 'Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.',
            linktext: 'https://www.ea.com/en-gb/games/apex-legends',
            link: 'More Details',
            teamlink: 'https://escharts.com/teams/apex',
        },
        {
            icon: 'fa-solid fa-gamepad',
            title: 'Rainbow Six Siege',
            description: 'Tom Clancy\'s Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.',
            linktext: 'https://www.ubisoft.com/en-gb/game/rainbow-six/siege',
            link: 'More Details',
            teamlink: 'https://www.r6esports.com.br/en-us/esports/rainbow-six/siege/teams',
        },
    ]);

    Slider.create([
        {
            title: 'Become An E-Athlete',
            subtitle: 'You can make gaming your career; be the change.',
            imageurl: '/static/images/sliderimage1.jpg',
        },
        {
            title: 'Make Your Gaming Content',
            subtitle: 'Showcase your skills on platforms like YouTube and Twitch and earn a huge amount of money.',
            imageurl: '/static/images/sliderimage2.jpg',
        },
        {
            title: 'Join a Gaming Organisation',
            subtitle: 'Join a gaming organisation, get exclusive brand deals, and earn money.',
            imageurl: '/static/images/sliderimage3.jpg',
        },
    ]);

    Detail.create({
        brandname: 'Gaming Era',
        brand_icon_url: '/static/images/websiteicon.jpg',
        links: [
            {
                label: 'Home',
                url: '/',
            },
            {
                label: 'Games',
                url: '/#game',
            },
            {
                label: 'About',
                url: '/#about_section',
            },
            {
                label: 'Contact Us',
                url: '/#contact_us_section',
            },
        ],
    });
});

// Start the server
app.listen(2000, () => {
    console.log('Server started');
});
