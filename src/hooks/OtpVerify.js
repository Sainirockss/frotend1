import Swal from "sweetalert2";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Navigate } from "react-router-dom";

export const OtpVerify = () => {
  const [error1, setError] = useState(null);
  const [isLoading1, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const verifyotp = async (email) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://lmss-nhi2.onrender.com/api/user/sendotp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
    //   localStorage.setItem("user", JSON.stringify(json));

      //update authcontext
    //   dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "check mail for verification",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return { verifyotp, isLoading1, error1 };
};
