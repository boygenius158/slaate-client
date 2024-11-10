import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown): string => {
    if (error instanceof AxiosError) {
        return error.response?.data?.message || 'An error occured with the message'
    }
    return 'An unknown error occured'
}