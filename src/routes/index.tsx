import { Routes, Route } from "react-router-dom"
import { Users } from "../pages/users"

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Users />}/>
    </Routes>
  )
}
export { RoutesApp }