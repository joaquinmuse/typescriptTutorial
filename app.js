"use strict";
(() => {
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
    class Avenger {
        //se definen en el scope de la clase por el public
        constructor(nombre, puedePelar = true, equipo, nombreReal, peleasGanadas) {
            this.nombre = nombre;
            this.puedePelar = puedePelar;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman');
    console.log(antman);
})();
