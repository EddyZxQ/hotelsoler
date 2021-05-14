const habitaciones = [
    {nombre: 'Deluxe', precio: 350, descripcion:'esto es una descripcion temporal', ubicacion: 'Valencia', imagen:'habitacion4', numero: '1'},
    {nombre: 'Suite', precio: 210, descripcion:'esto es una descripcion temporal', ubicacion: 'Barcelona', imagen:'habitacion3', numero: '2'},
    {nombre: 'Estandar', precio: 140, descripcion:'esto es una descripcion temporal', ubicacion: 'Madrid', imagen:'habitacion2', numero: '3'},
    {nombre: 'Basica', precio: 65, descripcion:'esto es una descripcion temporal', ubicacion: 'Valencia', imagen:'habitacion1', numero: '4'},

    {nombre: 'Deluxe', precio: 400, descripcion:'esto es una descripcion temporal', ubicacion: 'Barcelona', imagen:'habitacion4', numero: '5'},
    {nombre: 'Suite', precio: 240, descripcion:'esto es una descripcion temporal', ubicacion: 'Madrid', imagen:'habitacion3', numero: '6'},
    {nombre: 'Estandar', precio: 100, descripcion:'esto es una descripcion temporal', ubicacion: 'Valencia', imagen:'habitacion2', numero: '7'},
    {nombre: 'Basica', precio: 70, descripcion:'esto es una descripcion temporal', ubicacion: 'Barcelona', imagen:'habitacion1', numero: '8'},

    {nombre: 'Deluxe', precio: 440, descripcion:'esto es una descripcion temporal', ubicacion: 'Madrid', imagen:'habitacion4', numero: '9'},
    {nombre: 'Suite', precio: 220, descripcion:'esto es una descripcion temporal', ubicacion: 'Valencia', imagen:'habitacion3', numero: '10'},
    {nombre: 'Estandar', precio: 135, descripcion:'esto es una descripcion temporal', ubicacion: 'Barcelona', imagen:'habitacion2', numero: '11'},
    {nombre: 'Basica', precio: 80, descripcion:'esto es una descripcion temporal', ubicacion: 'Madrid', imagen:'habitacion1', numero: '12'},

]





const buscador = document.querySelector('#buscador');
const hoteles = document.querySelector('#habitaciones');

//const btnBuscar = document.querySelector('#btn-buscar');


const filtrar = ()=>{
    // console.log(buscador.value);
    hoteles.innerHTML = '';


    const texto = buscador.value.toLowerCase();

    for (let habitacion of habitaciones){
        let nombre = habitacion.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            hoteles.innerHTML += `
                
                <div class="habitacion" onclick="habitacionElegida(${habitacion.numero})">
                
                <div class="habitacion-prevista">
    
                    <h1 class="titulo">${habitacion.nombre}</h1>
                    <img src="images/${habitacion.imagen}.png" alt="Foto de stock del hotel">
    
                </div>
    
                <div class="habitacion-descripcion">
    
    
                <p class="precio">${habitacion.precio}€</p>
                <p class="ubicacion">${habitacion.ubicacion}</p>
                <p class="descripcion">${habitacion.descripcion}</p>
    
                </div>
                </div>
               
             
            `
        }
    }

    if (hoteles.innerHTML === ''){
        hoteles.innerHTML += `
               <div class="habitacion">

                <div class="habitacion-prevista">
    
                    <h1 class="titulo">Habitacion no encontrada</h1>
                       
                </div>
   
               </div>
            `
    }
}


// btnBuscar.addEventListener('click', filtrar);

buscador.addEventListener('keyup', filtrar);
filtrar();