
const botonIphone = (elegido) => {

    const iphoneSelect = prompt("Seleccione el modelo:" + "\n" + "I13" + "\n" + "I12" + "\n" + "I11")
   
    if (iphoneSelect == "I13") {
         elegido = 500
        alert("El valor de su iphone es" + " "  + elegido + " " + "USD")
    } else if (iphoneSelect == "I12" ) {
         elegido = 400
        alert("El valor de su iphone es" + " "  + elegido + " " + "USD")
    } else if  (iphoneSelect == "I11" ) {
         elegido = 300
        alert("El valor de su iphone es" + " "  + elegido + " " + "USD")
    } else  {
        elegido = 0
        alert("Siguiente Marca")
    }
    
    return elegido

    }
    
    const botonSamsung = (elegido1) => {
    
        const samsungSelect = prompt("Seleccione el modelo:" + "\n" + "S22" + "\n" + "S21" + "\n" + "S20")
        
        if (samsungSelect == "S22") {
             elegido1 = 500
            alert("El valor de su Samsung es" + " "  + elegido1 + " " + "USD")
        } else if (samsungSelect == "S21" ) {
             elegido1 = 400
            alert("El valor de su Samsung es" + " "  + elegido1 + " " + "USD")
        } else if  (samsungSelect == "S20" ) {
             elegido1 = 300
            alert("El valor de su Samsung es" + " "  + elegido1 + " " + "USD")
        } else  {
            elegido1 = 0
            alert("Siguiente Marca")
        }
        
        return elegido1

        }

        const botonMoto = (elegido2) => {
    
            const motoSelect = prompt("Seleccione el modelo:" + "\n" + "E30" + "\n" + "E20" + "\n" + "E10")
            
            if (motoSelect == "E30") {
                 elegido2 = 500
                alert("El valor de su Motorola es" + " "  + elegido2 + " " + "USD")
            } else if (motoSelect == "E20" ) {
                 elegido2 = 400
                alert("El valor de su Motorola es" + " "  + elegido2 + " " + "USD")
            } else if  (motoSelect == "E10" ) {
                 elegido2 = 300
                alert("El valor de su Motorola es" + " "  + elegido2 + " " + "USD")
            } else  {
                elegido2 = 0
                alert("Precio final")
            }
            
            return elegido2
    
            }

      
        function botonComprar() {
    
                let resultado = botonIphone() + botonSamsung() + botonMoto()
                alert("El precio por los celulares elegidos es de:" + " " + resultado + " " + "USD");
        }















