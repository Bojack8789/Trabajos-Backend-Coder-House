/*class Contador {
  constructor (nombre){
      this.nombre = nombre;

      this.conteo = 0;
  }

  static conteoGlobal = 0;

  obtenerResponsable(){
      return this.nombre
  }

  obtenerCuentaIndividual(){
      return this.conteo
  }

  obtenerCuentaGlobal(){
      return Contador.conteoGlobal
  }

  contar(){
      this.conteo ++
      Contador.conteoGlobal ++
  }
}

const c1 = new Contador("Arturo");
const c2 = new Contador("El Paisa");

c1.contar();
c1.contar();
c1.contar();

c2.contar();
c2.contar();


console.log(c1.obtenerCuentaGlobal());

console.log(c2.obtenerCuentaGlobal());
*/

class usuaruio {
  constructor(nombre, apellido) {
      this.nombre = nombre
      this.apeliido = apellido
      this.libros = []
      this.mascotas = []
  }
   getFullName(){
    console.log(`${this.nombre}  ${this.apellido}`)
    }

    addMascota(nuevaMascota){ 
      this.mascotas.push(nuevaMascota)
    }
    countMascotas(){ 
      console.log(this.mascotas.length)
    }
    addBook(nomb, aut){
      this.libros.push({nombre: nomb, autor: aut })
    }
    getBookNames(){
      const  nombreLibros=[];
      for(const libro of this.libros){
        nombreLibros.push(libro.nombre)
      }
      console.log(nombreLibros);
    }

}


  



let usuario1 = new usuaruio ("Arturo", "Fernandez")
 
usuario1.getFullName();
usuario1.addMascota("kenai");
usuario1.addMascota("capitan");
usuario1.countMascotas();
usuario1.addBook("El Aleph","Borges");
usuario1.addBook("Messi es un perro","Hernan Casiari");
usuario1.getBookNames();


