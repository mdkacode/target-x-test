import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import dotenv from "dotenv";
// Create `axios-cache-adapter` instance
dotenv.config();
const cache = setupCache({
	maxAge: 15 * 60 * 1000,
});

console.log(process.env);
// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
	adapter: cache.adapter,
	baseURL: `${process.env.END_POINT}`,
});

export default api;
