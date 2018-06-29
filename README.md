# Petful Backend

A server for the Thinkful Petful project

## Endpoints

### GET

GET Requests return the next animal in their respective queue. Can be requested at `api/cat` and `api/dog`. Takes no parameters and no headers other than `"Content-Type": "application/json"`.

#### Example JSON Responses 

If the respective queue is **not** empty:
```json
{
  "animal":{
    "imageURL":"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    "imageDescription":"A smiling golden-brown golden retreiver listening to music.",
    "name":"Zeus",
    "sex":"Male",
    "age":3,
    "breed":"Golden Retriever",
    "story":"Owner Passed away"
  },
  "message":"Zeus is the next dog"
}
```

If the respective queue is empty:
```json
{
  "animal": null,
  "message": "All dogs have been adopted"
}
```

### DELETE

DELETE is used to remove (adopt) the first animal in it's queue. Can be requested at `api/cat` and `api/dog`. Takes no parameters and no headers other than `"Content-Type": "application/json"`.

#### Example JSON Responses

If, before the request, the respective queue has at least two animals:
```json
{
  "nextAnimal":{
    "imageURL":"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    "imageDescription":"A German shepard playing.",
    "name":"Luna",
    "sex":"Female",
    "age":1,
    "breed":"German Shepard",
    "story":"Owner 'Passed away'"
  },
  "adoptedAnimal":{
    "imageURL":"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    "imageDescription":"A smiling golden-brown golden retreiver listening to music.",
    "name":"Zeus",
    "sex":"Male",
    "age":3,
    "breed":"Golden Retriever",
    "story":"Owner Passed away"
  },
  "message":"Success"
}
```

If, before the request, the respective queue has one animal:
```json
{
  "nextAnimal": null,
  "adoptedAnimal":{
    "imageURL":"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
    "imageDescription":"A smiling golden-brown golden retreiver listening to music.",
    "name":"Zeus",
    "sex":"Male",
    "age":3,
    "breed":"Golden Retriever",
    "story":"Owner Passed away"
  },
  "message":"Last dog has been adopted"
}
```

If the respective queue is empty:
```json
{
  "nextAnimal": null,
  "adoptedAnimal": null,
  "message":"All dogs have been adopted"
}
```

