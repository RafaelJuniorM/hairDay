import { apiConfig} from "./api-config.js";

export async function scheduleCancel({id}) {
    try {
        await fetch(` ${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Agendamento cancelado com sucesso!");
    }catch (error) {
        console.error("Erro ao cancelar o agendamento:", error);
        alert("Ocorreu um erro ao cancelar o agendamento. Por favor, tente novamente mais tarde.");
    }
}