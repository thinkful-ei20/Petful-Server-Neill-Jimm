
const express = require('express');
const router = express.Router();

const Queue = require('./queue/Queue');

let catsQueue = new Queue;
catsQueue.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catsQueue.enqueue({
  imageURL:'https://drive.google.com/open?id=12pmjrHCdJYeslWdClR-uWKPyVauTZAqf',
  imageDescription: 'White and grey calico laying on her back.',
  name: 'Dreamboat',
  sex: 'Female',
  age: 3,
  breed: 'Calico',
  story: 'Thrown on the street'
});
catsQueue.enqueue({
  imageURL:'https://drive.google.com/open?id=1h1IeyVVyimnMKioEK_iSMte0fb-uw0rZ',
  imageDescription: 'White and grey calico sitting on a cat tree.',
  name: 'Dreamboat\'s Twin',
  sex: 'Female',
  age: 4,
  breed: 'Calico',
  story: 'Family moved and couldn\'t taker her'
});


let catsArray = [{
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
  const cat = catsQueue.peek();
  if(cat){
    res.json({
      animal: cat,
      message: `${cat.name} is the next cat`,
    });
  } else {
    res.json({
      animal: null,
      message: 'All cats have been adopted'
    });
  }
});

router.delete('/', (req, res, next) => {
  const adoptedCat = catsQueue.dequeue();
  const nextCat = catsQueue.peek();
  if(nextCat){
    res.json({
      nextAnimal: nextCat,
      adoptedAnimal: adoptedCat,
      message: 'Success'
    });
  } else if(adoptedCat) {
    res.json({
      message: 'Last cat has been adopted',
      adoptedAnimal: adoptedCat,
      nextAnimal: null
    });
  } else {
    res.json({
      message: 'All cats have been adopted',
      adoptedAnimal: null,
      nextAnimal: null
    });
  }
});

module.exports = router;