import dayjs from "dayjs"
import {apiConfig} from "./api-config.js"

// função que busca os agendamentos do dia selecionado
export async function scheduleFetchByDay(date) {
    try {
        // fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // convertando a resposta em JSON
        const data = await response.json()

        // filtrando os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        )

        return dailySchedules // retornando os agendamentos filtrados
    } catch (error) {
        console.log(error)
        alert("Erro ao buscar agendamentos, tente novamente mais tarde.")
    }
}