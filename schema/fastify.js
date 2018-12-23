module.exports = function (fastify, options, next) {

  const user = {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' }
    },
    required: [ 'pengetahuan', 'trampil' ]
  }

  const userEntity = {
    type: 'object',
    properties: {
      ...(user.properties),
      id: { type: 'number' }
    },
    required: [ ...(user.required), 'id' ]
  }

  const nilai = {
    type: 'object',
    properties: {
      pengetahuan: { type: 'number' },
      trampil: { type: 'number' }
    },
    required: [ 'pengetahuan', 'trampil' ]
  }

  const siswa = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      kelas: { type: 'string' },
      rankKelas: { type: 'number' },

      matematika: 'nilai#',
      fisika: 'nilai#',
      kimia: 'nilai#',
      biologi: 'nilai#',
      sikap: {
        type: 'object',
        properties: {
          sosial: {
            type: 'string',
            enum: ['A', 'B', 'C', 'D', 'E']
          },
          spiritual: {
            type: 'string',
            enum: ['A', 'B', 'C', 'D', 'E']
          }
        }
      },
      jumlah: { type: 'number' },
      ekstra: { type: 'string' }
    },
    required: [ 'name', 'kelas', 'rankKelas', 'matematika', 'fisika', 'kimia', 'biologi', 'sikap', 'jumlah' ]
  }

  const siswaEntity = {
    type: 'object',
    properties: {
      ...(siswa.properties),
      id: { type: 'number' }
    },
    required: [ ...(siswa.required), 'id' ]
  }

  const groupSiswa = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      ta: { type: 'string' },
      guru: { type: 'string' }
    },
    required: ['name', 'guru', 'ta']
  }

  const groupSiswaEntity = {
    type: 'object',
    properties: {
      ...(groupSiswa.properties),
      id: { type: 'number' }
    },
    required: [ ...(groupSiswa.required), 'id' ]
  }

  fastify.addSchema({ $id: 'user', ...user})
  fastify.addSchema({ $id: 'userEntity', ...userEntity})
  fastify.addSchema({ $id: 'nilai', ...nilai})
  fastify.addSchema({ $id: 'siswa', ...siswa})
  fastify.addSchema({ $id: 'siswaEntity', ...siswaEntity})
  fastify.addSchema({ $id: 'groupSiswa', ...groupSiswa})
  fastify.addSchema({ $id: 'groupSiswaEntity', ...groupSiswaEntity})

  next()

};