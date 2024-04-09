import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const UserService = (api: AxiosInstance = defaultAxiosInstance) => ({
    logIn : async (email: string, password: string) => {
        const data = await api.post("/login", {email, password}); 
        if (data && data.status === 200){
            localStorage.setItem("acessToken", data.data.acessToken)
            return data["data"]; 
        }
    }
})

export default UserService;