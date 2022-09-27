const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'The Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'The Mini Message Board' });
});

router.post('/new', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
