import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/users";
import { Storage } from "../pages/storage";
import { StorageDetails } from "../pages/storageDetails";

function PrivateRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Users />}/>
      <Route path="/storage" element={<Storage />}/>
      <Route path="/storage/:id" element={<StorageDetails />}/>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  )
}

export { PrivateRoutes }