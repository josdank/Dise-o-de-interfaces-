document.addEventListener("DOMContentLoaded", function(){
    
const visor = document.querySelector(".visor");
const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", ()=>{
            const valor =boton.textContent;
            
            if(valor ==='c'){
                visor.textContent= "0";
                return;
            }

            if(valor ==='='){
                try {
                    visor.textContent=eval(visor.textContent);
                } catch (error) {
                    visor.textContent="Syntax Error";
                }
                return;
            }
            if (valor === "⬅") {
                if (visor.textContent.length === 1){
                    visor.textContent = "0";
                }else{
                    visor.textContent = visor.textContent.slice(0,-1);
                }
            return;
            } 
    

            if(visor.textContent ==='0' || visor.textContent === 'Syntax Error' || visor.textContent === 'Infinity'){
                visor.textContent=valor;
            }else{
                visor.textContent +=valor;
            }
        });
    });
});