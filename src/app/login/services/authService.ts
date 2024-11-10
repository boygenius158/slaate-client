import instance from "@/api/axios/axiosInstance";
import { handleAxiosError } from "../../utils/errorHandler";

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await instance.post('/login', { email, password });
        return response.data;
    } catch (error: unknown) {
        // Handle errors locally or let it propagate
        throw new Error(handleAxiosError(error));
    }
}; 