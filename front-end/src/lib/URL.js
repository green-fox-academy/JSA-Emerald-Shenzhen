import { BASE_URL as BASE } from 'react-native-dotenv'

const BASE_URL = BASE || 'http://10.22.18.66:3000'

const URL = {
  getLoans: `${BASE_URL}/loans`
}

export default URL
