const express = require('express');
const router = express.Router();
const departments_json = require('../json/api_departments.json')

router.get('/', (req,res) => {
  res.json(departments_json);
})

router.get('/:c_digo_dane_del_departamento', (req,res)=>{
  const{c_digo_dane_del_departamento} = req.params;
  //Filtrar búsqueda
  return departartments_json.filter(
    departamento => departamento.c_digo_dane_del_departamento = c_digo_dane_del_departamento
  )
})
modules.exports = router
