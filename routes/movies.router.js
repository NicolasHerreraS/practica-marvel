const express = require('express');
const router = express.Router();


/* Creacion de endpoints*/

/* HTTP request: GET*/
router.get('/',(req, res)=>{
  res.json([{
    movieId: 1,
    movie: 'Spooderman',
    version: 3,
  },
  {
    movieId: 2,
    movie: 'X-Men',
    version: 2,
  },
  {
    movieId: 3,
    movie: 'Batiman',
    version: 6,
  },
  {
    movieId: 4,
    movie: 'Nya',
    version: 5,
  }])
})

router.get('/:idMovie',(req,res)=>{
  const {idMovie} = req.params
  res.json({
    idMovie,
    movie: 'Spooderman',
    version: 4,
    info:{
      duration: '120 min',
      sinopsis: 'lorem ipsum'
    }
  })
})

module.exports = router;
