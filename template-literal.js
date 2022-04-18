// const name = 'risano'
// const age = 17
// multi line
// 1. saya ingin belajar programmer
// 2. saya ingin belajar programmer
// 3. saya ingin belajar programmer

// console.log('1. saya ingin belajar programmer\n2. saya ingin belajar programmer\n3. saya ingin belajar programmer');
// const tamplate = `1. saya ingin belajar programmer
// 2. saya ingin belajar programmer
// 3. saya ingin belajar programmer`
// console.log(tamplate);

// // Emmbeded Expression
const nilaiMTK = 90
const nilaiBI = 60
console.log(nilaiMTK + nilaiBI);

// nilai mtk saya adalah 90 dan BI saya 80

// const result =  "nilai mtk saya adalah "+nilaiMTK+" dan BI saya "+ nilaiBI

// const result = `nilai mtk saya adalah ${nilaiMTK} dan BI saya adalah ${nilaiBI}`


// jumlah nilai saya 170 dan rata2 85
// const result = "jumlah nilai saya "+ (nilaiBI+nilaiMTK) + " dan rata2 "+ (nilaiMTK + nilaiBI) / 2 
const result = `jumlah nilai saya ${nilaiBI + nilaiMTK} dan rata2 ${(nilaiMTK+nilaiBI)/2} dan saya ${(nilaiMTK+nilaiBI)/2 > 80 ? 'lulus': 'gagal'}`
console.log(result);
