function verificarCamposVazio(){
    let camposvazio = document.querySelectorAll(".campos");

    for(let i = 0; i <camposvazio.length; i++){

        const camposVerificado = camposvazio[i];

        if(camposVerificado.value == ""){

             camposVerificado.style.borderColor = "#f00";

               setTimeout( () => { 
               
                      camposVerificado.style.borderColor = '#000';
                      camposVerificado.style.transition = '1s'
                      
               }, 4000)
           
            }  
            
            else { camposVerificado.style.borderColor = '#0f0';
        
            setTimeout( () => { 
               
                camposVerificado.style.borderColor = '#000';
                camposVerificado.style.transition = '1s'
                
         }, 4000)
        
            }
        }
        
           verificarNumero();
};       // Final da função verificar campos vazio.  


function verificarNumero(){

    const numero = document.getElementById('telefone').value;

    if( typeof numero === "string" && numero.length >0 && numero.length < 11){

          alert('Número invalido !');

    }

};


   document.getElementById("btn").addEventListener("click", verificarCamposVazio);
