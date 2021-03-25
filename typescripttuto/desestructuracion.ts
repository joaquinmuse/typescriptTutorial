(()=>{

const avenger = {
    nombre:'Steve',
    codigo:'Capitan america',
    poder:'escudo'
}

let {nombre ,codigo} = avenger;

    console.log(nombre);
    console.log(codigo);

const avengers:string[]=['Thor','Ironman','Spiderman'];

const [loki,,spiderman]= avengers;

console.log(loki);
// console.log(ironman);
 console.log(spiderman);

const extraerArreglo = ([,iron,]:string[])=>{
    console.log(iron);
};





})();
 


