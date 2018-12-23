const fp =require('fastify-plugin')
const axios = require('axios')
const siswaConverter = require('../converters/siswa')

module.exports = fp(async (fastify, options) => {
  const knex = fastify.knex
  const gsService = fastify.services.groupSiswa

  fastify.decorate('groupListener', {

    async memberChange (id) {
      // Get all items
      // Convert from fastify schema to db schema
      console.log('id = ', id)
      let items = await gsService.findMembers(id)
      items = items.map(siswaConverter.dbToFastify)
      
      let payload = {
        id,
        items
      }
      // Contact AI server
      axios.post('http://localhost:5000/calculate', payload)
        .then(resp => {
          console.log('DONE RUN SMART')
        })
        .catch(err => {
          console.log(err)
          console.log('SOMETHING WRONG HAPPENS WHEN CALCULATE RANKS')
        })
    },

    async groupDelete (id) {
      // Contact AI server
      axios.post('http://localhost:5000/deletegroup', { id })
        .then(resp => {
          console.log('DONE DELETE GROUP')
        })
        .catch(err => {
          console.log(err)
          console.log('SOMETHING WRONG HAPPENS WHEN CALCULATE RANKS')
        })
    },
    
    async groupNew (id) {
      // Contact AI server
      axios.post('http://localhost:5000/newgroup', { id })
        .then(resp => {
          console.log('DONE CREATE NEW GROUP')
        })
        .catch(err => {
          console.log(err)
          console.log('SOMETHING WRONG HAPPENS WHEN CALCULATE RANKS')
        })
    }

  })
})