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
    let rataSikap = convert(it.sikap.sosial) + convert(it.sikap.spiritual)
    let rataPengetahuan = (it.matematika.pengetahuan + it.fisika.pengetahuan + it.kimia.pengetahuan + it.biologi.pengetahuan)
    let rataTrampil = (it.matematika.trampil + it.fisika.trampil + it.kimia.trampil + it.biologi.trampil)
    let rataSeluruh = it.jumlah / 28.0
    let ekstra = (it.ekstra && it.ekstra !== '') ? 1 : 0

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
  const min = (a, b) => a < b
  const max = (a, b) => a > b

  const norms = normalize(items)
  const maxCrits = critsValueByOp(norms, max)
  const minCrits = critsValueByOp(norms, min)

  const maxMin = {
    rataSikap: (maxCrits.rataSikap - minCrits.rataSikap) + 1,
    rataPengetahuan: maxCrits.rataPengetahuan - minCrits.rataPengetahuan + 1,
    rataTrampil: maxCrits.rataTrampil - minCrits.rataTrampil + 1,
    rataSeluruh: maxCrits.rataSeluruh - minCrits.rataSeluruh + 1,
    ekstra: maxCrits.ekstra - minCrits.ekstra + 1
  }

  const critKeys = ['rataSikap', 'rataPengetahuan', 'rataTrampil', 'rataSeluruh', 'ekstra']
  const norms2 = []

  function doNorm2 (key, it, w) { 
    let x = {}
    x[`${key}Normalized`] = ((it[key] - minCrits[key]) / maxMin[key]) * w
    return x
  }

  for (let i = 0; i < norms.length; i++) {
    let it = norms[i]

    let b = critKeys
      .map((k, i) => doNorm2(k, it,weights[i]))
      .reduce((curr, acc) => {
        return { ...curr, ...acc }
      }, { rate: 0 })

    let c = Object.assign({}, it,  b)

    norms2.push(c)
  }

  return norms2
    .map(it => {
      return Object.assign({}, it, {
        rank: it.rataSikapNormalized + it.rataPengetahuanNormalized + it.rataTrampilNormalized + it.rataSeluruhNormalized + it.ekstraNormalized
      })
    })
    .sort((a, b) => (b.rank - a.rank))
}