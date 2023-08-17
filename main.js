alert(`
        Bienvenido al curso de JavaScript.

        Mi nombre es Santiago Alvarez. 

        Estas en mi segunda entrega camino al proyecto final, te invito
        a que pruebes mi segundo simulador basico en js`);
alert("En primer lugar vamos a registrarnos");

//Simulacion de registro sin validacion..

//usuario
let usuario = prompt("Ingrese su nombre de usuario");
if (usuario != "") {
    alert("Genial, a registrado su nombre de usuario");
}
else {
    alert("Debe ingresar un nombre de usuario");
    usuario = prompt("Ingrese su nombre de usuario");
}
//contraseña
let contraseña = prompt("Ingrese su contraseña");
if (contraseña != "") {
    alert("Genial, a registrado su contraseña");
}
else {
    alert("Debe ingresar una contraseña valida");
    contraseña = prompt("Ingrese su contraseña");
}
alert(`
Bienvenido! 🎉
Su nombre de usuario es ${usuario}
Su contraseña es ${contraseña}
Presione el boton "Aceptar" para continuar.`);
alert(`❗IMPORTANTE❗
Para tener una mejor experiencia de usuario utilice siempre
✨minusculas.✨`);
//Arrow functions, utilizar mas abajo
const suma = (a, b,) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const multiplica = (a, b) => a * b;
const porcent = (x) => x * 0.3;


//Eleccion de pelicula
let pelicula = prompt(` Elija desde nuestra cartelera que pelicula desea ver... 🎞🎫
🎬 barbie
🎬 flash
🎬 elementos                 
🎬 avatar
🎬 fragmentada`);
switch (pelicula) {
    case "barbie":
        alert(`Su pelicula es Barbie 💗🎬.`);
        break;
    //Flash
    case "flash":
        alert(`Su pelicula es Flash 🎬.`);
        break;
    //Elementos
    case "elementos":
        alert(`Su pelicula es Elementos 🎬.`);
        break;
    //Avatar
    case "avatar":
        alert(`Su pelicula es Avatar 🎬.`);
        break;
    //Fragmentada       
    case "fragmentada":
        alert(`Su pelicula es Fragmentada 🎬`);
        break;
    default:
        alert(`La pelicula que eligio ver no se encuentra disponible por el momento. 💔❗`);
        pelicula = prompt(` Elija desde nuestra cartelera que pelicula desea ver... 🎞🎫
🎬 barbie
🎬 flash
🎬 elementos                 
🎬 avatar
🎬 fragmentada`);
};

let valorEntrada = 1000;

let cantidadEntradas = parseInt(prompt(`¿Cuántos tickets desea comprar? 
Ingrese un numero. 
Mínimo debe elegir retirar un ticket y como valor maximo solo puede retirar 6 tickets🎫
El valor de cada entrada es de $1000💰`));
let valorTotal1 = multiplica(valorEntrada, cantidadEntradas); {
    if (cantidadEntradas >= 1 && cantidadEntradas <= 6) {
        alert(`Se agregaron ${cantidadEntradas} tickets al carrito, el total actual es de ${valorTotal1}`);
    } else {
        alert(`❌Mínimo debe elegir retirar un ticket y como valor maximo solo puede retirar 6 tickets❌`);
        cantidadEntradas = parseInt(prompt(`¿Cuántos tickets desea comprar? 🎫
El valor de cada entrada es de $1000💰`));
    }
}

alert(`Genial, llego el momento de elegir un combo para disfrutar su pelicula.`);
let combo = prompt(` Elija desde nuestra cartelera que combo desea para disfrutar su pelicula... 😊😎
1:💎 Balde pochoclos + 2 vasos grandes bebida a eleccion + golosina valor: $3.500
2:💎 Balde pochoclos + 2 vasos chicos de bebida a eleccion valor: $3.000
3:💎 Bolsa mediana pochoclos + 2 vasos chicos con bebida a eleccion valor: $2.000                
4:💎 Bolsa mediana de pochoclos. valor: 1500.
5:💎 No deseo ningun combo.`);

let valorCombo1 = 3500;
let valorCombo2 = 3000;
let valorCombo3 = 2000;
let valorCombo4 = 1500;
let valorCombo5 = 0;

switch (combo) {
//Suma combo 1 mas valor entrada   
    case "1":
        let valorcomboyentradas1 = suma(valorTotal1,valorCombo1);
        alert(`Ha agregado un combo del valor de ${valorCombo1} y se suma a su valor de las entradas ${valorTotal1} dando un total de ${valorcomboyentradas1}`);
        let pagoexitoso1 = parseInt(prompt(`Ingrese el monto a pagar ${valorcomboyentradas1}`));
        if(pagoexitoso1 === valorcomboyentradas1){
            alert(`Pago exitoso.`);
        }
        else{
            alert(`El monto ingresado no es valido.`);
            pagoexitoso1 = prompt(`Ingrese el monto a pagar 
        ${valorcomboyentradas1}`)
        }
        break;
//Suma combo 2 mas valor entrada   
    case "2":
        let valorcomboyentradas2 = suma(valorTotal1,valorCombo2);
        alert(`Ha agregado un combo del valor de ${valorCombo2} y se suma a su valor de las entradas ${valorTotal1} dando un total de ${valorcomboyentradas2}`);
        let pagoexitoso2 = parseInt(prompt(`Ingrese el monto a pagar ${valorcomboyentradas2}`));
        if(pagoexitoso2 === valorcomboyentradas2){
            alert(`Pago exitoso.`);
        }
        else{
            alert(`El monto ingresado no es valido.`);
            pagoexitoso2 = prompt(`Ingrese el monto a pagar 
        ${valorcomboyentradas2}`)
        }
        break;
//Suma combo 3 mas valor entrada   
    case "3":
        let valorcomboyentradas3 =suma(valorTotal1,valorCombo3);
        alert(`Ha agregado un combo del valor de ${valorCombo3} y se suma a su valor de las entradas ${valorTotal1} dando un total de ${valorcomboyentradas3}`);
        let pagoexitoso3 = parseInt(prompt(`Ingrese el monto a pagar ${valorcomboyentradas3}`));
        if(pagoexitoso3 === valorcomboyentradas3){
            alert(`Pago exitoso.`);
        }
        else{
            alert(`El monto ingresado no es valido.`);
            pagoexitoso3 = prompt(`Ingrese el monto a pagar 
        ${valorcomboyentradas3}`)
        }
        break;
//Suma combo 4 mas valor entrada   
    case "4":
        let valorcomboyentradas4 = suma(valorTotal1,valorCombo4);
        alert(`Ha agregado un combo del valor de ${valorCombo4} y se suma a su valor de las entradas ${valorTotal1} dando un total de ${valorcomboyentradas4}`);
        let pagoexitoso4 = parseInt(prompt(`Ingrese el monto a pagar ${valorcomboyentradas4}`));
        if(pagoexitoso4 === valorcomboyentradas4){
            alert(`Pago exitoso.`);
        }
        else{
            alert(`El monto ingresado no es valido.`);
            pagoexitoso4 = prompt(`Ingrese el monto a pagar 
        ${valorcomboyentradas4}`)
        }
        break;
//Suma combo 5 mas valor entrada      
    case "5":
        let valorcomboyentradas5 = suma(valorTotal1,valorCombo5);
        alert(`Ha agregado un combo del valor de ${valorCombo5} y se suma a su valor de las entradas ${valorTotal1} dando un total de ${valorcomboyentradas5}`);
        let pagoexitoso5 = parseInt(prompt(`Ingrese el monto a pagar ${valorcomboyentradas5}`));
        if(pagoexitoso5 === valorcomboyentradas5){
            alert(`Pago exitoso.`);
        }
        else{
            alert(`El monto ingresado no es valido.`);
            pagoexitoso5 = prompt(`Ingrese el monto a pagar 
        ${valorcomboyentradas5}`)
        }
        break;
    default:
        alert(`No eligio ninguna opcion valida. Debe ingresar al menos una. 💔❗`);
        combo = prompt(` Elija desde nuestra cartelera que combo desea para disfrutar su pelicula... 😊😎
1:💎 Balde pochoclos + 2 vasos grandes bebida a eleccion + golosina valor: $3.500
2:💎 Balde pochoclos + 2 vasos chicos de bebida a eleccion valor: $3.000
3:💎 Bolsa mediana pochoclos + 2 vasos chicos con bebida a eleccion valor: $2.000                
4:💎 Bolsa mediana de pochoclos. valor: 1500.
5:💎 No deseo ningun combo.`);
};

//Tema dias disponibles
alert(`Las funciones en nuestro cine estan disponibles los dias
miercoles
jueves
viernes
sabado
domingo
consulte que dia esta disponible la funcion que eligio ver.`);


class Diass {
    constructor(nombre,disponibilidad){
        this.nombre = nombre;
        this.disponibilidad = disponibilidad;
    }
}
const dias = []
dias.push(new Diass ("miercoles","disponible"));
dias.push(new Diass("jueves","disponible"));
dias.push(new Diass("viernes","disponible"));
dias.push(new Diass("sabado","disponible"));
dias.push(new Diass("domingo","disponible"));

let nombre = prompt(`Ingrese el dia a consultar disponibilidad
Recuerde que los dias disponibles son;
miercoles - jueves - viernes - sabado - domingo`);
let diadisponible = dias.find(item => item.nombre === nombre);

if(diadisponible){
    let mensajedia = `
    Dia ${diadisponible.nombre}
    Su dia se encuentra ${diadisponible.disponibilidad}
    Ahora solo queda comfirmar el horario de su funcion`
    alert(mensajedia);
}
else{
    alert("El dia no se encuentra disponible");
    nombre = prompt("Ingrese el dia a consultar disponibilidad");
};
alert(`Los horarios disponibles para su pelicula son;
18hs 20hs 22hs`);


//Tema horarios
class Horarios {
    constructor(hora,comfirmacion){
        this.hora = hora;
        this.comfirmacion = comfirmacion;
    }
}
const horas = []
horas.push(new Horarios ("18hs","disponible"));
horas.push(new Horarios("20hs","disponible"));
horas.push(new Horarios("22hs","disponible"));

let hora = prompt(`Ingrese el horario a consultar.
18hs 20hs 22hs`);

let horadisponible= horas.find(itemh => itemh.hora === hora);
if(horadisponible){
    let mensajehora = `
    Horario: ${horadisponible.hora}
    Su horario seleccionado se encuentra ${horadisponible.comfirmacion}`;
    alert(mensajehora);
}
else{
    alert("El horario no se encuentra disponible");
    hora = prompt(`Ingrese el horario a consultar.
18hs 20hs 22hs`);
};
//final 
alert(`Genial, ha completado la simulacion, sus datos de entrada son los siguientes.
Usuario: ${usuario}
Contraseña: ${contraseña}
Pelicula: ${pelicula}
Dia: ${diadisponible.nombre}
Hora: ${horadisponible.hora}
`);
