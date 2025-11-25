import EmailInput from "../Use-everywhere/CustomInput";
import { CustomButton } from "../Use-everywhere/CustomButton";
import CustomTitle from "./CustomTitle";
import Parent from "../Use-everywhere/ParentBox";
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ForgetSchema,type ForgetData } from '../../schemas/forgetPass'; 
import { useInfoDispatch , useInfoSelector } from "../../store/hooks";
import { checkEmail } from "../../store/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParentForAll from "../Use-everywhere/ParentForAll";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useInfoDispatch();

  const { userForgot,errors } = useInfoSelector((state) => state.user);
   const formik = useFormik<ForgetData>({ 
      initialValues: { email: '' }, 
      validationSchema: toFormikValidationSchema(ForgetSchema),
       validateOnChange: false, 
       validateOnBlur: true,
      onSubmit: (values) => { 
         dispatch(checkEmail(values));
      },
    });
     useEffect(() => {
      if(userForgot?.email && Object.keys(errors).length === 0){
        navigate("/auth/forgetPassword/ChangePass");
      }
    }, [userForgot,errors, navigate]);
  return (
    <ParentForAll>
    <Parent>
      {/* custom title */}
      <CustomTitle text="Forget Password" mb={4.5} />
      {/* email input */}
      <EmailInput 
      value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        error={Boolean(formik.errors.email || errors.email)}
        helperText={formik.errors.email || errors.email}
        onBlur={formik.handleBlur}
      />
      {/* button */}
      <CustomButton label="Confirm" mt={-1.2} mb={2.5} onClick={formik.handleSubmit} />
    </Parent>
    </ParentForAll>
  );
};

export default ForgetPassword;
