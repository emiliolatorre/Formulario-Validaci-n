document.addEventListener('DOMContentLoaded', () => {

const myForm = document.querySelector('#myForm');
const filtro = document.querySelector('#Filtro');
const noSelect = document.querySelector('#noSelect');
const peliculasFiltradas = document.querySelector('#peliculasFiltradas');
const localStg = document.querySelector('#localStg');
const listaLocal = document.querySelector('#listaLocal');
const borrarLocal = document.querySelector('#borrarLocal');

const peliculasAcumulado = [];
let peliculasAcumuladoLocal = [];
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
    almacenarPeliculasLocal();
    pintarPeliculasLocal();
});

filtro.addEventListener('change', (event) => {
    pintarPelisFiltradas();
});

borrarLocal.addEventListener('click', (event) => {
    localStorage.clear();
    peliculasAcumuladoLocal = [];
    pintarPeliculasLocal();
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
        peliculasAcumuladoLocal.push({titulo, director, año, genero});
        listaErrores.innerHTML = '';
        myForm.reset();
    };
};

const recogerGeneros = () => {
    peliculasAcumulado.forEach((elemento) => {
    generosAcumulado.push(elemento.genero);
    const generosUnicos = new Set(generosAcumulado);
    generosUnicosArray = [...generosUnicos]
    })}

const pintarOptions = () => {
    filtro.innerHTML='';
    const seleccionaGenero = document.createElement('option');
    seleccionaGenero.textContent= 'Selecciona Género';
    filtro.appendChild(seleccionaGenero);
    generosUnicosArray.forEach((genero) => {
        const option = document.createElement('option')
        option.value = genero;
        option.textContent = genero;
        //fragment.append(option);
        //filtro.appendChild(option); fuera del forEach

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
            // fragment.append(newRow);
            //peliculasFiltradas.append(fragment);
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

// Funcion para almacenar el Local Storage
const almacenarPeliculasLocal = () => {
    localStorage.setItem("peliculas", JSON.stringify(peliculasAcumuladoLocal));
}

const pintarPeliculasLocal = () => {
    listaLocal.innerHTML = '';
    let peliculasLocal = JSON.parse(localStorage.getItem("peliculas"));
    
    peliculasLocal.forEach(({titulo, director, año, genero}) => {
        const peliLocal = document.createElement('li');
        peliLocal.innerHTML= `${titulo}, ${director}, ${año}, ${genero}`;
        peliLocal.classList.add('pelislocal');
        fragment.append(peliLocal);
    });
    
    listaLocal.append(fragment);
    localStg.append(listaLocal);
}


// Funcion para pintar el Local Storage

});