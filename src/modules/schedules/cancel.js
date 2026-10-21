import { scheduleCancel } from "../../services/schedule-cancel.js"
import {scheduleDay} from "./load.js" 
const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
    
    period.addEventListener("click", async (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //obtem a li pai do elemento clicado 
            const item = event.target.closest("li")
            const {id} = item.dataset // desestruturação do objeto, pegando a propriedade id do dataset do elemento li
            
            // confirma que o id foi selecionado
            if (id) {
                // confirma se o usuário quer cancelar
                const isConfirm = confirm("Deseja realmente cancelar este agendamento?") // exibe uma caixa de confirmação para o usuário
            
                if(isConfirm) {
                    // faz a requisição na API para cancelar
                    await scheduleCancel({id})
                    // atualiza a lista de agendamentos do dia
                    scheduleDay()
                }
            }
        
        }
    }) 
})