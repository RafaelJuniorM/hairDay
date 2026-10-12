import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
import {hoursClick} from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
    // limpa a lista de horários 
    hours.innerHTML = ""
    
    const openig = openingHours.map((hour) => {
        // recupera somente a hora
        const [scheduleHour] = hour.split(":") // desestruturação do array, pegando o primeiro elemento. split separa a string em um array, usando o ":" como separador.


        // adiciona a hora na date e verifica se esta no passado. 
        const isHoutPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        

        return { // retornando um array de objetos com a hora e se esta disponivel ou não
            hour, 
            available: isHoutPast
        }

    })

    // renderiza os horarios disponiveis na tela
    openig.forEach(({hour, available}) => {
        const li = document.createElement("li") // criando o elmento li
        
        li. classList.add("hour") // add classe hour no li 
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        // verifica qual periodo do dia a hora pertence e adiciona o titulo do periodo na lista de horarios
        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour ==="13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}


// função para adicionar o titulo do periodo de horario (manhã, tarde, noite) na lista de horarios
function hourHeaderAdd(title) {
    const header = document.createElement("li")

    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}