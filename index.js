// para poder referenciar mejor y no tener que escribir codigo al pepe, es mejor realizar una clase, con dentro de ella lo que es el cuadro, sus propiedadaes.
// y despues, a esas propiedades, referenciarlas con funciones, donde en esas funciones retornen lo que el usuario seleccione.
// entonces, tengo que crear 4 funciones o 5, una de cada propiedad, con todas sus opciones dentro, y un condicional que me devuelva X valor, que haya seleccionado el usuario y que con ese retorno se me vaya armando la clase de CUADRO NUEVO. 
// luego, que de esos cuadros nuevos, (que se vayan creando cada vez que clickean  en agregar a carrito,) se vayan agregando los cuadros a un array de carro con el preco de cada uno dee ellos y de cada una de sus propedades, las cantidades de cuadros y el total de precios y el precio de cada uno.
//  para lograr esto ultimo, deberia crear un array de objetos? o como puedo hacerlo? o crear otra clase que sea precio, nombre y referencia.
// ___// como hago la relacion para que el return se aplique sobre cada uno de las propiedades? 
//Creo la fn, con el (nombredevariable que rellena con prompt?){
    // condicionales
// }

// }
// let ingresartamanio = prompt (ingrese tamanio)
// asi con cada una de las propiedades, entonces despues creo una CONST (que se active con un evento de click, cuando la agrega al carrito, mandando el cuadro completo al array carrito)

// y aca con esta const CuadroTerminado = new cuadroNuevo (class) (variable tamanio, variable papel, variable montaje, variable marco)

//Otra forma de realizarlo es crear cada una de las propiedades, un array de objetos, (lo cual es muucho mas codigo,) con un ID cada uno, ej: si elegis paspartou tama;o a4 que salga id: X... lo mnejor seria hacerlo directamente con las clases. 


// array carrito de compra, vacio para poder ir pusheando cada cuadro que se termina.
const carritoDeCompras = [];

// class para la creacion de cada uno de los cuadros, con todas las propiedades y funciones de eleccion del usuario.

class CrearCuadro {
    constructor (tamaño, papel, montaje, marco){
        this.tamaño = tamaño,
        this.papel = papel,
        this.montaje = montaje,
        this.marco = marco
    }
}


// funcion de eleccion de tamaño:
function tamaños(tamañoElegido){
    switch(tamañoElegido){
            case 0:
            return ("Dimensiones: 80cm X 110cm")
            // break;
            case 1:
                return ("Dimensiones: 60cm X 85cm")
                // break;
            case 2:
            return ("Dimensiones: 42cm X 60cm")
            // break;
            case 3:
            return ("Dimensiones: 27cm X 42cm")
            // break;
            case 4:
            return ("Dimensiones: 27cm X 21cm")
            // break;
            case 5:
            return ("Dimensiones: 15 X 21cm")
            // break;
            default:
                alert ("Porfavor seleccione un tamaño.")
    }
}

// funcion de papel: 
function papeles(papelElegido){
    if(papelElegido == 1){
        return ("Papel de impresion: 'BRILLO'")
    }
    else if(papelElegido == 2){
        return ("Papel de impresion: 'MATE'")
    }
    else if(papelElegido == 3){
        return ("Papel de impresion: 'FINEART'")
    }
    else{
        return ("Papel de impresion: 'Autoadhesivo'")
    }
}

// funcion de montaje:
function montajes(montajeElegido){
    switch (montajeElegido){
        case 1:
            
            return ('Montaje en Paspartou')
            // break
        case 2:
            return ("Montaje en Foamboard")
            // break
        case 3:
            return ("Montaje en Fibrofacil")
            // break
        default:
            return ("Montaje en Autoadhesivo.")
    }
}

// funcion para eleccion de marcos y si tiene o no vidrio:
function marcos(marcoElegido){
    if(marcoElegido == 1){
        return ("Marco de madera nogal")
    }
    else if (marcoElegido == 2){
        return("Marco madera nogal, con vidrio")
    }
    else if (marcoElegido == 3){
        return ("Marco de madera pino")
    }
    else if (marcoElegido == 4){
        return("Marco madera pino, con vidrio")
    }
    else (
        "sin marco"
    )
    }

// variables de solicitud de datos para la eleccion de propiedades, llamando a la fn de cada una de las propiedades y retornando el valor  de los condicionales:
let tamañoElegido = tamaños (parseInt(prompt ("Elija el tamaño de impresion: 'A0' (0), 'A1' (1), 'A2' (2), 'A3' (3), 'A4' (4), ó, 'A5' (5)")));
let papelElegido = papeles (parseInt( prompt ("Seleccionar papel: 'BRILLO' (1), 'MATE' (2), o 'FINEART' (3)") ));
let montajeElegido = montajes (parseInt ( prompt ("Seleccione el tipo de montaje: 'PASPARTOU' (1), 'FOAMBOARD' (2), o, 'FIBROFACIL' (3)") ) );   
let marcoElegido = marcos (parseInt ( prompt ("Elija su marco: 'MARCO NOGAL' (1), con vidrio (2), 'MARCO PINO' (3), con vidrio (4), 'SIN MARCO' (5).") ) ) ;




                    // CONSULTA: Es mas conveniente llamarlas como esta arriba? o hacerlo como aca abajo y arriba solo la VAR con el prompt? 

                    // tamaños(tamañoElegido);
                    // papeles(papelElegido);
                    // montajes(montajeElegido);
                    // marcos(marcoElegido)

                    // CONSULTA 




// cuadro terminado con todas sus propiedades, para luego pushear al carrito de compras: 
const cuadroCreado = new CrearCuadro (tamañoElegido, papelElegido, montajeElegido, marcoElegido);
console.log(cuadroCreado);
carritoDeCompras.push(cuadroCreado);
console.log

// COMO CREO LOS PRECIOS DE CADA UNA DE LAS OPCIONES? REALIZANDO UN ARRAY DE OBJETOS CON ID? para luego sumarlos y obtener el precio total de cada cuadro.... no comprenderia como relacionarlos...


// arrys de lista de precios de cada una de las propiedades.
const precioTamaños = [
    {
    id: A0,
    precio: 9500,

    id: A1,
    precio: 75000,
    
    id: A2,
    precio: 6000,

    id: A3,
    precio: 4500,

    id: A4,
    precio: 3000,

    id: A5,
    precio: 2000,
}
];

const precioMontajes = [
    {

    id: PASPARTOU,
    precio: 1500,

    id: FOAMBOARD,
    precio: 2000,

    id: FIBROFACIL,
    precio: 1000,

    id: AUTOADESIVO,
    precio: 700,

    }
];

const precioPapeles = [
    {
        id: MATE,
    precio: 1000,

    id: BRILLO,
    precio: 1500,
    
    id: FINEART,
    precio: 2000,
    }
];

const precioMarcos =[
    {
        id: NOGAL,
        precio: 500,

        id: PINO,
        precio: 500,
    }
]

// para cuando el usuario elije las propiedades, que el algoritmo recorra cada array de precios, encuentre el id y luego genere la suma de todas las selecciones: 

function sumaDePrecios(precioTamaños, precioPapeles, precioMontajes, precioMarcos){
    for (id of precioTamaños){
        return precio
    }
    for (id of precioPapeles){
        return precio
    }
    for (id of precioMontajes){
        return precio
    }
    for (id of precioMarcos){
        return precio
    }
}

// constante de precios, donde se van a ir sumando todos los que seleccione el usuario
const precios = []





