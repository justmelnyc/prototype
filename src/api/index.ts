import axios from 'axios'
import {QueryClient} from '@tanstack/react-query'

const api = axios.create({
    baseURL: 'https://api.example.com',
})
const client = new QueryClient()

export {api, client}