import { createContext,useState } from "react";
export const FirebaseContext = createContext()
export const AuthContext = createContext()


export default function Context({ children }) {
    const [user, setUser] = useState('Hello')
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )

}