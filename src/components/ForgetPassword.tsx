import EmailInput from "./EmailInput";
import { CustomButton } from "./CustomButton";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";

const ForgetPassword = () => {
  return (
    <Parent>
      {/* custom title */}
      <CustomTitle text="Forget Password" mb={4.5} />
      {/* email input */}
      <EmailInput />
      {/* button */}
      <CustomButton label="Confirm" mt={-1.2} mb={2.5} />
    </Parent>
  );
};

export default ForgetPassword;
