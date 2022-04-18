// let myHobby = ['berenang', 'ngoding', 'joging']

// // const friendHobby = ['nyanyi', 'menari' , 'ngoding']

// // const resultHobby = [ ...friendHobby, ...myHobby]

// // console.log(resultHobby);


// const resultHobby = [...myHobby]
// resultHobby[1] = 'desain'

// console.log(myHobby);

const myName = {
    name : 'risano',
    age: 19,
    email : 'risan@gmail.com'
}

const newName = {
    ...myName,
    age: 25
}
console.log(newName);

// const friendName = {
//     name : 'budi',
//     age: 20,
//     address : 'jakarta'
// }
// const newBio = bio
// newBio.name = 'budi'
// console.log(bio);
// const newName = {
//     ...myName,
//     ...friendName
// }
// const newName = {
//     name : 'risano',
//     age: 19,
//     email : 'risan@gmail.com',
//     name : 'budi',
//     age: 20,
//     address : 'jakarta'
// }
// console.log(newName);