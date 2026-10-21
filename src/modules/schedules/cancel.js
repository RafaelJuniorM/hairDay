const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
    
    period.addEventListener("click", (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //obtem a li pai do elemento clicado 
            const item = event.target.closest("li")
            const {id} = item.dataset // desestruturação do objeto, pegando a propriedade id do dataset do elemento li
            
            if (id) {
                const isConfirm = confirm("Deseja realmente cancelar este agendamento?") // exibe uma caixa de confirmação para o usuário
            
                if(isConfirm) {
                    console.log(`Agendamento com ID ${id} cancelado.`)
                }
            }
        
        }
    }) 
})