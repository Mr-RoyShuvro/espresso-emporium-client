import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState([]);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;