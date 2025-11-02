// // // // // // import {
// // // // // //   Box,
// // // // // //   Card,
// // // // // //   IconButton,
// // // // // //   TextField,
// // // // // //   Typography,
// // // // // // } from "@mui/material";
// // // // // // import { useState } from 'react'; // state برای showPassword و error!
// // // // // // import { InputAdornment } from '@mui/material';
// // // // // // import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'; // icon چشم باز.
// // // // // // import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'; // icon چشم با خط – برگشت!

// // // // // // const Test = () => {
// // // // // //   const [showPassword, setShowPassword] = useState(false); 
// // // // // //   const [error, setError] = useState(true); 

// // // // // //   return (
// // // // // //     <Box
// // // // // //       sx={{
// // // // // //         flexGrow: 1,
// // // // // //         mt: 14,
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "center",
// // // // // //         py: 4
// // // // // //       }}
// // // // // //     >
// // // // // //       <Card
// // // // // //         elevation={0}
// // // // // //         sx={{
// // // // // //           width: { xs: "80%", sm: "560px" },
// // // // // //           backgroundColor: "rgba(250, 250, 250, 0.025)",
// // // // // //           backdropFilter: "blur(20px)",
// // // // // //           borderRadius: 10,
// // // // // //           px: { xs: 2, lg: 6 },
// // // // // //           py: 8,
// // // // // //         }}
// // // // // //       >
// // // // // //         <Box
// // // // // //           sx={{
// // // // // //             display: "flex",
// // // // // //             flexDirection: "column",
// // // // // //             justifyContent: "center",
// // // // // //             gap: 2,
// // // // // //           }}
// // // // // //         >
// // // // // //           <Typography
// // // // // //             sx={{
// // // // // //               fontFamily: "Niramit, sans-serif",
// // // // // //               fontWeight: 700,
// // // // // //               fontStyle: "normal",
// // // // // //               fontSize: { xs: '30px', lg: '36px' },
// // // // // //               lineHeight: "100%",
// // // // // //               letterSpacing: "0%",
// // // // // //               textTransform: "capitalize",
// // // // // //               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
// // // // // //               backgroundClip: "text",
// // // // // //               WebkitBackgroundClip: "text",
// // // // // //               WebkitTextFillColor: "transparent",
// // // // // //               leadingTrim: "none",
// // // // // //               textAlign: "center",
// // // // // //             }}
// // // // // //           >
// // // // // //             login
// // // // // //           </Typography>
// // // // // //           <Box>
// // // // // //             <Typography
// // // // // //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // // // // //             >
// // // // // //               Password :
// // // // // //             </Typography>
// // // // // //             <TextField
// // // // // //               fullWidth
// // // // // //               placeholder="Please Enter Your Password"
// // // // // //               type={showPassword ? "text" : "password"} 
// // // // // //               variant="outlined"
// // // // // //               error={error} 
// // // // // //               helperText={error ? "The Password Is Incorrect" : ""} 
// // // // // //               InputProps={{
// // // // // //                 sx: {
// // // // // //                   bgcolor: "#242C39",
// // // // // //                   borderRadius: "8px",
// // // // // //                   color: "#fff",
// // // // // //                   fontSize: { xs: '12px', lg: '14px' },
// // // // // //                   p: "2px",
// // // // // //                   "& input::placeholder": {
// // // // // //                     color: "#fff",
// // // // // //                     opacity: 1,
// // // // // //                     fontSize: { xs: '12px', lg: '14px' },
// // // // // //                   },
// // // // // //                 },
// // // // // //                 endAdornment: (
// // // // // //                   <InputAdornment position="end">
// // // // // //                     <IconButton
// // // // // //                       onClick={() => setShowPassword((prev) => !prev)}
// // // // // //                       sx={{
// // // // // //                         color: error ? '#F66066' : "#ABABAB",
// // // // // //                         mr: 1,
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {showPassword ? (
// // // // // //                         <VisibilityOffOutlinedIcon /> 
// // // // // //                       ) : (
// // // // // //                         <RemoveRedEyeOutlinedIcon /> 
// // // // // //                       )}
// // // // // //                     </IconButton>
// // // // // //                   </InputAdornment>
// // // // // //                 ),
// // // // // //               }}
// // // // // //               sx={{
// // // // // //                 "& .MuiOutlinedInput-root": {
// // // // // //                   "& fieldset": { 
// // // // // //                     border: error ? "2px solid red" : "none"
// // // // // //                   },
// // // // // //                   "&.Mui-focused fieldset": { borderColor: error ? '#F66066' : 'none' },
// // // // // //                 },
// // // // // //                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' },
// // // // // //               }}
// // // // // //             />
// // // // // //           </Box>
// // // // // //         </Box>
// // // // // //       </Card>
// // // // // //     </Box>
// // // // // //   )
// // // // // // }

// // // // // // export default Test;



// // // // // import {
// // // // //   Box,
// // // // //   Card,
// // // // //   IconButton,
// // // // //   TextField,
// // // // //   Typography,
// // // // // } from "@mui/material";
// // // // // import { useState } from 'react';
// // // // // import { InputAdornment } from '@mui/material';
// // // // // import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// // // // // import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

// // // // // const Test = () => {
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // state ساده برای toggle تکرار
// // // // //   const [password, setPassword] = useState('');
// // // // //   const [confirmPassword, setConfirmPassword] = useState(''); // dummy state برای value
// // // // //   const [strength, setStrength] = useState('');
  
// // // // //   const calculateStrength = (pass: string) => {
// // // // //     if (pass.length < 6) return 'Very Weak';
// // // // //     if (pass.length < 11) return 'Weak';
// // // // //     return 'Strong!';
// // // // //   };
  
// // // // //   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const value = e.target.value;
// // // // //     setPassword(value);
// // // // //     setStrength(calculateStrength(value));
// // // // //   };
  
// // // // //   // dummy handler برای تکرار (فعلاً خالی، بعداً پر کن!)
// // // // //   const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     setConfirmPassword(e.target.value);
// // // // //   };

// // // // //   return (
// // // // //     <Box
// // // // //       sx={{
// // // // //         flexGrow: 1,
// // // // //         mt: 14,
// // // // //         display: "flex",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "center",
// // // // //         py: 4
// // // // //       }}
// // // // //     >
// // // // //       <Card
// // // // //         elevation={0}
// // // // //         sx={{
// // // // //           width: { xs: "80%", sm: "560px" },
// // // // //           backgroundColor: "rgba(250, 250, 250, 0.025)",
// // // // //           backdropFilter: "blur(20px)",
// // // // //           borderRadius: 10,
// // // // //           px: { xs: 2, lg: 6 },
// // // // //           py: 8,
// // // // //         }}
// // // // //       >
// // // // //         <Box
// // // // //           sx={{
// // // // //             display: "flex",
// // // // //             flexDirection: "column",
// // // // //             justifyContent: "center",
// // // // //             gap: 2,
// // // // //           }}
// // // // //         >
// // // // //           <Typography
// // // // //             sx={{
// // // // //               fontFamily: "Niramit, sans-serif",
// // // // //               fontWeight: 700,
// // // // //               fontStyle: "normal",
// // // // //               fontSize: { xs: '30px', lg: '36px' },
// // // // //               lineHeight: "100%",
// // // // //               letterSpacing: "0%",
// // // // //               textTransform: "capitalize",
// // // // //               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
// // // // //               backgroundClip: "text",
// // // // //               WebkitBackgroundClip: "text",
// // // // //               WebkitTextFillColor: "transparent",
// // // // //               leadingTrim: "none",
// // // // //               textAlign: "center",
// // // // //             }}
// // // // //           >
// // // // //             login
// // // // //           </Typography>
          
// // // // //           {/* بخش پسورد اصلی */}
// // // // //           <Box>
// // // // //             <Box sx={{display:'flex', justifyContent:'space-between',}}>
// // // // //               <Typography
// // // // //                 sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // // // //               >
// // // // //                 Password :
// // // // //               </Typography>
// // // // //               {strength && (
// // // // //                 <Typography
// // // // //                   sx={{
// // // // //                     fontSize: { xs: '14px', lg: '16px' },
// // // // //                     color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600'
// // // // //                     : '#6EC207',
// // // // //                     fontWeight: 'bold',
// // // // //                   }}
// // // // //                 >
// // // // //                   {strength}
// // // // //                 </Typography>
// // // // //               )}
// // // // //             </Box>
// // // // //             <Box>
// // // // //               <TextField
// // // // //                 fullWidth
// // // // //                 placeholder="Please Enter Your Password" // تصحیح placeholder (قبلاً Email بود!)
// // // // //                 type={showPassword ? "text" : "password"}
// // // // //                 variant="outlined"
// // // // //                 value={password}
// // // // //                 onChange={handlePasswordChange}
// // // // //                 InputProps={{
// // // // //                   sx: {
// // // // //                     bgcolor: "#242C39",
// // // // //                     borderRadius: "8px",
// // // // //                     color: "#fff",
// // // // //                     fontSize: { xs: '12px', lg: '14px' },
// // // // //                     p: "2px",
// // // // //                     "& input::placeholder": {
// // // // //                       color: "#fff",
// // // // //                       opacity: 1,
// // // // //                       fontSize: { xs: '12px', lg: '14px' },
// // // // //                     },
// // // // //                   },
// // // // //                   endAdornment: (
// // // // //                     <InputAdornment position="end">
// // // // //                       <IconButton
// // // // //                         onClick={() => setShowPassword((prev) => !prev)}
// // // // //                         sx={{
// // // // //                           color: "#ABABAB",
// // // // //                           mr: 1,
// // // // //                           "&:hover": { color: "#fff" },
// // // // //                         }}
// // // // //                       >
// // // // //                         {showPassword ? (
// // // // //                           <VisibilityOffOutlinedIcon />
// // // // //                         ) : (
// // // // //                           <RemoveRedEyeOutlinedIcon />
// // // // //                         )}
// // // // //                       </IconButton>
// // // // //                     </InputAdornment>
// // // // //                   ),
// // // // //                 }}
// // // // //                 sx={{
// // // // //                   "& .MuiOutlinedInput-root": {
// // // // //                     "& fieldset": { border: "none" },
// // // // //                   },
// // // // //                 }}
// // // // //               />
// // // // //             </Box>
// // // // //           </Box>

// // // // //           {/* بخش تکرار پسورد – کپی استایل‌ها، تازه و اورجینال! */}
// // // // //           <Box>
// // // // //             <Typography
// // // // //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // // // //             >
// // // // //               Confirm Password :
// // // // //             </Typography>
// // // // //             <Box>
// // // // //               <TextField
// // // // //                 fullWidth
// // // // //                 placeholder="Please Confirm Your Password"
// // // // //                 type={showConfirmPassword ? "text" : "password"}
// // // // //                 variant="outlined"
// // // // //                 value={confirmPassword}
// // // // //                 onChange={handleConfirmPasswordChange} // dummy handler
// // // // //                 InputProps={{
// // // // //                   sx: {
// // // // //                     bgcolor: "#242C39",
// // // // //                     borderRadius: "8px",
// // // // //                     color: "#fff",
// // // // //                     fontSize: { xs: '12px', lg: '14px' },
// // // // //                     p: "2px",
// // // // //                     "& input::placeholder": {
// // // // //                       color: "#fff",
// // // // //                       opacity: 1,
// // // // //                       fontSize: { xs: '12px', lg: '14px' },
// // // // //                     },
// // // // //                   },
// // // // //                   endAdornment: (
// // // // //                     <InputAdornment position="end">
// // // // //                       <IconButton
// // // // //                         onClick={() => setShowConfirmPassword((prev) => !prev)}
// // // // //                         sx={{
// // // // //                           color: "#ABABAB",
// // // // //                           mr: 1,
// // // // //                           "&:hover": { color: "#fff" },
// // // // //                         }}
// // // // //                       >
// // // // //                         {showConfirmPassword ? (
// // // // //                           <VisibilityOffOutlinedIcon />
// // // // //                         ) : (
// // // // //                           <RemoveRedEyeOutlinedIcon />
// // // // //                         )}
// // // // //                       </IconButton>
// // // // //                     </InputAdornment>
// // // // //                   ),
// // // // //                 }}
// // // // //                 sx={{
// // // // //                   "& .MuiOutlinedInput-root": {
// // // // //                     "& fieldset": { border: "none" },
// // // // //                   },
// // // // //                 }}
// // // // //               />
// // // // //             </Box>
// // // // //           </Box>
// // // // //         </Box>
// // // // //       </Card>
// // // // //     </Box>
// // // // //   )
// // // // // }

// // // // // export default Test;





// // // // import { useState } from 'react';
// // // // import { PasswordInput } from "./PasswordInput";
// // // // import { CustomButton } from "./CustomButton";
// // // // import CustomTitle from "./CustomTitle";
// // // // import Parent from "./Parent";


// // // // const ChangePassword = () => {
  
// // // //   const [password, setPassword] = useState('');
// // // //   const [confirmPassword, setConfirmPassword] = useState(''); 
// // // //   const [strength, setStrength] = useState('');
// // // //   const [showPasswordStrength, setShowPasswordStrength] = useState(false);
// // // //   const [errorPas] = useState(false);
// // // //   const calculateStrength = (pass: string) => {
// // // //     if (pass.length < 6) return 'Very Weak';
// // // //     if (pass.length < 11) return 'Weak';
// // // //     return 'Strong!';
// // // //   };
  
  
// // // //   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const value = e.target.value;
// // // //     setPassword(value);
// // // //     setStrength(calculateStrength(value));
// // // //   };
  

// // // //   // const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //   //   setConfirmPassword(e.target.value);
// // // //   // };

// // // //   return (
// // // //           <Parent>
// // // //            {/* custom title */}
// // // //            <CustomTitle text="Change Password" mb={4}/>
// // // //           {/* <Typography
// // // //             sx={{
// // // //               fontFamily: "Niramit, sans-serif",
// // // //               fontWeight: 700,
// // // //               fontStyle: "normal",
// // // //               fontSize: { xs: '30px', lg: '36px' },
// // // //               lineHeight: "100%",
// // // //               letterSpacing: "0%",
// // // //               textTransform: "capitalize",
// // // //               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
// // // //               backgroundClip: "text",
// // // //               WebkitBackgroundClip: "text",
// // // //               WebkitTextFillColor: "transparent",
// // // //               leadingTrim: "none",
// // // //               textAlign: "center",
// // // //               mb:4
// // // //             }}
// // // //           >
// // // //             Change Password
// // // //           </Typography> */}


          
// // // //          {/* input for password */}
// // // //          <PasswordInput
// // // //             label="New Password :"
// // // //             value={password}
// // // //             onChange={handlePasswordChange}
// // // //             showStrength={true}
// // // //             strength={strength}
// // // //             showPassword={showPasswordStrength}
// // // //             onTogglePassword={() => setShowPasswordStrength(prev => !prev)}
// // // //             showToggle={false}
// // // //           />

// // // //           {/* <Box>
// // // //             <Box sx={{display:'flex', justifyContent:'space-between',}}>
// // // //               <Typography
// // // //                 sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // // //               >
// // // //                 New Password:
// // // //               </Typography>
// // // //               {strength && (
// // // //                 <Typography
// // // //                   sx={{
// // // //                     fontSize: { xs: '14px', lg: '16px' },
// // // //                     color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600'
// // // //                     : '#6EC207',
// // // //                     fontWeight: 'bold',
// // // //                   }}
// // // //                 >
// // // //                   {strength}
// // // //                 </Typography>
// // // //               )}
// // // //             </Box>
// // // //             <Box>
// // // //               <TextField
// // // //                 fullWidth
// // // //                 placeholder="Please Enter Your Password" 
// // // //                 type= "password"
// // // //                 variant="outlined"
// // // //                 value={password}
// // // //                 onChange={handlePasswordChange}
// // // //                 InputProps={{
// // // //                   sx: {
// // // //                     bgcolor: "#242C39",
// // // //                     borderRadius: "8px",
// // // //                     color: "#fff",
// // // //                     fontSize: { xs: '12px', lg: '14px' },
// // // //                     p: "2px",
// // // //                     "& input::placeholder": {
// // // //                       color: "#fff",
// // // //                       opacity: 1,
// // // //                       fontSize: { xs: '12px', lg: '14px' },
// // // //                     },
// // // //                   },
// // // //                   // endAdornment: (
// // // //                   //   <InputAdornment position="end">
// // // //                   //     <IconButton
// // // //                   //       onClick={() => setShowPassword((prev) => !prev)}
// // // //                   //       sx={{
// // // //                   //         color: "#ABABAB",
// // // //                   //         mr: 1,
// // // //                   //         "&:hover": { color: "#fff" },
// // // //                   //       }}
// // // //                   //     >
// // // //                   //       {showPassword ? (
// // // //                   //         <VisibilityOffOutlinedIcon />
// // // //                   //       ) : (
// // // //                   //         <RemoveRedEyeOutlinedIcon />
// // // //                   //       )}
// // // //                   //     </IconButton>
// // // //                   //   </InputAdornment>
// // // //                   // ),
// // // //                 }}
// // // //                 sx={{
// // // //                   "& .MuiOutlinedInput-root": {
// // // //                     "& fieldset": { border: "none" },
// // // //                   },
// // // //                 }}
// // // //               />
// // // //             </Box>
// // // //           </Box> */}
           
// // // //            {/* input for repeat password */}
// // // //            <PasswordInput
// // // //             label="Confirm Password :"
// // // //             value={confirmPassword}
// // // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // // //             error={errorPas}
// // // //             helperText="The Password Is Incorrect"
// // // //             showToggle={false} // جادو: icon غیبش زد!
// // // //           />
// // // //           {/* <Box>
// // // //             <Typography
// // // //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // // //             >
// // // //              Repeat New Password :
// // // //             </Typography>
// // // //             <Box>
// // // //               <TextField
// // // //                 fullWidth
// // // //                 placeholder="Please Repeat Your Password"
// // // //                 type={showConfirmPassword ? "text" : "password"}
// // // //                 variant="outlined"
// // // //                 value={confirmPassword}
// // // //                 onChange={handleConfirmPasswordChange}
// // // //                 InputProps={{
// // // //                   sx: {
// // // //                     bgcolor: "#242C39",
// // // //                     borderRadius: "8px",
// // // //                     color: "#fff",
// // // //                     fontSize: { xs: '12px', lg: '14px' },
// // // //                     p: "2px",
// // // //                     "& input::placeholder": {
// // // //                       color: "#fff",
// // // //                       opacity: 1,
// // // //                       fontSize: { xs: '12px', lg: '14px' },
// // // //                     },
// // // //                   },
// // // //                   // endAdornment: (
// // // //                   //   <InputAdornment position="end">
// // // //                   //     <IconButton
// // // //                   //       onClick={() => setShowConfirmPassword((prev) => !prev)}
// // // //                   //       sx={{
// // // //                   //         color: "#ABABAB",
// // // //                   //         mr: 1,
// // // //                   //         "&:hover": { color: "#fff" },
// // // //                   //       }}
// // // //                   //     >
// // // //                   //       {showConfirmPassword ? (
// // // //                   //         <VisibilityOffOutlinedIcon />
// // // //                   //       ) : (
// // // //                   //         <RemoveRedEyeOutlinedIcon />
// // // //                   //       )}
// // // //                   //     </IconButton>
// // // //                   //   </InputAdornment>
// // // //                   // ),
// // // //                 }}
// // // //                 sx={{
// // // //                   "& .MuiOutlinedInput-root": {
// // // //                     "& fieldset": { border: "none" },
// // // //                   },
// // // //                 }}
// // // //               />
// // // //             </Box>
// // // //           </Box> */}





// // // //            {/* button */}
// // // //            <CustomButton label="Confirm" mt={3.5} mb={2}  />
// // // //            {/* <Button
// // // //             fullWidth
// // // //             sx={{
// // // //               height: 60,
// // // //               backgroundColor: "#1D8D94",
// // // //               boxShadow: "0px 0px 20px 0px #1D8D9480",
// // // //               color: "white",
// // // //               fontWeight: "bold",
// // // //               fontSize: "16px",
// // // //               borderRadius: 2,
// // // //               mb: 2,
// // // //               mt: 3.5 ,
// // // //               textTransform: "none",
// // // //               transition: "all 0.3s ease-out",
// // // //               "&:hover": {
// // // //                 transform: "scale(1.02)",
// // // //                 boxShadow: "0px 0px 25px 0px #1D8D9480",
// // // //                 backgroundColor: "#1A7A7D",
// // // //               },
// // // //               "&:active": {
// // // //                 transform: "scale(0.98)",
// // // //               },
// // // //             }}
// // // //           >
// // // //            Confirm
// // // //           </Button> */}


// // // //         </Parent>


// // // //   )
// // // // }

// // // // export default ChangePassword;



// // // import EmailInput from "./EmailInput";
// // // import { CustomButton } from "./CustomButton";
// // // import CustomTitle from "./CustomTitle";
// // // import Parent from "./Parent";

// // // const  ForgetPassword = () => {


 
// // //   return (
// // //     <Parent>
  
// // //           {/* custom title */}
// // //           <CustomTitle text="Forget Password" mb={4.5}/>
// // //           {/* <Typography
// // //             sx={{
// // //               fontFamily: "Niramit, sans-serif",
// // //               fontWeight: 700,
// // //               fontStyle: "normal",
// // //               fontSize:{xs:'30px' , lg:'36px'},
// // //               lineHeight: "100%",
// // //               letterSpacing: "0%",
// // //               textTransform: "capitalize",
// // //               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
// // //               backgroundClip: "text",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //               leadingTrim: "none",
// // //               textAlign: "center",
// // //                mb: 4.5,
// // //             }}
// // //           >
// // //            Forget Password
// // //           </Typography> */}
        

// // //            {/* email input */}
// // //            <EmailInput/>
// // //            {/* <Box>
// // //             <Typography
// // //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// // //             >
// // //               Email :
// // //             </Typography>
// // //             <TextField
// // //               fullWidth
// // //               placeholder="Please Enter Your Email"
// // //               variant="outlined"
// // //               error={error}
// // //               helperText={error ? 
// // //                 "The Email Is Incorrect"
// // //                 : ""} 
// // //               InputProps={{
// // //                 sx: {
// // //                   bgcolor: "#242C39",
// // //                   borderRadius: "8px",
// // //                   color: "#fff",
// // //                   "& input::placeholder": {
// // //                     color: "#fff",
// // //                     opacity: 1,
// // //                     fontSize: { xs: '12px', lg: '14px' },
// // //                   },
// // //                   '& .MuiFormHelperText-root': { 
// // //                   fontSize: { xs: '1px', lg: '1px' }
// // //                 },
// // //                   fontSize: { xs: '12px', lg: '14px' },
// // //                   p: "2px",
// // //                 },
// // //                 endAdornment: error ? ( 
// // //                   <IconButton
// // //                     aria-label="clear"
// // //                    sx={{ color: '#F66066' , mr:1 }}
// // //                   >
// // //                     <HighlightOffIcon sx={{ fontSize: 22 }} />
// // //                   </IconButton>
// // //                 ) : null,
// // //               }}
// // //               sx={{
// // //                 mb: 2,
// // //                 "& .MuiOutlinedInput-root": {
// // //                   "& fieldset": { 
// // //                     border: error ? "2px solid #F66066" : "none" 
// // //                   },
// // //                 },
// // //                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' , fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
// // //               }}
// // //             />
// // //           </Box> */}
          

// // //          {/* button */}
// // //          <CustomButton label="Confirm" mt={-1.2} mb={2.5}  />
// // //           {/* <Button
// // //             fullWidth
// // //             sx={{
// // //               height: 60,
// // //               backgroundColor: "#1D8D94",
// // //               boxShadow: "0px 0px 20px 0px #1D8D9480",
// // //               color: "white",
// // //               fontWeight: "bold",
// // //               fontSize: "16px",
// // //               borderRadius: 2,
// // //               mb: 2.5,
// // //               mt: -1.2 ,
// // //               textTransform: "none",
// // //               transition: "all 0.3s ease-out",
// // //               "&:hover": {
// // //                 transform: "scale(1.02)",
// // //                 boxShadow: "0px 0px 25px 0px #1D8D9480",
// // //                 backgroundColor: "#1A7A7D",
// // //               },
// // //               "&:active": {
// // //                 transform: "scale(0.98)",
// // //               },
// // //             }}
// // //           >
// // //            Confirm
// // //           </Button> */}


// // //        </Parent>
// // //   );
// // // };

// // // export default ForgetPassword;



// // import React, { useState } from "react";
// // import {
// //   Box,
// //   TextField,
// //    Typography,
// // } from "@mui/material";
// // import {  useInfoDispatch } from "../store/hooks";
// // import { type UserInfo, addUser } from "../store/UserSlice";
// // import EmailInput from "./EmailInput";
// // import { PasswordInput } from "./PasswordInput";
// // import { CustomButton } from "./CustomButton";
// // import CustomQuestion from "./CustomQuestion";
// // import CustomTitle from "./CustomTitle";
// // import Parent from "./Parent";

// // const RegisterUI = () => {
// //   const dispatch = useInfoDispatch();

// //   const [userName, setUserName] = useState<string>("");
// //   const [email, setEmail] = useState<string>("");
// //   const [password, setPassword] = useState<string>("");
// //   const [strength, setStrength] = useState(''); 
// // const [showPasswordStrength, setShowPasswordStrength] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();



// //     const newUser: UserInfo = {
// //       userName: userName,
// //       email: email,
// //       password: password,
// //     };

// //     setTimeout(() => {
// //       console.log(
// //         "localStorage after delay:",
// //         localStorage.getItem("persist:root")
// //       );
// //     }, 1000); 
// //     dispatch(addUser(newUser));
// //     console.log("کاربر اضافه شد:", newUser); 

// //     setUserName("");
// //     setEmail("");
// //     setPassword("");

// //     alert("ثبت‌نام موفق!");

// //   };

// //    const calculateStrength = (pass: string) => {
// //     if (pass.length < 6) return 'Very Weak'; 
// //     if (pass.length < 11) return 'Weak'; 
// //     return 'Strong!'; 
// //   };

// //    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = e.target.value;
// //     setPassword(value);
// //     setStrength(calculateStrength(value)); 
// //   };
// //   //  onChange={(e) => setUserName(e.target.value)} 
 
// //   return (
// //         <Parent>
    
// //           {/* custom title */}
// //           <CustomTitle text="Register" />
// //           {/* <Typography
// //             sx={{
// //               fontFamily: "Niramit, sans-serif",
// //               fontWeight: 700,
// //               fontStyle: "normal",
// //               fontSize:{xs:'30px' , lg:'36px'},
// //               lineHeight: "100%",
// //               letterSpacing: "0%",
// //               textTransform: "capitalize",
// //               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
// //               backgroundClip: "text",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               leadingTrim: "none",
// //               textAlign: "center",
// //             }}
// //           >
// //            Register
// //           </Typography> */}


// //          <Box onSubmit={handleSubmit}>
// //           <Box>
// //             <Typography
// //               sx={{ mb: 2, fontSize:{xs:'14px' , lg:'16px'}, color: "#ABABAB", fontWeight: "bold" }}
// //             >
// //               Name :
// //             </Typography>
// //             <TextField
// //               fullWidth
// //               placeholder="Please Enter Your Name"
// //               variant="outlined"
// //               InputProps={{
// //                 sx: {
// //                   bgcolor: "#242C39",
// //                   borderRadius: "8px",
// //                   color: "#fff",
// //                   "& input::placeholder": {
// //                     color: "#fff",
// //                     opacity: 1,
// //                    fontSize:{xs:'12px' , lg:'14px'},
// //                   },
// //                  fontSize:{xs:'12px' , lg:'14px'},
// //                   p: "2px",
// //                 },
// //               }}
// //               sx={{
// //                 mb: 2,
// //                 "& .MuiOutlinedInput-root": {
// //                   "& fieldset": { border: "none" },
// //                 },
// //               }}
// //             />
// //           </Box>
// //           {/* email input */}
// //             <EmailInput/>
// //            {/* <Box>
// //             <Typography
// //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// //             >
// //               Email :
// //             </Typography>
// //             <TextField
// //               fullWidth
// //               placeholder="Please Enter Your Email"
// //               variant="outlined"
// //               error={error}
// //               helperText={error ? 
// //                 "The Email Is Incorrect"
// //                 : ""} 
// //               InputProps={{
// //                 sx: {
// //                   bgcolor: "#242C39",
// //                   borderRadius: "8px",
// //                   color: "#fff",
// //                   "& input::placeholder": {
// //                     color: "#fff",
// //                     opacity: 1,
// //                     fontSize: { xs: '12px', lg: '14px' },
// //                   },
// //                   '& .MuiFormHelperText-root': { 
// //                   fontSize: { xs: '1px', lg: '1px' }
// //                 },
// //                   fontSize: { xs: '12px', lg: '14px' },
// //                   p: "2px",
// //                 },
// //                 endAdornment: error ? ( 
// //                   <IconButton
// //                     aria-label="clear"
// //                    sx={{ color: '#F66066' , mr:1 }}
// //                   >
// //                     <HighlightOffIcon sx={{ fontSize: 22 }} />
// //                   </IconButton>
// //                 ) : null,
// //               }}
// //               sx={{
// //                 mb: 2,
// //                 "& .MuiOutlinedInput-root": {
// //                   "& fieldset": { 
// //                     border: error ? "2px solid #F66066" : "none" 
// //                   },
// //                 },
// //                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' , fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
// //               }}
// //             />
            
// //           </Box> */}

// //        {/* input for password  */}
// //        <PasswordInput
// //             label="Password :"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             showStrength={true}
// //             strength={strength}
// //             showPassword={showPasswordStrength}
// //             onTogglePassword={() => setShowPasswordStrength(prev => !prev)}
// //           />
       
// //         {/* <Box >
// //             <Box sx={{display:'flex', justifyContent:'space-between',}}>
// //             <Typography
// //               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
// //             >
// //               Password :
// //             </Typography>
// //             {strength && (
// //                 <Typography
// //                   sx={{
// //                     fontSize: { xs: '14px', lg: '16px' },
// //                     color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600' 
// //                     : '#6EC207', 
// //                     fontWeight: 'bold',
// //                   }}
// //                 >
// //                   {strength}
// //                 </Typography>
// //               )}
// //               </Box>
// //             <Box> 
// //               <TextField
// //                 fullWidth
// //                 placeholder="Please Enter Your Password"
// //                 type={showPassword ? "text" : "password"}
// //                 variant="outlined"
// //                 value={password}
// //                 onChange={handlePasswordChange}
// //                 InputProps={{
// //                   sx: {
// //                     bgcolor: "#242C39",
// //                     borderRadius: "8px",
// //                     color: "#fff",
// //                     fontSize: { xs: '12px', lg: '14px' },
// //                     p: "2px",
// //                     "& input::placeholder": {
// //                       color: "#fff",
// //                       opacity: 1,
// //                       fontSize: { xs: '12px', lg: '14px' },
// //                     },
// //                   },
// //                   endAdornment: (
// //                     <InputAdornment position="end">
// //                       <IconButton
// //                         onClick={() => setShowPassword((prev) => !prev)}
// //                         sx={{
// //                           color: "#ABABAB",
// //                           mr: 1,
// //                           "&:hover": { color: "#fff" },
// //                         }}
// //                       >
// //                         {showPassword ? (
// //                           <VisibilityOffOutlinedIcon />
// //                         ) : (
// //                           <RemoveRedEyeOutlinedIcon />
// //                         )}
// //                       </IconButton>
// //                     </InputAdornment>
// //                   ),
// //                 }}
// //                 sx={{
// //                   "& .MuiOutlinedInput-root": {
// //                     "& fieldset": { border: "none" },
// //                   },
// //                 }}
// //               />
// //             </Box>
// //           </Box>
// //            */}

// //           </Box>

// //           {/* button */}
// //           <CustomButton label="Register" />

// //           {/* <Button
// //             fullWidth
// //             sx={{
// //               height: 60,
// //               backgroundColor: "#1D8D94",
// //               boxShadow: "0px 0px 20px 0px #1D8D9480",
// //               color: "white",
// //               fontWeight: "bold",
// //               fontSize: "16px",
// //               borderRadius: 2,
// //               mb: 2.5,
// //               mt: 3.5 ,
// //               textTransform: "none",
// //               transition: "all 0.3s ease-out",
// //               "&:hover": {
// //                 transform: "scale(1.02)",
// //                 boxShadow: "0px 0px 25px 0px #1D8D9480",
// //                 backgroundColor: "#1A7A7D",
// //               },
// //               "&:active": {
// //                 transform: "scale(0.98)",
// //               },
// //             }}
// //           >
// //            Register
// //           </Button> */}

// //           {/* custom text */}
// //           <CustomQuestion question="Have An Account?" answer="Login" src="/auth/login"/>
// //           {/* <Typography
// //             sx={{
// //               fontFamily: "Niramit, sans-serif",
// //               fontWeight: 700,
// //               fontStyle: "normal",
// //                fontSize:{xs:'12px' , sm:'14px' , lg:'16px'},
// //               lineHeight: "100%",
// //               letterSpacing: "0%",
// //               textTransform: "capitalize",
// //               leadingTrim: "none",
// //               color: "#ABABAB",
// //               textAlign: "center",
// //             }}
// //           >
// //              Have An Account?{" "}
// //             <Link
// //               href="/auth/login"
// //               underline="hover"
// //               sx={{
// //                 fontWeight: 700,
// //                 color: "#1D8D94",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Login
// //             </Link>
// //           </Typography> */}

// // </Parent>

// //   );
// // };

// // export default RegisterUI;

// import {
//   Box,
//   Typography,
//   Link,
// } from "@mui/material";
// import { useState } from "react";
// import CustomizedCheckbox from "./CustomCheckbox";
// import EmailInput from "./EmailInput";
// import { PasswordInput } from "./PasswordInput";
// import { CustomButton } from "./CustomButton";
// import CustomQuestion from "./CustomQuestion";
// import CustomTitle from "./CustomTitle";
// import Parent from "./Parent";

// const LoginUI = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorPas] = useState(false);
//   return (
//     <Parent>
    
//           <CustomTitle text='login' />
//           {/* <Typography
//             sx={{
//               fontFamily: "Niramit, sans-serif",
//               fontWeight: 700,
//               fontStyle: "normal",
//               fontSize: { xs: "30px", lg: "36px" },
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               textTransform: "capitalize",
//               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               leadingTrim: "none",
//               textAlign: "center",
//             }}
//           >
//             login
//           </Typography> */}


//           {/* Email input */}
//           <EmailInput />
//           {/* <Box>
//             <Typography
//               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
//             >
//               Email :
//             </Typography>
//             <TextField
//               fullWidth
//               placeholder="Please Enter Your Email"
//               variant="outlined"
//               error={error}
//               helperText={error ? 
//                 "The Email Is Incorrect"
//                 : ""} 
//               InputProps={{
//                 sx: {
//                   bgcolor: "#242C39",
//                   borderRadius: "8px",
//                   color: "#fff",
//                   "& input::placeholder": {
//                     color: "#fff",
//                     opacity: 1,
//                     fontSize: { xs: '12px', lg: '14px' },
//                   },
//                   '& .MuiFormHelperText-root': { 
//                   fontSize: { xs: '1px', lg: '1px' }
//                 },
//                   fontSize: { xs: '12px', lg: '14px' },
//                   p: "2px",
//                 },
//                 endAdornment: error ? ( 
//                   <IconButton
//                     aria-label="clear"
//                    sx={{ color: '#F66066' , mr:1 }}
//                   >
//                     <HighlightOffIcon sx={{ fontSize: 22 }} />
//                   </IconButton>
//                 ) : null,
//               }}
//               sx={{
//                 mb: 2,
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { 
//                     border: error ? "2px solid #F66066" : "none" 
//                   },
//                 },
//                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' , fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
//               }}
//             />
//           </Box> */}

//           {/* input for password  */}
         
//           <PasswordInput
//             label="Password :"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             error={errorPas}
//             helperText="The Password Is Incorrect"
//             showPassword={showPassword}
//             onTogglePassword={() => setShowPassword(!showPassword)}
//           />
          
//           {/* <Box>
//             <Typography
//               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
//             >
//               Password :
//             </Typography>
//             <TextField
//               fullWidth
//               placeholder="Please Enter Your Password"
//               type={showPassword ? "text" : "password"} 
//               variant="outlined"
//               error={errorPas} 
//               helperText={errorPas ? "The Password Is Incorrect" : ""} 
//               InputProps={{
//                 sx: {
//                   bgcolor: "#242C39",
//                   borderRadius: "8px",
//                   color: "#fff",
//                   fontSize: { xs: '12px', lg: '14px' },
//                   p: "2px",
//                   "& input::placeholder": {
//                     color: "#fff",
//                     opacity: 1,
//                     fontSize: { xs: '12px', lg: '14px' },
//                   },
//                 },
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       sx={{
//                         color: errorPas ? '#F66066' : "#ABABAB",
//                         mr: 1,
//                       }}
//                     >
//                       {showPassword ? (
//                         <VisibilityOffOutlinedIcon /> 
//                       ) : (
//                         <RemoveRedEyeOutlinedIcon /> 
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { 
//                     border: errorPas ? "2px solid red" : "none"
//                   },
//                   "&.Mui-focused fieldset": { borderColor: errorPas ? '#F66066' : 'none' },
//                 },
//                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066', fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
//               }}
//             />
//           </Box> */}

//           {/* checkbox */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               width: "100%",
//             }}
//           >
//             <CustomizedCheckbox></CustomizedCheckbox>
//             <Link href="/auth/forgetPassword">
//               <Typography
//                 variant="body2"
//                 sx={{
//                   fontSize: { xs: "12px", sm: "14px", lg: "16px" },
//                   color: "#1D8D94",
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                   textDecoration: "underline",
//                   textUnderlineOffset: "1px",
//                 }}
//               >
//                 Forgot Your Password ?
//               </Typography>
//             </Link>
//           </Box>


//           {/* Button */}
//           <CustomButton label="Login"  />
//           {/* <Button
//             fullWidth
//             sx={{
//               height: 60,
//               backgroundColor: "#1D8D94",
//               boxShadow: "0px 0px 20px 0px #1D8D9480",
//               color: "white",
//               fontWeight: "bold",
//               fontSize: "16px",
//               borderRadius: 2,
//               mb: 2.5,
//               mt: 3.5,
//               textTransform: "none",
//               transition: "all 0.3s ease-out",
//               "&:hover": {
//                 transform: "scale(1.02)",
//                 boxShadow: "0px 0px 25px 0px #1D8D9480",
//                 backgroundColor: "#1A7A7D",
//               },
//               "&:active": {
//                 transform: "scale(0.98)",
//               },
//             }}
//           >
//             Login
//           </Button> */}

//        {/* custom text */}
//           <CustomQuestion question="dont have an account?" answer="register" src="/auth/register"/>
//        {/*  <Typography
//             sx={{
//               fontFamily: "Niramit, sans-serif",
//               fontWeight: 700,
//               fontStyle: "normal",
//               fontSize: { xs: "12px", sm: "14px", lg: "16px" },
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               textTransform: "capitalize",
//               leadingTrim: "none",
//               color: "#ABABAB",
//               textAlign: "center",
//             }}
//           >
//             dont have an account?{" "}
//             <Link
//               href="/auth/register"
//               underline="hover"
//               sx={{
//                 fontWeight: 700,
//                 color: "#1D8D94",
//                 cursor: "pointer",
//               }}
//             >
//               register
//             </Link>
//           </Typography> */}


//     </Parent>
//   );
// };

// export default LoginUI;
