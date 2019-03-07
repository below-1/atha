function normalize (items) {

  function convert (val) {
    switch (val) {
      case 'A': return 4
      case 'B': return 3
      case 'C': return 2
      case 'D': return 1
    }
  }

  let result = []
  for (let i = 0; i < items.length; i++) {
    let it = items[i]
    let rataSikap = (convert(it.sikap.sosial) + convert(it.sikap.spiritual)) / 2.0
    let rataPengetahuan = (it.matematika.pengetahuan + it.fisika.pengetahuan + it.kimia.pengetahuan + it.biologi.pengetahuan) / 4.0
    let rataTrampil = (it.matematika.trampil + it.fisika.trampil + it.kimia.trampil + it.biologi.trampil) / 4.0
    let rataSeluruh = it.jumlah / 28.0
    let ekstra = (it.ekstra && it.ekstra !== '' && it.ekstra !== 'Tidak ada') ? 1 : 0

    result.push({
      id: it.id,
      name: it.name,
      kelas: it.kelas,
      rankKelas: it.rankKelas,
      rataSikap,
      rataPengetahuan,
      rataTrampil,
      rataSeluruh,
      ekstra
    })
  }
  return result
}

function critsValueByOp (items, op) {

  function getByOp (key, curr, acc) {
    return op(curr[key], acc[key]) ? curr[key] : acc[key]
  }
  
  return items.reduce((curr, acc) => {
    return {
      rataSikap: getByOp('rataSikap', curr, acc),
      rataPengetahuan: getByOp('rataPengetahuan', curr, acc),
      rataTrampil: getByOp('rataTrampil', curr, acc),
      rataSeluruh: getByOp('rataSeluruh', curr, acc),
      ekstra: getByOp('ekstra', curr, acc)
    }
  })
}

module.exports = (items, weights) => {
  // const weights = JSON.parse(_weights).map(v => {
  //   return parseFloat(v)
  // })

  const min = (a, b) => a < b
  const max = (a, b) => a > b

  const norms = normalize(items)
  let maxCrits = critsValueByOp(norms, max)
  let minCrits = critsValueByOp(norms, min)
  let _maxCrits = {
    rataSikap: -1,
    rataPengetahuan: -1,
    rataTrampil: -1,
    rataSeluruh: -1,
    ekstra: -1
  }
  let _minCrits = {
    rataSikap: 9999,
    rataPengetahuan: 9999,
    rataTrampil: 9999,
    rataSeluruh: 9999,
    ekstra: 9999
  }

  for (let i = 0; i < norms.length; i++) {
    let curr = norms[i]

    if (curr.rataSikap > _maxCrits.rataSikap) {
      _maxCrits.rataSikap = curr.rataSikap
    }
    if (curr.rataPengetahuan > _maxCrits.rataPengetahuan) {
      _maxCrits.rataPengetahuan = curr.rataPengetahuan
    }
    if (curr.rataTrampil > _maxCrits.rataTrampil) {
      _maxCrits.rataTrampil = curr.rataTrampil
    }
    if (curr.rataSeluruh > _maxCrits.rataSeluruh) {
      _maxCrits.rataSeluruh = curr.rataSeluruh
    }
    if (curr.ekstra > _maxCrits.ekstra) {
      _maxCrits.ekstra = curr.ekstra
    }

    if (curr.rataSikap < _minCrits.rataSikap) {
      _minCrits.rataSikap = curr.rataSikap
    }
    if (curr.rataPengetahuan < _minCrits.rataPengetahuan) {
      _minCrits.rataPengetahuan = curr.rataPengetahuan
    }
    if (curr.rataTrampil < _minCrits.rataTrampil) {
      _minCrits.rataTrampil = curr.rataTrampil
    }
    if (curr.rataSeluruh < _minCrits.rataSeluruh) {
      _minCrits.rataSeluruh = curr.rataSeluruh
    }
    if (curr.ekstra < _minCrits.ekstra) {
      _minCrits.ekstra = curr.ekstra
    }
  }

  maxCrits = _maxCrits
  minCrits = _minCrits
  

  // console.log('maxcrits', _maxCrits)
  // console.log('mincrits', minCrits)
  const maxMin = {
    rataSikap: (maxCrits.rataSikap - minCrits.rataSikap),
    rataPengetahuan: maxCrits.rataPengetahuan - minCrits.rataPengetahuan ,
    rataTrampil: maxCrits.rataTrampil - minCrits.rataTrampil,
    rataSeluruh: maxCrits.rataSeluruh - minCrits.rataSeluruh,
    ekstra: maxCrits.ekstra - minCrits.ekstra
  }

  // console.log('here', maxMin)

  const critKeys = ['rataSikap', 'rataPengetahuan', 'rataSeluruh', 'rataTrampil', 'ekstra']
  const norms2 = []

  function doNorm2 (key, it, w) { 
    let x = {}
    x[`${key}Normalized`] = ((it[key] - minCrits[key]) / (maxCrits[key] - minCrits[key])) * w
    return x
  }

  for (let i = 0; i < norms.length; i++) {
    let it = norms[i]
    // console.log('it', it)

    let b = critKeys
      .map((k, i) => doNorm2(k, it,weights[i]))
      .reduce((curr, acc) => {
        // console.log(curr)
        return { ...curr, ...acc }
      }, { rate: 0 })

    let c = Object.assign({}, it,  b)
    // console.log('----')

    norms2.push(c)
  }

  return norms2
    .map(it => {
      // console.log(it)
      return Object.assign({}, it, {
        rank: it.rataSikapNormalized + it.rataPengetahuanNormalized + it.rataTrampilNormalized + it.rataSeluruhNormalized + it.ekstraNormalized
      })
    })
    .sort((a, b) => (b.rank - a.rank))
}