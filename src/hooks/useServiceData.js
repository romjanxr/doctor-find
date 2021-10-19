import { useContext } from "react"
import { ServiceContext } from "../contexts/ServiceProvider"

const useServiceData = () => {
    return useContext(ServiceContext);
}

export default useServiceData;