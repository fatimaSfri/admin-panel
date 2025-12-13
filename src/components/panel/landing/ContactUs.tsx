import { Box } from "@mui/material";
import ParentBox from "../../Use-everywhere/ParentBox";
import { GradientText } from "../dashboard/GradientText";
import { AppTypographyBold } from "../../Use-everywhere/AppTypography ";
import CustomInput from "../../Use-everywhere/CustomInput";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { contactSchema, type ContactData } from "../../../schemas/contact";
import { CustomButton } from "../../Use-everywhere/CustomButton";

const ContactUs = () => {
  const formik = useFormik<ContactData>({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: toFormikValidationSchema(contactSchema),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      alert(`Thanks for reaching out! Email: ${values.email}`);
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        alignItems: "center",
        justifyContent:"center",
        mt: "140px",
        mx:"auto"
      }}
    >
      <ParentBox pb="40px" pt="23px" pr="37px" pl="38px" mb="46px">
        <GradientText>contact us</GradientText>
        <Box height="30px">
          <AppTypographyBold size={16}>
            reach out and we will get in touch within 24 hours.
          </AppTypographyBold>
        </Box>

        <Box
          mt="19px"
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          {/* Email Input */}
          <CustomInput
            lable="Email :"
            placeholder="Please Enter Your Email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ""}
          />

          {/* Subject Input */}
          <CustomInput
            lable="subject :"
            placeholder="Please enter your subject"
            value={formik.values.subject}
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject ? formik.errors.subject : ""}
          />

          {/* Message Input (Multiline) */}
          <CustomInput
            lable="Message text :"
            placeholder="Please enter your text"
            multiline={true}
            rows={10}
            value={formik.values.message}
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message ? formik.errors.message : ""}
          />

          <CustomButton
            label="Send "
            type="submit"
            onClick={() => formik.handleSubmit()}
            mb={0}
            mt={0.65}
            width="100%"
          />
        </Box>
      </ParentBox>
    </Box>
  );
};

export default ContactUs;
