
const express = require('express');
const router = express.Router();

let catsQueue = [{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
},{
  imageURL:'https://drive.google.com/open?id=12pmjrHCdJYeslWdClR-uWKPyVauTZAqf',
  imageDescription: 'White and grey calico laying on her back.',
  name: 'Dreamboat',
  sex: 'Female',
  age: 3,
  breed: 'Calico',
  story: 'Thrown on the street'
},{
  imageURL:'https://drive.google.com/open?id=1h1IeyVVyimnMKioEK_iSMte0fb-uw0rZ',
  imageDescription: 'White and grey calico sitting on a cat tree.',
  name: 'Dreamboat\'s Twin',
  sex: 'Female',
  age: 4,
  breed: 'Calico',
  story: 'Family moved and couldn\'t taker her'
}];

router.get('/', (req, res, next) => {
  
  const cat = catsQueue.slice(0, 1)[0];
  if(cat){
    res.json(cat);
  } else {
    res.json({err: 'All cats have been adopted'});
  }

});

module.exports = router;