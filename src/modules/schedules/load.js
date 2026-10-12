import { hoursLoad } from "../form/hours-load.js"

// seleciona o input de data do formulário
const selectedDate = document.getElementById("date")

export function scheduleDay() {
    // obtem a data do input
    const date = selectedDate.value
    // renderiza os horarios disponiveis 
    hoursLoad({date})
}