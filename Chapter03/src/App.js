import DrinkSearch from './DrinkSearch'
import { RegisterG } from './RegisterG'

const App = () => (
  <RegisterG
    onSubmit={(email, password) => {
      console.log(email, password)
    }}
  />
)

export default App
