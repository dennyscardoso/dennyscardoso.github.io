function escreve(){
          var texto = prompt('Digite valor de N:');
          document.getElementById("minhaDiv").innerHTML = texto;
        for (var i = 1; i <= parseInt(texto); i++) {  
        document.write(i); 

    }
}