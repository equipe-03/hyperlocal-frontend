import axios from "axios"


axios.defaults.baseURL = "http://localhost:3333"
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {

    // CATEGORIAS

    getCategory: async () => {
        try {
            const response = await axios.get("/category/find")
            return response.data;
        } catch (err) {
            alert(err)
        }
    }
}