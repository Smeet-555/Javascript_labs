// path core modules

// let path = require('path')

// console.log(path.dirname('/Users/smeetraichura/Desktop/COLLEGE'));
// console.log(path.join('/Users/smeetraichura/Desktop/COLLEGE' , '/Users/smeetraichura/Desktop/java labs'));

// console.log(path.resolve('/Users/smeetraichura/Desktop/COLLEGE' , '/Users/smeetraichura/Desktop/java labs'));

// console.log(path.relative('/Users/smeetraichura/Desktop/COLLEGE' , '/Users/smeetraichura/Desktop/java labs'));

// console.log(path.normalize('/Users/smeetraichura/Desktop/COLLEGE'));


// fs core modules

let fs = require('fs');
// fs.exists('/Users/smeetraichura/Desktop/COLLEGE' ,(exists)=>{
//     console.log(exists ? 'found' : 'not found');
    
// })

// fs.stat('/Users/smeetraichura/Desktop/COLLEGE', (err, data)=>{
//     console.log(data);
// })

let data = fs.readFileSync('/Users/smeetraichura/Desktop/COLLEGE/sem3/JS')
console.log(data.toString);






