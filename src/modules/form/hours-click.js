//permite clicar em um horário e destacá-lo com a classe hour-selected
export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available") // seleciona todos os elementos com a classe hour-available

    hours.forEach((availableHour) => {
        availableHour.addEventListener("click", (selected) =>{
            // remove a classe hour-selected de todos os elementos com a classe hour-available
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // adicionar a classe na li clicada
            selected.target.classList.add("hour-selected")
        })
    })

}