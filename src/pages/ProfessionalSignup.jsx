import AuthLayout from "../components/auth/AuthLayout";
import ProfessionalSignupForm from "../components/auth/ProfessionalSignupForm";

export default function ProfessionalSignup() {
  return (
    <AuthLayout
      title="Become a Professional 🛠️"
      subtitle="Join Door&Duty and start earning by providing trusted home services."
    >
      <ProfessionalSignupForm />
    </AuthLayout>
  );
}