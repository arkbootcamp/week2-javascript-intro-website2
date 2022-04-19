// const hobi = ['ngoding', 'berenang', 'joging', 'menyanyi', 'sdf', 'dsf']

// // const hobiSaya = hobi[2]
// // console.log(hobiSaya);
// const [hobi1, , , hobi2] = hobi
// const [hobi1,hobi2, ...hobiLainnya ] = hobi
// console.log(hobiLainnya);


// object 

const myBio = {
    firstName : 'risano',
    lastName: 'akbar',
    'my-email': 'risan@gmail.com',
    hobby: 'joging',
    adddress: {
        city: 'padang',
    },
}
const friendBio = {
    firstName : 'budi',
    lastName: 'tanjung',
    'my-email': 'risan@gmail.com',
    hobby: 'joging',
    adddress: {
        city: 'padang',
    },
}
// const email = myBio['lastName']

// const {city: kota} = myBio.adddress
// console.log(kota);
// const {firstName, adddress:{city}, lastName, hobby = 'ngoding'} = myBio
// console.log(hobby);

// rest parameter object
// const {firstName,hobby, ...props} = myBio

// console.log(props.hobby);


function printBiodata({firstName, hobby , adddress:{city}, 'my-email': myEmail, ...props}, {firstName: namaTeman}){
    // console.log(`nama saya adalah ${namaTeman} hobi saya adalah ${hobby} dan ${props['my-email']}`);
    // console.log(city);
    console.log(myEmail);
}

printBiodata(myBio, friendBio)

// function useState(data){
//     const result = data + 'bla'


//     return [result, 'helo']
// }


// const name = useState('risano')[0]

// console.log(name);
