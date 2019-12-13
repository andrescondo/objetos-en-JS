var Carlos =
{
	name : 'Carlos',
	lastname : 'Ramiréz',
	age : '45'
};

var Dario =
{
	name : 'Dario',
	lastname :'Goméz',
	age : 27
};

function imprimirNameEnMayusculas(name)
{
	name = name.toUpperCase(name);
	console.log(name)

}

imprimirNameEnMayusculas(Carlos.name);

imprimirNameEnMayusculas(Dario.name);


console.log(Dario);