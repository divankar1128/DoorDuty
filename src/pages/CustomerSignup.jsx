import AuthLayout from "../components/auth/AuthLayout";
import CustomerSignupForm from "../components/auth/CustomerSignupForm";

export default function CustomerSignup() {
  return (
    <AuthLayout
      title="Customer Registration 👤"
      subtitle="Create your Door&Duty account and start booking trusted professionals."
    >
      <CustomerSignupForm />
    </AuthLayout>
  );
}