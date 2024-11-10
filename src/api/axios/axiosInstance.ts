import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
    baseURL: 'http://localhost:5000', // Set base URL to localhost:5000
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor (optional, e.g., for adding Authorization header)
instance.interceptors.request.use(
    (config) => {
        // Example: Add Authorization header if a token exists
        const token = localStorage.getItem('authToken'); // or use any other method to get the token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor (optional, for handling global errors)
instance.interceptors.response.use(
    (response) => {
        // Handle successful response
        return response;
    },
    (error) => {
        // Handle errors globally
        if (axios.isAxiosError(error)) {
            // Handle server error or network error
            console.error('Error response:', error.response);
            if (error.response?.status === 401) {
                // Handle unauthorized access (e.g., redirect to login)
                console.error('Unauthorized access');
            }
        }
        return Promise.reject(error);
    }
);



export default instance;
