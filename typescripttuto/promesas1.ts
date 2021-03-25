(()=>{

console.log('Inicio');
const promesa1 = new Promise((resolve,reject)=>{
setTimeout(() => {
    //resolve('se termino el timeout');
    reject('error del timeout');
}, 1000);
});

promesa1
        .then(mensaje => console.log(mensaje))
        .catch(error  => console.warn(error))

console.log('Fin');









})();
 


