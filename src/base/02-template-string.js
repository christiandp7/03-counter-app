


const nombre = 'Christian';
const apellido = 'Diaz';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );


export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );