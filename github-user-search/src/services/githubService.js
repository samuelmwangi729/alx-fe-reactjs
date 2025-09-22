import axios from 'axios'
export const fetchuserData = async (data) => {
    console.log('fetching the data')
    try {
        const endpoint = `https://api.github.com/users/${data.username}`
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}