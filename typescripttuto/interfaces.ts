(()=>{

    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string;
    }

const enviarMision = ( xmen:Xmen )=>{
console.log(`enviamos a ${xmen.nombre} a la mision`);
}

const wolverine :Xmen ={
    nombre :'Logan',
    edad:60
}

enviarMision(wolverine);
})();
 


