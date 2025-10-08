import React, { useEffect } from "react";

const AuthProvider: React.FC = () => {
  useEffect(() => {
    console.log("I am from body of useEffect");
    return () => {
      console.log("I am from return function of useEffect");
    };
  }, []);
  return <div></div>;
};

export default AuthProvider;
