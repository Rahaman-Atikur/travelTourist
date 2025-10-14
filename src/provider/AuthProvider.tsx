// import React, { createContext, useState, type ReactNode } from "react";
// // import { createContext, useState, type ReactNode } from "react";
// interface User {
//   name: string;
//   email: string;
// }
// interface AuthContextType {
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
// }
// // export const AuthContext = createContext<AuthContextType | undefined>(
// //   undefined
// // );
// export const AuthContext = createContext<AuthContextType>({
//   user: { name: "", email: "" },
//   setUser: () => {},
// });

// interface AuthProviderProps {
//   children: ReactNode;
// }
// // export const AuthContext = createContext();
// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User>({
//     name: "Atikur Rahaman",
//     email: "atikur.uk.rahaman@gmail.com",
//   });
//   const authData: AuthContextType = {
//     user,
//     setUser,
//   };
//   return (
//     <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
//   );
// };
// export default AuthProvider;
