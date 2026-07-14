import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">

          <div className="mx-auto max-w-5xl px-6 py-24 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Legal Information
            </span>

            <h1 className="mt-8 text-6xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Your privacy matters to us. This Privacy Policy explains
              how Door&Duty collects, uses, stores and protects your
              personal information whenever you use our platform.
            </p>

            <p className="mt-6 text-slate-500">
              Last Updated: July 2026
            </p>

          </div>

        </section>

        {/* ================= CONTENT ================= */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-4xl space-y-12 px-6">

            {/* Introduction */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                1. Introduction
              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Door&Duty values your trust and is committed to protecting
                your personal information. By using our website or mobile
                application, you agree to the collection and use of your
                information in accordance with this Privacy Policy.

              </p>

            </div>

            {/* Information We Collect */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                2. Information We Collect
              </h2>

              <ul className="mt-8 space-y-5 text-slate-600">

                <li>• Name and contact information</li>

                <li>• Email address and phone number</li>

                <li>• Home or service address</li>

                <li>• Booking history and service preferences</li>

                <li>• Payment information (processed securely)</li>

                <li>• Device, browser and usage information</li>

                <li>• Location information (when permitted)</li>

              </ul>

            </div>
                        {/* How We Use Information */}

                        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  3. How We Use Your Information
</h2>

<ul className="mt-8 space-y-5 text-slate-600">

  <li>• To create and manage your account.</li>

  <li>• To process bookings and payments.</li>

  <li>• To connect customers with professionals.</li>

  <li>• To improve our website and services.</li>

  <li>• To provide customer support.</li>

  <li>• To send important updates and notifications.</li>

  <li>• To prevent fraud and unauthorized activity.</li>

</ul>

</div>

{/* Sharing Information */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  4. Sharing Your Information
</h2>

<p className="mt-6 leading-8 text-slate-600">

  Door&Duty does not sell your personal information.
  We may share your information only with trusted
  service professionals, payment partners or when
  required by law.

</p>

</div>

{/* Data Security */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  5. Data Security
</h2>

<p className="mt-6 leading-8 text-slate-600">

  We use industry-standard security practices,
  encrypted communication and secure payment
  processing to protect your personal information.
  While no system is completely secure, we continuously
  improve our security measures.

</p>

</div>

{/* User Rights */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  6. Your Rights
</h2>

<ul className="mt-8 space-y-5 text-slate-600">

  <li>• Access your personal information.</li>

  <li>• Update or correct inaccurate information.</li>

  <li>• Request deletion of your account.</li>

  <li>• Withdraw marketing consent.</li>

  <li>• Contact us regarding your privacy concerns.</li>

</ul>

</div>

{/* Cookies */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  7. Cookies
</h2>

<p className="mt-6 leading-8 text-slate-600">

  Door&Duty uses cookies to improve your browsing
  experience, remember preferences and analyze
  website traffic. You can manage cookie settings
  through your browser.

</p>

</div>

{/* Contact */}

<div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-white shadow-xl">

<h2 className="text-3xl font-bold">

  Contact Us

</h2>

<p className="mt-6 leading-8 text-blue-100">

  If you have questions about this Privacy Policy,
  please contact us.

</p>

<div className="mt-8 space-y-3">

  <p>Email: hello@doorduty.com</p>

  <p>Phone: +91 98765 43210</p>

  <p>Address: New Delhi, India</p>

</div>

</div>

</div>

</section>

</main>

<Footer />

</>
);
}