
const paginaReserva =  document.getElementById('paginaDeReserva');
let titulo = document.getElementsByTagName('h1');
let precio = document.getElementsByClassName('precio');
let ubicacion = document.getElementsByClassName('ubicaciones');





function habitacionElegida(numero){

 let habitaciones = document.getElementsByClassName('habitacion');
 let barraDeBusqueda = document.getElementById('barraDeBusqueda');


 //Ocultar habitaciones y barra de navegacion

 for (let i=0; i < habitaciones.length; i++){
  habitaciones[i].style.display = 'none'
 }

 barraDeBusqueda.style.display = 'none';

 window.scrollTo(0, 0);


 if (numero == '1'){

 paginaReserva.innerHTML = ` 
  
  <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">DELUXE</h1>

            <img src="images/habitacion4.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">350€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Albornoz de baño</p>
            <p>Televison</p>
            <p>Ducha con efecto lluvia</p>
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>C/ de Guillem de Castro,12, 46007 Valencia, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Descripción El recién inaugurado Hotel Valencia Colón está convenientemente 
                        ubicado en la zona financiera y comercial de la ciudad. Está en Calle Colón, repleta de 
                        tiendas y con enlace directo  de metro al aeropuerto y al puerto.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                    
                   
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>

  
  
  `

 }

 if (numero == '2'){

  paginaReserva.innerHTML = ` 
     <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">SUITE</h1>

            <img src="images/habitacion3.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">210€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Rambla Catalunya, 20, 08007 Barcelona, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Goza de una ubicación inigualable en el centro del barrio barcelonés del Eixample. Ocupa 
                    el lugar donde estuvo el antiguo teatro Calderón, a diez minutos a pie de Las Ramblas y del Passeig de 
                    Gràcia, la mejor calle de compras de la ciudad. También se encuentra relativamente cerca de puntos de 
                    interés turístico y edificios emblemáticos como la Casa Batlló, la Casa Milà (La Pedrera), 
                    la Sagrada Familia y el museo Picasso.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div> 
  `

 }

 if (numero == '3'){

  paginaReserva.innerHTML = ` 
    <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">ESTANDAR</h1>

            <img src="images/habitacion2.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">140€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Gran Via, 19, 28013, Madrid - España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>El hotel de reciente apertura en Madrid Gran Vía se encuentra en el centro de 
                    una de las calles más conocidas de Madrid. Los huéspedes que se alojen en este 
                    céntrico hotel disfrutarán de las tiendas, restaurantes y cafeterías de la Gran Vía. 
                    Además, se encontrarán cerca de los principales puntos de interés de la ciudad.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>    
   `

 }

 if (numero == '4'){

  paginaReserva.innerHTML = ` 
  
  <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">BASICA</h1>

            <img src="images/habitacion1.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">65€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
 
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>C/ de Guillem de Castro,12, 46007 Valencia, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Descripción El recién inaugurado Hotel Valencia Colón está convenientemente 
                        ubicado en la zona financiera y comercial de la ciudad. Está en Calle Colón, repleta de 
                        tiendas y con enlace directo  de metro al aeropuerto y al puerto.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                    
                   
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>

  
  
  `

 }

 if (numero == '5'){

  paginaReserva.innerHTML = ` 
     <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">DELUXE</h1>

            <img src="images/habitacion4.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">400€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Televison</p>
            <p>Albornoz</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Rambla Catalunya, 20, 08007 Barcelona, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Goza de una ubicación inigualable en el centro del barrio barcelonés del Eixample. Ocupa 
                    el lugar donde estuvo el antiguo teatro Calderón, a diez minutos a pie de Las Ramblas y del Passeig de 
                    Gràcia, la mejor calle de compras de la ciudad. También se encuentra relativamente cerca de puntos de 
                    interés turístico y edificios emblemáticos como la Casa Batlló, la Casa Milà (La Pedrera), 
                    la Sagrada Familia y el museo Picasso.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div> 
  `

 }

 if (numero == '6'){

  paginaReserva.innerHTML = ` 
    <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">SUITE</h1>

            <img src="images/habitacion3.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">240€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Gran Via, 19, 28013, Madrid - España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>El hotel de reciente apertura en Madrid Gran Vía se encuentra en el centro de 
                    una de las calles más conocidas de Madrid. Los huéspedes que se alojen en este 
                    céntrico hotel disfrutarán de las tiendas, restaurantes y cafeterías de la Gran Vía. 
                    Además, se encontrarán cerca de los principales puntos de interés de la ciudad.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>    
   `

 }

 if (numero == '7'){

  paginaReserva.innerHTML = ` 
  
  <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">ESTANDAR</h1>

            <img src="images/habitacion2.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">100€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Albornoz de baño</p>
            <p>Televison</p>
            <p>Ducha con efecto lluvia</p>
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>C/ de Guillem de Castro,12, 46007 Valencia, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Descripción El recién inaugurado Hotel Valencia Colón está convenientemente 
                        ubicado en la zona financiera y comercial de la ciudad. Está en Calle Colón, repleta de 
                        tiendas y con enlace directo  de metro al aeropuerto y al puerto.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                    
                   
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>

  
  
  `

 }

 if (numero == '8'){

  paginaReserva.innerHTML = ` 
     <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">BASICA</h1>

            <img src="images/habitacion1.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">70€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Rambla Catalunya, 20, 08007 Barcelona, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Goza de una ubicación inigualable en el centro del barrio barcelonés del Eixample. Ocupa 
                    el lugar donde estuvo el antiguo teatro Calderón, a diez minutos a pie de Las Ramblas y del Passeig de 
                    Gràcia, la mejor calle de compras de la ciudad. También se encuentra relativamente cerca de puntos de 
                    interés turístico y edificios emblemáticos como la Casa Batlló, la Casa Milà (La Pedrera), 
                    la Sagrada Familia y el museo Picasso.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div> 
  `

 }

 if (numero == '9'){

  paginaReserva.innerHTML = ` 
    <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">DELUXE</h1>

            <img src="images/habitacion4.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">440€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Gran Via, 19, 28013, Madrid - España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>El hotel de reciente apertura en Madrid Gran Vía se encuentra en el centro de 
                    una de las calles más conocidas de Madrid. Los huéspedes que se alojen en este 
                    céntrico hotel disfrutarán de las tiendas, restaurantes y cafeterías de la Gran Vía. 
                    Además, se encontrarán cerca de los principales puntos de interés de la ciudad.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>    
   `

 }

 if (numero == '10'){

  paginaReserva.innerHTML = ` 
  
  <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">SUITE</h1>

            <img src="images/habitacion3.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">220€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Albornoz de baño</p>
            <p>Televison</p>
            <p>Ducha con efecto lluvia</p>
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>C/ de Guillem de Castro,12, 46007 Valencia, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Descripción El recién inaugurado Hotel Valencia Colón está convenientemente 
                        ubicado en la zona financiera y comercial de la ciudad. Está en Calle Colón, repleta de 
                        tiendas y con enlace directo  de metro al aeropuerto y al puerto.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                    
                   
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>

  
  
  `

 }

 if (numero == '11'){

  paginaReserva.innerHTML = ` 
     <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">ESTANADAR</h1>

            <img src="images/habitacion2.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">135€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Aire acondicionado</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Rambla Catalunya, 20, 08007 Barcelona, España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>Goza de una ubicación inigualable en el centro del barrio barcelonés del Eixample. Ocupa 
                    el lugar donde estuvo el antiguo teatro Calderón, a diez minutos a pie de Las Ramblas y del Passeig de 
                    Gràcia, la mejor calle de compras de la ciudad. También se encuentra relativamente cerca de puntos de 
                    interés turístico y edificios emblemáticos como la Casa Batlló, la Casa Milà (La Pedrera), 
                    la Sagrada Familia y el museo Picasso.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div> 
  `

 }

 if (numero == '12'){

  paginaReserva.innerHTML = ` 
    <div class="contenedorHabitacion">

        <div class="columnaExposicion">
            <h1 class="tituloHabitacion">BASICA</h1>

            <img src="images/habitacion1.png" class="imagenDeExposicion" alt="vista previa de la habitacion" >
            
            <p class="presio">80€</p>

            <h2 class="incluido">Incluido en el paquete: </h2>

            <p>WI-FI Gratis</p>
            <p>Televison</p>
            
            
            <h2 class="ubicacionHabitacion">Ubicacion</h2>
            
            <p>Gran Via, 19, 28013, Madrid - España</p>
  

        </div>


        <div class="columnainformacion">
    
                

                <h2 class="descripcionHabitacion">Descripcion</h2>
                
                    <p>El hotel de reciente apertura en Madrid Gran Vía se encuentra en el centro de 
                    una de las calles más conocidas de Madrid. Los huéspedes que se alojen en este 
                    céntrico hotel disfrutarán de las tiendas, restaurantes y cafeterías de la Gran Vía. 
                    Además, se encontrarán cerca de los principales puntos de interés de la ciudad.</p>
                
                
                <div class="seccionserviciosyreserva">
                
                <div class="seccionservicios">
                
                  <h2 class="serviciosHabitacion">Servicios</h2>
                  
                    <ul class="servicios">
                      <li>SPA</li>
                      <li>Gimnasio</li>
                      <li>Piscina</li>
                      <li>Pista tenis</li>
                    </ul>
                    </div>
                
              
                
                    <a href="formularioReserva.html" id="botonReserva">RESERVAR</a>
                
           
                
                
                </div>
                
               <div class="carrusel">
               
                    <div id="expositor"><img id="imagenExpuesta" src="images/pasillo.png" alt="pasillo"></div>
               
                    <ul class="miniaturas">
                        <li id="mini1" onclick="cambiar(1)"><img src="images/mini1.png" alt="miniatura pasillo"></li>
                        <li id="mini2" onclick="cambiar(2)"><img src="images/mini2.png" alt="miniatura lavavo1"></li>
                        <li id="mini3" onclick="cambiar(3)"><img src="images/mini3.png" alt="miniatura lavavo2"></li>
                        <li id="mini4" onclick="cambiar(4)"><img src="images/mini4.png" alt="miniatura gimnasio"></li>   
                        <li id="mini5" onclick="cambiar(5)"><img src="images/mini5.png" alt="miniatura restaurante"></li>   
                        <li id="mini6" onclick="cambiar(6)"><img src="images/mini6.png" alt="miniatura piscina"></li>                    
                    </ul>
         
                </div>

        </div>


    </div>    
   `

 }


}
