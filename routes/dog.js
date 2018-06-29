
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
  const dog = dogsQueue.slice(0, 1)[0];
  if(dog){
    res.json({
      animal: dog,
      message: `${dog.name} is the next dog`,
    });
  } else {
    res.json({
      animal: null,
      message: 'All dogs have been adopted'
    });
  }
});

router.delete('/', (req, res, next) => {
  const adoptedDog = dogsQueue.splice(0, 1)[0];
  const nextDog = dogsQueue.slice(0, 1)[0];
  if(nextDog){
    res.json({
      nextAnimal: nextDog,
      adoptedAnimal: adoptedDog,
      message: 'Success'
    });
  } else if(adoptedDog) {
    res.json({
      message: 'Last dog has been adopted',
      adoptedAnimal: adoptedDog,
      nextAnimal: null
    });
  } else {
    res.json({
      message: 'All dogs have been adopted',
      adoptedAnimal: null,
      nextAnimal: null
    });
  }
});

module.exports = router;