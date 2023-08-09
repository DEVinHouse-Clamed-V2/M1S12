import { AppProvider } from "./context"
import { RoutesApp } from "./routes"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
    </BrowserRouter>
  )
}
export default App