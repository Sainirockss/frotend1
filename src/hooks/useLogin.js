import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const[isloggedIn,setIsLoggedIn] = useState(false); 
  useEffect(()=>{
    const usertoken = localStorage.getItem("token");
    if(usertoken){
      setIsLoggedIn(true);
    }
  },[]);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://lmss-nhi2.onrender.com/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include', // This is important to include cookies
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // const token = response.json;
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      localStorage.setItem("token", JSON.token);
      setIsLoading(true);
      
    


      //update authcontext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "sign in done successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return { login, isLoading, error };
};
