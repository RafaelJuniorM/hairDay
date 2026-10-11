import dayjs from 'dayjs'


const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

// date atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// carrega a data atual e define a data minima como sendo a data atual 
selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    console.log("enviado")
})