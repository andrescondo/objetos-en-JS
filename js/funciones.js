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
	var name = people.name.toUpperCase()
	console.log(name)

}

imprimirNameEnMayusculas(Carlos)

imprimirNameEnMayusculas(Dario)


console.log(Dario);