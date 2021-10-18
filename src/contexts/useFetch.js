import { createContext } from "react"
import useServices from "../hooks/useServices";
export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
    const contextValue = useServices();
    return (
        <ServiceContext.Provider value={contextValue}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;