import AuthProvider from './provider/authProvider'
import Routes from './routes'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App


// Tuto : https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03