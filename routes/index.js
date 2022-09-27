const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Help millions of users get the most out of their favourite browser. Your contributions will reach millions of users worldwide, and you can do it from the comfort of your couch!',
    user: 'Mozilla',
    added: new Date(),
  },
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
  messages.unshift({
    text: req.body.msgTxt,
    user: req.body.msgAuthor,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
