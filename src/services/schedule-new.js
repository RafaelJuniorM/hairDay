import { apiConfig } from "./api-config.js"

// criando uma função assincrona para criar um novo agendamento  
export async function schedulesNew({id, name, when}) { // funçao recebe as propriedades id, name e when
    try {
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST", // metodo POST para criar um novo agendamento
            headers: {
                "Content-Type": "application/json" // informando que o corpo da requisição é um JSON
            },
            body: JSON.stringify({id, name, when}) // convertendo o objeto em uma string JSON
        })

        alert("Agendamento criado com sucesso!") // mensagem de sucesso
    }catch (error) {
        console.log(error)
        alert("Erro ao criar agendamento, tente novamente mais tarde.")
    }
}