(()=>{

  // Uso de Let y Const
  let nombre:string = 'Ricardo Tapia';
  const EDAD:number = 23;

  let PERSONAJE = {
    nombre: nombre,
    edad: EDAD
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface SuperHeroe{
    nombre :string;
    artesMarciales:string[];
  }
  const batman:SuperHeroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  const resultdbl = (a:number,b:number)=>a+b*2;

  function resultadoDoble( a, b ){
    return (a + b) * 2
  }

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvgr = (nombre:string,
                   poder ?:string,
                   arma:string='Arco'
                   )=>{
  let mensaje:string;
  if(poder){
    mensaje = nombre+` tiene el poder de: ${poder} y un arma:${arma}`;
  }else{
    mensaje = nombre+` tiene un ${arma}`;
  }
  }

  function getAvenger( nombre, poder, arma ){
    var mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class rectangulo {
    constructor(public base:number,
                public altura:number){

                }

                calcularArea =():number => this.base* this.altura;
  };


})();