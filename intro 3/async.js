// sync

console.log('print 1');
console.log('print 2');
console.log('print 3');

// async

console.log('print 1');
setTimeout(()=>{
    console.log('print 2');
}, 500)
console.log('print 3');