import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const authData = { user,setUser };

  return <AuthContext value={authData}>{children}</AuthContext>;
  
}

export default AuthProvider