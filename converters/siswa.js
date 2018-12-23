/**
 * Convert `Siswa` from fastify schema to database schema and vice versa
 */

module.exports = {
  fastifyToDb (f) {
    let db = {
      name: f.name,
      kelas: f.kelas,
      rank: f.rankKelas,
      mat_peng: f.matematika.pengetahuan,
      mat_trampil: f.matematika.trampil,
      kim_peng: f.kimia.pengetahuan,
      kim_trampil: f.kimia.trampil,
      fis_peng: f.fisika.pengetahuan,
      fis_trampil: f.fisika.trampil,
      bio_peng: f.biologi.pengetahuan,
      bio_trampil: f.biologi.trampil,
      sikap_sos: f.sikap.sosial,
      sikap_spirit: f.sikap.spiritual,
      jumlah: f.jumlah
    }
    // column `ekstra` is optional
    if (f.ekstra) {
      db.ekstra = f.ekstra
    }
    if (f.id) {
      db.id = f.id
    }
    return db
  },

  dbToFastify (db) {
    console.log(db)
    let f = {
      name: db.name,
      kelas: db.kelas,
      rankKelas: db.rank,
      matematika: {
        pengetahuan: db.mat_peng,
        trampil: db.mat_trampil
      },
      fisika: {
        pengetahuan: db.fis_peng,
        trampil: db.fis_trampil
      },
      biologi: {
        pengetahuan: db.bio_peng,
        trampil: db.bio_trampil
      },
      kimia: {
        pengetahuan: db.kim_peng,
        trampil: db.kim_trampil
      },
      sikap: {
        sosial: db.sikap_sos,
        spiritual: db.sikap_spirit
      },
      jumlah: db.jumlah
    }
    if (db.ekstra) {
      f.ekstra = db.ekstra
    }
    if (db.id) {
      f.id = db.id
    }
    return f
  }
}