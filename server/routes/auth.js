var router = require('express').Router();


router.post('/signin', (req, res) => {
    res.send({ express: 'Hello From Express' });
})

router.post('/signup', (req, res) => {
    res.send({ express: 'Hello From Express' });
})

router.post('/verify', (req, res) => {
    res.send({ express: 'Hello From Express' });
})

module.exports = router;