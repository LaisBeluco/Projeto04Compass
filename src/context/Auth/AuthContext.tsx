import React, { useContext, useState, useEffect } from "react";
// import { string } from "yup";
// import { auth } from "../../firebase";

// const AuthContext = React.createContext({});

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }: any) {
//   const [currentUser, setCurrentUser] = useState();

//   function signup({ email, password }: any) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(({ user }: any) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// // export const AuthContext = createContext();
