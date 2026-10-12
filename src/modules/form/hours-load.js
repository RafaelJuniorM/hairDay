import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"

export function hoursLoad({date}){
    const openig = openingHours.map((hour) => {
        // recupera somente a hora
        const [scheduleHour] = hour.split(":") // desestruturação do array, pegando o primeiro elemento. split separa a string em um array, usando o ":" como separador.


        // adiciona a hora na date e verifica se esta no passado. 
        const isHoutPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        

        return {
            hour, 
            available: isHoutPast
        }

    })
}