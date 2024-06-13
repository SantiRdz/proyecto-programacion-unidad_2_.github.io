function convertirTemperatura() {
    var tempCelsius= parseFloat(document.getElementById("tempCelsius").value);

    var conversion=document.getElementById("conversion").value;
        var resultadoHTML

        if (conversion === "fahrenheit"){
            var tempFahrenheit = (tempCelcius * 9/5)+32;
            resultado=tempCelcius+"grados celcius son"+tempFarhrenheit.toFixed(2)+"grados Fahrenheit;"

            var conversion= document.getElementById("conversion").value;
            var resultadoHTML 
            
        }else if (conversion === "kelvin"){
            var tempKelvin = tempCelsius +273.15;
            resultadoHTML = tempCelsius + "grados Celcius son" +tempKelvin.toFixed(2) +"grados Kelvin.";
        }else{
            resultadoHTML = "Seleccione una opcion de conversion valida.";
        }
        document.getElementById("resultado").innerHTML = resultadoHTML;
        }