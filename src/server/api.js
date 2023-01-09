import axios from "axios";

const api = axios.create({
    baseURL:"https://api.github.com/"
})

export async function getUsuarios(user) {
    await api.get(`search/users?q=${user}&page=1`)
        .then(res => {
            console.log(res.data)
            const data = res.data.items
            return data
        })
        .catch(error => {
            alert(error)
        })
}
