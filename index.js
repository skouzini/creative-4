var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}));

router.use(bodyParser.json());

let comments = [];
let id = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/get_comments', (req, res) => {
    res.send(comments);
});

router.post('/post_comment', (req, res) => {
    id++;
    let comment = {
        id: id,
        content: req.body.content,
        user: req.body.user,
        time: req.body.time,
    };
    comments.unshift(comment);
    res.send(comment);
});

module.exports = router;
