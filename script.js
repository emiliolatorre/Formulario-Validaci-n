// Validación de formularios
// FormData averigurar si acumula cada submit. diria que no, entonces crear otra const que acumule push.
// en el segundo filtro cuando el array esta vacio ese boton debe estar disable. luego una vez activo, cuando no haya ninguna peli de ese genero, que salte un mensaje que no hay pelis de ese genero. otra opcion es que se llene ese filtro solo con los generos que hay en el array.


document.addEventListener('DOMContentLoaded', () => {

const myForm = document.querySelector('#myForm');
const filtro = document.querySelector('#Filtro');
const noSelect = document.querySelector('#noSelect');
const peliculasFiltradas = document.querySelector('#peliculasFiltradas');

const peliculasAcumulado = [];
const generosAcumulado = [];
let generosUnicosArray = [];

const fragment = document.createDocumentFragment()

// EVENTOS
myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    validarForm();
    recogerGeneros();
    pintarOptions();
    peliculasFiltradas.innerHTML = '';
});

filtro.addEventListener('change', (event) => {
    pintarPelisFiltradas();
  });

// FUNCIONES

const validarForm =()=> {
    const titulo = myForm.Titulo.value;
    const director = myForm.Director.value;
    const año = myForm.Año.value;
    const genero = myForm.Genero.value;

    let errores = '';
    
    if (titulo == '') {
        errores += '<li>El Titulo es obligatorio</li>';
    } else if (!/[a-zA-Z\s]{3,}/.test(titulo)) {
        errores += '<li>El Titulo debe contener caracteres alfanuméricos</li>';
    };

    if (director == '') {
        errores += '<li>El Director es obligatorio</li>';
    } else if (!/[a-zA-Z\s]{3,}/.test(director)) {
        errores += '<li>El Director debe contener caracteres alfanuméricos</li>';
    };

    if (año == '') {
        errores += '<li>El Año es obligatorio</li>';
    } else if (!/[\d]{4}/.test(año) || año < 1800 || año > new Date().getFullYear()) {
        errores += '<li>El Año debe contener números entre el 1800 hasta la actualidad</li>';
    };

    if (genero == '' || genero == 'Selecciona Género') {
        errores += '<li>El Genero es obligatorio</li>';
    }

    if (errores != '') {
        listaErrores.innerHTML=errores
    } else {
        peliculasAcumulado.push({titulo, director, año, genero});
        listaErrores.innerHTML = '';
        myForm.reset() //COMPROBAR ESTO
    };
};

const recogerGeneros = () => {
    peliculasAcumulado.forEach((elemento) => {
    generosAcumulado.push(elemento.genero);
    const generosUnicos = new Set(generosAcumulado);
    generosUnicosArray = [...generosUnicos]
    })}
//function crearOptions // para el segundo filtro//
const pintarOptions = () => {
    filtro.innerHTML='';
    const seleccionaGenero = document.createElement('option');
    seleccionaGenero.textContent= 'Selecciona Género';
    filtro.appendChild(seleccionaGenero);
    generosUnicosArray.forEach((genero) => {
        const option = document.createElement('option')
        option.value = genero;
        option.textContent = genero;

        filtro.appendChild(option);
    })
}


const pintarPelisFiltradas = () => {
    peliculasFiltradas.innerHTML = '';
    noSelect.innerHTML = '';
    if (filtro.value === 'Selecciona Género') {
        const noSeleccionado = document.createElement('p');
        noSeleccionado.innerHTML = 'Por favor, selecciona un Género';
        noSelect.append(noSeleccionado);
    } else if (filtro.value === generosUnicosArray[0]) {
        const peliculasGenero0 = peliculasAcumulado.filter(elemento => elemento.genero === generosUnicosArray[0]);
        peliculasGenero0.forEach (element => {
            const newRow = document.createElement('tr');
    
            const newTitulo = document.createElement('td');
            newTitulo.innerHTML = element.titulo;
    
            const newDirector = document.createElement('td');
            newDirector.innerHTML = element.director;

            const newAño = document.createElement('td');
            newAño.innerHTML = element.año;

            const newGenero = document.createElement('td');
            newGenero.innerHTML = element.genero;

            newRow.append(newTitulo, newDirector, newAño, newGenero);
            peliculasFiltradas.append(newRow);
        });
    } else if (filtro.value === generosUnicosArray[1]) {
        const peliculasGenero1 = peliculasAcumulado.filter(elemento => elemento.genero === generosUnicosArray[1]);
        peliculasGenero1.forEach (element => {
            const newRow = document.createElement('tr');
    
            const newTitulo = document.createElement('td');
            newTitulo.innerHTML = element.titulo;
    
            const newDirector = document.createElement('td');
            newDirector.innerHTML = element.director;

            const newAño = document.createElement('td');
            newAño.innerHTML = element.año;

            const newGenero = document.createElement('td');
            newGenero.innerHTML = element.genero;

            newRow.append(newTitulo, newDirector, newAño, newGenero);
            peliculasFiltradas.append(newRow);
        });
} else if (filtro.value === generosUnicosArray[2]) {
    const peliculasGenero2 = peliculasAcumulado.filter(elemento => elemento.genero === generosUnicosArray[2]);
    peliculasGenero2.forEach (element => {
        const newRow = document.createElement('tr');

        const newTitulo = document.createElement('td');
        newTitulo.innerHTML = element.titulo;

        const newDirector = document.createElement('td');
        newDirector.innerHTML = element.director;

        const newAño = document.createElement('td');
        newAño.innerHTML = element.año;

        const newGenero = document.createElement('td');
        newGenero.innerHTML = element.genero;

        newRow.append(newTitulo, newDirector, newAño, newGenero);
        peliculasFiltradas.append(newRow);
    });
} else if (filtro.value === generosUnicosArray[3]) {
    const peliculasGenero3 = peliculasAcumulado.filter(elemento => elemento.genero === generosUnicosArray[3]);
    peliculasGenero3.forEach (element => {
        const newRow = document.createElement('tr');

        const newTitulo = document.createElement('td');
        newTitulo.innerHTML = element.titulo;

        const newDirector = document.createElement('td');
        newDirector.innerHTML = element.director;

        const newAño = document.createElement('td');
        newAño.innerHTML = element.año;

        const newGenero = document.createElement('td');
        newGenero.innerHTML = element.genero;

        newRow.append(newTitulo, newDirector, newAño, newGenero);
        peliculasFiltradas.append(newRow);
    });
};
};

    
    /* otra forma relativa a objValidar
    if (titulo!='') {
        if(regExp.test(titulo)) {
            objValidar.titulo='true';
        }
    } else {
        alert('titulo incorrecto');
    }
    
    if (director!='') {
        objValidar.director='true';
    }
    
    if (año!='') {
        objValidar.año='true';
    }
    
    if (genero!='') {
        objValidar.genero='true';
    }
    
    const valoresObjValidar=object.values(objValidar)
    const noValidado = valoresObjValidar.find((elemento)=>elemento === false)
    // como noValidado nos va a dar false,
    if (noValidado) {
        errores +=
    } else {
        errores +=
    }
}]*/

//otra forma de validar

// regexr.com y regex101.com para practicar y testear expresiones regulares y cuando ya este bien la traemos a codigo.

//validar email ^[a-z0-9]+@[a-z0-9]+\.[a-z](2,6)$

//titulo acepta casi todo.
//Director una o dos o tres palabras
//Año cuatro cifras y entre 1800 y fecha actual (escalable, que vincule)
// los datos de la pelicula, al enviar consulta, se generara un objeto con los campos del form (una vez validados), y luego almacenarlos en un array.
//solo una funcion para llamar e imprimir los filtros

//2 eventos: submit para almacenar // y el seclect de filtra change.

});