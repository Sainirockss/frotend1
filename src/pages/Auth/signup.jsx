// import { useState } from "react";
// import { useSignup } from "../../hooks/useSignup";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import sqr from "../../img/sqr.svg";
// import sqr2 from "../../img/sqr2.svg";
// import sqr3 from "../../img/sqr3.svg";
// import sqr4 from "../../img/sqr4.svg";
// import { OtpVerify } from "../../hooks/OtpVerify";
// // import "./style.css";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const { signup, error1, isLoading1 } = useSignup();
//   const { verifyotp, error, isLoading } = OtpVerify();
//   const { user } = useAuthContext();
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // await signup(name, email, password);
//     await verifyotp(email);
//     localStorage.setItem("otpTemp",JSON.stringify({email,name,password}));
//     // setEmail("");
//     // setName("");
//     // setPassword("");

//     navigate("/sendotp");
//   };
//   return (
//     <div className="flex items-center justify-center overflow-hidden text-white login">
//       <img
//         alt="err"
//         src={sqr}
//         className="absolute top-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"
//       ></img>
//       <img
//         alt="err"
//         src={sqr2}
//         className="absolute top-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"
//       ></img>
//       <img
//         alt="err"
//         src={sqr3}
//         className="absolute bottom-0 left-0 lg:w-[200px]  md:w-[150px] w-[100px]"
//       ></img>
//       <img
//         alt="err"
//         src={sqr4}
//         className="absolute bottom-0 right-0 lg:w-[200px]  md:w-[150px] w-[100px]"
//       ></img>
//       <form className="flex flex-col" onSubmit={handleSubmit}>
//         <h3 className="mx-auto text-4xl font-medium mb-14">Sign Up</h3>
//         <div className="relative mx-auto">
//           <label className="absolute mb-2  -top-8 left-2">Username :</label>
//           <input
//             placeholder="     full name"
//             className="border field peer rounded-xl border-slate-600 "
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </div>
//         <div className="relative mx-auto mt-14">
//           <label className="absolute mt-4 mb-2 -top-12 left-2">Email:</label>
//           <input
//             placeholder="   you@example.com"
//             className="border field peer rounded-xl border-slate-600 "
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             autoComplete="on"
//           />
//           <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
//             Please provide a valid email address.
//           </p>
//         </div>
//         <div className="relative mx-auto mt-8">
//           <label className="absolute mt-4 mb-2 -top-12 left-2">Password</label>
//           <input
//             placeholder="  *************"
//             className="border field rounded-xl border-slate-600 "
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             autoComplete="on"
//           />
//         </div>
//         <button
//           disabled={isLoading}
//           className="bg-sky-600 mx-auto hover:bg-sky-800 rounded-xl mt-10  text-white text-xl md:w-[398px] w-[90vw] h-[58px]"
//         >
//           Submit
//         </button>
//         {error && <div>{error}</div>}
//         <h1 className="mx-auto mt-6 ">
//           -------------------<span className="text-lg">Or</span>
//           -------------------
//         </h1>
//         <span className="mx-auto mt-6">
//           {" "}
//           Have an account !{" "}
//           <Link to={"/login"} className="text-blue-400">
//             log in
//           </Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Signup;





// // const Signup = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Handle form submission
// //     navigate("/sendotp");
// //   };

// //   return (
// //     <div className="signup-container">
// //       <img src={sqr} className="shape shape1" alt="shape" />
// //       <img src={sqr2} className="shape shape2" alt="shape" />
// //       <img src={sqr3} className="shape shape3" alt="shape" />
// //       <img src={sqr4} className="shape shape4" alt="shape" />
// //       <form className="signup-form" onSubmit={handleSubmit}>
// //         <h3 className="form-title">Sign Up</h3>
// //         <div className="form-group">
// //           <label htmlFor="name">Username:</label>
// //           <input
// //             id="name"
// //             type="text"
// //             placeholder="Full Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             id="email"
// //             type="email"
// //             placeholder="you@example.com"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="password">Password:</label>
// //           <input
// //             id="password"
// //             type="password"
// //             placeholder="*************"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>
// //         <button className="btn" type="submit">Submit</button>
// //         <p className="error-message"> {/* Display error message here if needed */}</p>
// //         <div className="or-divider">
// //           <hr />
// //           <span>Or</span>
// //           <hr />
// //         </div>
// //         <p className="login-text">
// //           Have an account? <Link to="/login">Log in</Link>
// //         </p>
// //       </form>
// //     </div>
// //   ); 
// // };

// // export default Signup;





import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { OtpVerify } from "../../hooks/OtpVerify";
import { useAuthContext } from "../../hooks/useAuthContext";
import sqr from "../../img/sqr.svg";
import sqr2 from "../../img/sqr2.svg";
import sqr3 from "../../img/sqr3.svg";
import sqr4 from "../../img/sqr4.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student"); // Default value is "Student"

  const { verifyotp, error, isLoading } = OtpVerify();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, name, password, role };
    console.log("form data",formData); // Log the form data to ensure role is included

    await verifyotp(email);
    localStorage.setItem("otpTemp", JSON.stringify(formData));
    navigate("/sendotp");
  };

  return (
    <div className="flex items-center justify-center overflow-hidden text-white login">
      <img alt="err" src={sqr} className="absolute top-0 left-0 lg:w-[200px] md:w-[150px] w-[100px]" />
      <img alt="err" src={sqr2} className="absolute top-0 right-0 lg:w-[200px] md:w-[150px] w-[100px]" />
      <img alt="err" src={sqr3} className="absolute bottom-0 left-0 lg:w-[200px] md:w-[150px] w-[100px]" />
      <img alt="err" src={sqr4} className="absolute bottom-0 right-0 lg:w-[200px] md:w-[150px] w-[100px]" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3 className="mx-auto text-4xl font-medium mb-14">Sign Up</h3>
        <div className="relative mx-auto">
          <label className="absolute mb-2 -top-8 left-2">Username :</label>
          <input
            placeholder="Full name"
            className="border field peer rounded-xl border-slate-600"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="relative mx-auto mt-14">
          <label className="absolute mt-4 mb-2 -top-12 left-2">Email:</label>
          <input
            placeholder="you@example.com"
            className="border field peer rounded-xl border-slate-600"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="on"
          />
          <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
            Please provide a valid email address.
          </p>
        </div>
        <div className="relative mx-auto mt-8">
          <label className="absolute mt-4 mb-2 -top-12 left-2">Password</label>
          <input
            placeholder="*************"
            className="border field rounded-xl border-slate-600"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="on"
          />
        </div>
        <div className="relative mx-auto mt-8">
          <label className="block mb-2" htmlFor="role">Role:</label>
          <select
            id="role"
            className="border field peer rounded-xl border-slate-600 px-2 py-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button
          disabled={isLoading}
          className="bg-sky-600 mx-auto hover:bg-sky-800 rounded-xl mt-10 text-white text-xl md:w-[398px] w-[90vw] h-[58px]"
        >
          Submit
        </button>
        {error && <div>{error}</div>}
        <h1 className="mx-auto mt-6">
          -------------------<span className="text-lg">Or</span>-------------------
        </h1>
        <span className="mx-auto mt-6">
          Have an account?{" "}
          <Link to={"/login"} className="text-blue-400">
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
