import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

export default function ProfessionalLogin() {
  return (
    <AuthLayout
      title="Professional Login"
      subtitle="Login to manage your bookings and earnings."
    >
      <LoginForm role="professional" />
    </AuthLayout>
  );
}