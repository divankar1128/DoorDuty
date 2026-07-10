import AuthLayout from "../components/auth/AuthLayout";
import ChooseAccount from "../components/auth/ChooseAccount";

export default function Signup() {
  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Choose how you'd like to use Door&Duty."
    >
      <ChooseAccount />
    </AuthLayout>
  );
}