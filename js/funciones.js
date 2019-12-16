var Carlos ={
	name: 'Carlos',
	lastname: 'Ramiréz',
	age: 45
}

var Dario ={
	name: 'Dario',
	lastname:'Goméz',
	age: 27
}

function imprimirNameEnMayusculas(people)
{
	var {name} = people
	console.log(name.toUpperCase())
}

imprimirNameEnMayusculas(Carlos)

imprimirNameEnMayusculas(Dario)

imprimirNameEnMayusculas({name: 'raul'})

function imprimirNombreYEdad(data)
{
	var {name , age} = data;
	console.log(`Hola me llamo ${name} y tengo ${age} años `);
}

imprimirNombreYEdad(Carlos);

imprimirNombreYEdad(Dario);




 function cumple (data)
 {
 	return{
 		
 		...data,
 		age : data.age + 1
 	} 	
 }