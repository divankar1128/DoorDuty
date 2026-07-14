import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Terms() {
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
              Terms & Conditions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

              These Terms & Conditions govern your use of Door&Duty's
              website, mobile application and services. By using our
              platform, you agree to these terms.

            </p>

            <p className="mt-6 text-slate-500">
              Last Updated: July 2026
            </p>

          </div>

        </section>

        {/* ================= CONTENT ================= */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-4xl space-y-12 px-6">

            {/* Acceptance */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                By accessing or using Door&Duty, you confirm that
                you have read, understood and agreed to these
                Terms & Conditions.

              </p>

            </div>

            {/* Eligibility */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                2. Eligibility
              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                You must be at least 18 years old or have the
                permission of a parent or legal guardian to use
                Door&Duty services.

              </p>

            </div>

            {/* User Responsibilities */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                3. User Responsibilities
              </h2>

              <ul className="mt-8 space-y-5 text-slate-600">

                <li>• Provide accurate information.</li>

                <li>• Maintain account security.</li>

                <li>• Respect service professionals.</li>

                <li>• Make payments on time.</li>

                <li>• Avoid fraudulent or illegal activity.</li>

              </ul>

            </div>

            {/* Service Bookings */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                4. Service Bookings
              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                Booking confirmations depend on professional
                availability. Door&Duty reserves the right to
                reschedule or cancel bookings when necessary.

              </p>

            </div>
                        {/* Payments */}

                        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  5. Payments
</h2>

<p className="mt-6 leading-8 text-slate-600">

  All payments must be made through the payment methods
  provided by Door&Duty. Prices displayed at the time of
  booking are subject to applicable taxes and charges.

</p>

</div>

{/* Cancellation & Refund */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  6. Cancellation & Refunds
</h2>

<p className="mt-6 leading-8 text-slate-600">

  Customers may cancel bookings according to our Refund
  Policy. Refund eligibility depends on the cancellation
  time, service status and payment method used.

</p>

</div>

{/* Limitation of Liability */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  7. Limitation of Liability
</h2>

<p className="mt-6 leading-8 text-slate-600">

  Door&Duty acts as a platform connecting customers with
  independent professionals. While we verify professionals,
  we are not liable for indirect, incidental or consequential
  damages arising from services provided, except where
  required by applicable law.

</p>

</div>

{/* Intellectual Property */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  8. Intellectual Property
</h2>

<p className="mt-6 leading-8 text-slate-600">

  All content on Door&Duty, including logos, branding,
  text, graphics and software, is owned by Door&Duty or
  its licensors and is protected by applicable intellectual
  property laws.

</p>

</div>

{/* Changes to Terms */}

<div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

<h2 className="text-3xl font-bold text-slate-900">
  9. Changes to These Terms
</h2>

<p className="mt-6 leading-8 text-slate-600">

  We may update these Terms & Conditions from time to time.
  Any changes will be posted on this page with an updated
  revision date. Continued use of Door&Duty after updates
  constitutes acceptance of the revised terms.

</p>

</div>

{/* Contact */}

<div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-white shadow-xl">

<h2 className="text-3xl font-bold">
  Contact Us
</h2>

<p className="mt-6 leading-8 text-blue-100">

  If you have any questions regarding these Terms &
  Conditions, please contact our support team.

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