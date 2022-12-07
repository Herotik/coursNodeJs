const fileSys = require('fs');

const path = require('path');

let path1 = path.resolve(__dirname,'assets','files', '1');
let path2 = path.resolve(__dirname,'assets','files', '2');
let path3 = path.resolve(__dirname,'assets','files', 'result');

//Lecture Fichier 1 -->result
fileSys.readFile(path1,'utf8',(err,result) => {
    if(err){console.log(err);return;}
    console.log(result)
    //Lecture Fichier 2 --> result2
    fileSys.readFile(path2,'utf8',(err2,result2) => {
        if(err){console.log(err);return;}
        console.log(result2)
        //ecriture fichier 3 --> result + result 2
        fileSys.writeFile(path3,result.toString() + result2.toString(),(returned) => { console.log('TERMINADO')});
    });
});
