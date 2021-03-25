(function(){

const miFuncion = function(a:string){
return a.toUpperCase();
};

const miFuncionFlecha = (a:string )=>{
    return a;
}
const miFuncionFlecha2 = (a:string )=> a.toUpperCase();

console.log(miFuncion('algo'));
console.log(miFuncionFlecha2('algo mas'));

const sumarF = (a:number,b:number)=>a+b;
console.log(sumarF(2,2));


const hulk={
    nombre:'Hulk',
    smash(){
        setTimeout(() => {
            console.log(`${this.nombre} smash!!!`);
        }, 1000);
    }
};

hulk.smash();

})();
 


