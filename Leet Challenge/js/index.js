function convertidordetextohacker(texto){
    const textoLeet = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        l: "1",
        o: "0",
        s: "5",
        t: "7",
        z: "2",
        
    }

    let  textoaHacker = "";

    for(let i = 0; i < texto.length; i++){
        const unsolocaracterdeltextorecibido = texto[i].toLowerCase();
        if(textoLeet.hasOwnProperty(unsolocaracterdeltextorecibido)){
            textoaHacker += textoLeet[unsolocaracterdeltextorecibido];
        } else {
            textoaHacker += texto[i];
        
        }
    
    }
     return textoaHacker;
}

convertidordetextohacker("Hola estoy en la playa de Asturias");
'H014 3570y 3n 14 p14y4 d3 457uri45'