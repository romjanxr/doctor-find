import { useContext } from "react"
import { ServiceContext } from "../contexts/useFetch"

const useServiceData = () => {
    return useContext(ServiceContext);
}

export default useServiceData;