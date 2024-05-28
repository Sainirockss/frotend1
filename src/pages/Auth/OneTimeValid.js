// import React, { useState } from 'react';
// // import Signup from './signup';
// import { useSignup } from '../../hooks/useSignup';
// import { useNavigate } from 'react-router-dom';

// const OneTimeValid = () => {
//   const [otp, setOTP] = useState();
//   const [errorMessage, setErrorMessage] = useState('');
//   const { signup, error, isLoading } = useSignup();
//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setOTP(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate OTP (e.g., check length)
//     if (otp.length !== 6) {
//       setErrorMessage('Please enter a valid OTP.');
//       return;
//     }

//     // If OTP is valid, you can proceed with further actions like login, verification, etc.
//     // For now, let's just log the OTP.
//     console.log('OTP entered:', otp);
//     let data = JSON.parse(localStorage.getItem("otpTemp"));
//     let name = data.name;
//     let email = data.email;
//     let password = data.password;
//     let res = await signup(name, email, password, otp);
//     // Clear OTP field after submission
//     console.log("res",res);
//     setOTP('');
//     setErrorMessage('');
//     navigate("/login");
//   };

//   console.log(otp);

//   return (
//     <div>
//       <h2>Enter OTP</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e)=>setOTP(e.target.value)}
//           placeholder="Enter OTP"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//   );
// };

// export default OneTimeValid;







import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

const OneTimeValid = () => {
  const [otp, setOTP] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate OTP (e.g., check length)
    if (otp.length !== 6) {
      setErrorMessage('Please enter a valid OTP.');
      return;
    }

    // If OTP is valid, you can proceed with further actions like login, verification, etc.
    // For now, let's just log the OTP.
    console.log('OTP entered:', otp);
    let data = JSON.parse(localStorage.getItem("otpTemp"));
    let name = data.name;
    let email = data.email;
    let password = data.password;
    let role = data.role;
    await signup(name, email, password, otp,role);
    // Clear OTP field after submission
    setOTP('');
    setErrorMessage('');
    navigate("/login");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(to bottom right, #6FB1FC, #4364F7)' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', maxWidth: '400px', width: '100%' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Verify Your Account</h2>
        <p style={{ marginBottom: '20px', textAlign: 'center', color: '#666' }}>Please enter the one-time password sent to your email to verify your account.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e)=>setOTP(e.target.value)}
            placeholder="Enter OTP"
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', boxSizing: 'border-box' }}
          />
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4364F7', color: '#fff', borderRadius: '5px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Submit</button>
        </form>
        {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default OneTimeValid;




