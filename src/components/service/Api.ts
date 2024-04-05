import axios, { AxiosInstance } from "axios";
 
const BASE_URL = `http://localhost:3030`;
 
export const defaultAxiosInstance : AxiosInstance = axios.create({
    baseURL: BASE_URL,
})
 
 
export async function loginAndGetToken(username: string, password: string) {
    try {
        const response = await defaultAxiosInstance.post('/login', {
            username,
            password
        });
        return response.data.accessToken;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

