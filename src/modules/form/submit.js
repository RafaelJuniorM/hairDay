import dayjs from 'dayjs'
import { schedulesNew } from '../../services/schedule-new.js'


const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const clienteName = document.getElementById('client')
// date atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// carrega a data atual e define a data minima como sendo a data atual 
selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener('submit', async (event) =>{
    event.preventDefault()

    try {
        // recuperando o nome do cliente  
        const name = clienteName.value.trim() // trim remove os espaçõs em brando do inicio e final da string
        
        // verificando se o nome do cliente foi informado
        if(!name) { 
            return alert("Por favor, informe o nome do cliente.")
        }

        // recuperando o horario selcionado
        const hourSelected = document.querySelector(".hour-selected")
        
        //verifcando se o horario foi selecionado
        if(!hourSelected) {
            return alert("Por favor, selecione um horário disponível.")
        }
        
        // recuperar somene a hora selecionada
        const [hour] = hourSelected.innerText.split(":") // split separa a string em um array, e o destructuring pega apenas o primeiro elemento do array
        
        // inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID 
        const id = Math.floor(Math.random() * 1000)

        // faz o agendamento na API
        await schedulesNew({ id, name, when })

    }catch (error) {
        alert("Não foi possivel realizar o agendamento. Tente novamente mais tarde.")
        console.error(error)
    }
})