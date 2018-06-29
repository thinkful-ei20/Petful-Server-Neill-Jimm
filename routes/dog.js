
const express = require('express');
const router = express.Router();

let dogsQueue = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner `Passed away`'
},{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Jupiter',
  sex: 'Male',
  age: 2,
  breed: 'Golden Retriever',
  story: 'Owner `Passed away`',
}];

router.get('/', (req, res, next) => {
  
  const dog = dogsQueue.splice(0, 1)[0];
  if(dog){
    res.json(dog);
  } else {
    res.json({err: 'All dogs have been adopted'});
  }

});

module.exports = router;