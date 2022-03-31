import Retail from './Retail'
import { RetailProvider } from './RetailContext'
import retailProducts from './api/retailProducts'

const App = () => (
  <RetailProvider products={retailProducts}>
    <Retail />
  </RetailProvider>
)

export default App
