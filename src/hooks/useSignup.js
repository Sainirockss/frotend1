import Swal from "sweetalert2";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Navigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password,otp,role) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://lmss-nhi2.onrender.com/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password,otp,role }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update authcontext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "otp matches , welcome back",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return { signup, isLoading, error };
};
