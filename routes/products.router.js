const express = require('express');
const router = express.Router();
const faker = require('Faker');

router.get('/', (req,res)=>{
  const {paginate} = req.query
  const limit = paginate || 100
  const faker_elements = []
  for (var i = 0; i < limit; i++) {
    faker_elements.push({
      name : faker.commerce.productName(),
      price : parseInt(faker.commerce.price()),
      image : faker.image.imageUrl(),
    })
  }
  res.json(faker_elements)
})
