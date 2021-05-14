
const cartaNombre = ['Desayuno continental','Desayuno americano (o inglés)','Buffet internacional','Ensalada de boquerones en vinagre con queso idiazábal','Tellinas','Merluza a la plancha','Chuletón de atún rojo a la plancha','Paella valenciana','Arroz de pollo y conejo','Surtido de ibéricos y queso curado','Chuletas de cordero con patatas fritas','Sartén de jamón serrano y huevo sobre lecho de patatas','Bacalao con cebolla caramelizada y mahonesa de ajo','Tiramisú','Helado de pan de centeno','Peras al vino','Bavaroisse de frutas del Bosque','Mousse de chocolate blanco o negro','Piña natural','Copa de helado (Vainilla, fresa, chocolate, turrón, mandarina, limón o frambuesa)','Sorbete de mojito'];
const cartaPrecio = ['7.00€','7.00€','12.00€','8.00€','9.00€','17.00€','18.00€','14.00€','16.00€','15.00€','12.00€','11.00€','16.00€','5.50€','5.50€','5.50€','5.50€','5.00€','5.00€','5.00€','4.00€'];
const cartaImagenes = ['continental.png','americano.png','buffet.png','boquerones.png','tellinas.png','merluza.png','atun.png','paella_valenciana.png','arrocito.png','jamon_queso.png','chuletas.png','sarten.png','bacalao.png','tiramisu.png','pan_centeno.png','peras.png','bavaroise.png','mousse.png','piña.png','copa_helado.png','sorbete.png'];
let i,j, cartaComidas,contador;

contador = 0;

cartaComidas = ""

document.getElementById("lacarta").innerHTML ="";


for (i=0; i<7; i++){

    cartaComidas +="<div class='filas'>";

    for (j=0; j<3; j++){
        cartaComidas +="<div class='contenedorCarta'> <div class='carta'> <div class='delante'><img src='images/"+cartaImagenes[contador]+"'> </div>";
        cartaComidas +="<div class='detras'><h2>"+cartaNombre[contador]+"</h2><p class='precio'>"+cartaPrecio[contador]+"</p></div></div></div>";
        contador++;
    }

    cartaComidas +="</div>";


}


document.getElementById("lacarta").innerHTML = cartaComidas;

