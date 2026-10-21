import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import {  schedulesShow  } from "./show.js"
// seleciona o input de data do formulário
const selectedDate = document.getElementById("date")

export async function scheduleDay() {
    // obtem a data do input
    const date = selectedDate.value

    // busca na API os agendamentos 
    const dailySchedules = await  scheduleFetchByDay({date})

    // renderiza os agendamentos já confirmados do dia   
    schedulesShow({dailySchedules})

    // renderiza os horarios disponiveis 
    hoursLoad({date, dailySchedules})
}