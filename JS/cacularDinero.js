
let fechaInicio;
let fechaFinal;


btnPrecio = document.getElementById('obtenerPrecio');



btnPrecio.onclick = function (){

    calcularMoney();


}


    function calcularMoney(){

        fechaInicio = document.getElementById('id_fechainicio').value;
        fechaFinal = document.getElementById('id_fechafinal').value;

        var aFecha1 = fechaInicio.split('-');
        var aFecha2 = fechaFinal.split('-');


        let diasMes;

        if (aFecha1[1] === '01'){
            diasMes = 0;
        }else if(aFecha1[1] === '02'){
            diasMes = 30;
        }else if(aFecha1[1] === '03'){
            diasMes = 2*30;
        }else if(aFecha1[1] === '04'){
            diasMes = 3*30;
        }else if(aFecha1[1] === '05'){
            diasMes = 4*30;
        }else if(aFecha1[1] === '06'){
            diasMes = 5*30;
        }else if(aFecha1[1] === '07'){
            diasMes = 6*30;
        }else if(aFecha1[1] === '08'){
            diasMes = 7*30;
        }else if(aFecha1[1] === '09'){
            diasMes = 8*30;
        }else if(aFecha1[1] === '10'){
            diasMes = 9*30;
        }else if(aFecha1[1] === '11'){
            diasMes = 10*30;
        }else if(aFecha1[1] === '12'){
            diasMes = 12*30;
        }




        let diasmesss;

        diasmesss = 30-aFecha1[2];

        let totalDiasInicio = diasMes + diasmesss;


        let diasMesF;

        if (aFecha2[1] === '01'){
            diasMesF = 0;
        }else if(aFecha2[1] === '02'){
            diasMesF = 30;
        }else if(aFecha2[1] === '03'){
            diasMesF = 2*30;
        }else if(aFecha2[1] === '04'){
            diasMesF = 3*30;
        }else if(aFecha2[1] === '05'){
            diasMesF = 4*30;
        }else if(aFecha2[1] === '06'){
            diasMesF = 5*30;
        }else if(aFecha2[1] === '07'){
            diasMesF = 6*30;
        }else if(aFecha2[1] === '08'){
            diasMesF = 7*30;
        }else if(aFecha2[1] === '09'){
            diasMesF = 8*30;
        }else if(aFecha2[1] === '10'){
            diasMesF = 9*30;
        }else if(aFecha2[1] === '11'){
            diasMesF = 10*30;
        }else if(aFecha2[1] === '12'){
            diasMesF = 11*30;
        }



        let diasmessx;

        diasmessx = 30-aFecha2[2];


        let totalDiasFinal = diasMesF - diasmessx;



        let operasion;

        operasion =  totalDiasFinal - totalDiasInicio;




        let ciudad = document.getElementById('id_ciudad').value;
        let habitacion = document.getElementById('id_habitacion').value;
        let precio;

        if(ciudad === 'Valencia'){
            if (habitacion === 'Deluxe'){
                precio = 350;
            }else if(habitacion === 'Suite'){
                precio = 220;
            }else if(habitacion === 'Estandar'){
                precio = 100;
            }else if(habitacion === 'Basica'){
                precio = 65;
            }


        }else if(ciudad === 'Barcelona'){
            if (habitacion === 'Deluxe'){
                precio = 400;
            }else if(habitacion === 'Suite'){
                precio = 210;
            }else if(habitacion === 'Estandar'){
                precio = 135;
            }else if(habitacion === 'Basica'){
                precio = 70;
            }
        }else if(ciudad === 'Madrid'){
            if (habitacion === 'Deluxe'){
                precio = 440;
            }else if(habitacion === 'Suite'){
                precio = 240;
            }else if(habitacion === 'Estandar'){
                precio = 140;
            }else if(habitacion === 'Basica'){
                precio = 80;
            }
        }


        let costeHabitacion = operasion * precio;


        let descuento = document.getElementById('id_descuento').value;



        if (descuento === '9k7fgfa' || descuento === '9K7FGFA'){
            costeHabitacion = costeHabitacion * 0.75;
        }else if(descuento === '5t7fgpa' || descuento === '5T7FGPA'){
            costeHabitacion = costeHabitacion * 0.85;
        }else if(descuento === '4s7fgma' || descuento === '4S7FGMA'){
            costeHabitacion = costeHabitacion * 0.70;
        }else if(descuento === '8p7fgin' || descuento === '8P7FGIN'){
            costeHabitacion = costeHabitacion * 0.90;
        }

        document.getElementById('precio').innerHTML = '<h2>'+costeHabitacion+'€</h2>';



    }
