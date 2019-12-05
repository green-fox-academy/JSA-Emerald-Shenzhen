import { BASE_URL } from 'react-native-dotenv'

const BASE = BASE_URL || 'http://10.22.18.66:3000'

const URL = {
  getLoans: `${BASE}/loans`,
  getDetail: id => `${BASE}/loans/${id}`,
  getProducts: `${BASE}/products`
}

export default URL
