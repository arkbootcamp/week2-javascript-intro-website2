// const janjian = new Promise((resolve, reject) => {
//     reject('ada error bro...')
//     resolve('risano')
//     // setTimeout(()=>{
//     //     let success = false;
//     //     let makanan = ["nasi goreng", "nasi padang", "nasi uduk"];
//     //     if (success) {
//     //       resolve(makanan);
//     //     } else {
//     //       reject("ada error bro...");
//     //     }
//     // }, 2000)


  
// });

// janjian
// .then((result)=>{
//     console.log(result);
//     console.log('then di panggil');
//     // result.map((item)=>{
//     //     console.log(item);
//     // })
// })
// .catch((error)=>{
//     console.log(error);
//     console.log('catch di panggil');
// })

const panggilBilanganGenap = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let result = ''
            const RandomNilai = Math.floor(Math.random() * 10);
            if(RandomNilai % 2 === 0){
                result = `Succes !! hasil ${RandomNilai} adalah nilainya genap`
                resolve(result)
            }else{
                result = new Error(`Gagal !! hasil ${RandomNilai} adalah nilainya gajil`)
                reject(result)
            }
        }, 3000)
    })
  
}
// console.log(result);
panggilBilanganGenap()
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})