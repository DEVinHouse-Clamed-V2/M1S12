import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/users";

function PrivateRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Users />}/>
    </Routes>
  )
}

export { PrivateRoutes }