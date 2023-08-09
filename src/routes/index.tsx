import { PublicRoutes } from "./publicRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { useApp } from "../hooks/useApp"


function RoutesApp() {
    const { user } = useApp()

    if (user?.email) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export { RoutesApp }