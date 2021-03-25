(()=>{

// class Avenger{
//     nombre:string;
//     equipo:string;
//     nombreReal:string;
//     puedePelar:boolean;
//     peleasGanadas:number;

//     constructor(nombre:string,equipo:string,nombreReal:string,puede:boolean,peleas:number){
//     this.nombre = nombre
//     this.equipo = equipo
//     this.nombreReal = nombreReal
//     this.puedePelar = puede
//     this.peleasGanadas = peleas

//     }
// }

class Avenger{

    //se definen en el scope de la clase por el public
    constructor(public nombre:string,
        public puedePelar:boolean = true,
           public equipo?:string,
           public nombreReal?:string,
           public peleasGanadas?:number,
        ){


    }
}

const antman:Avenger = new Avenger('Antman');
console.log(antman);

})();
 


