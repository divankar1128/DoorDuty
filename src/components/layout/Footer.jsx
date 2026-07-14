import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
  } from "lucide-react";
  
  import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  import { FaXTwitter } from "react-icons/fa6";
  
  export default function Footer() {
    return (
      <footer className="relative mt-32 bg-white">
  
        {/* Background Glow */}
  
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
  
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-70"></div>
  
        </div>
  
        <div className="relative mx-auto max-w-7xl px-6 pt-20">
  
          {/* Top Grid */}
  
          <div className="grid gap-14 lg:grid-cols-4">
  
            {/* Logo */}
  
            <div>
  
              <div className="flex items-center gap-3">
  
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-2xl font-bold text-white shadow-lg">
                  D
                </div>
  
                <div>
  
                  <h2 className="text-4xl font-extrabold text-slate-900">
                    Door<span className="text-blue-600">&</span>Duty
                  </h2>
  
                  <p className="text-sm text-slate-500">
                    Trusted Home Professionals
                  </p>
  
                </div>
  
              </div>
  
              <p className="mt-8 leading-8 text-slate-600">
  
                Door&Duty connects you with trusted,
                background-verified professionals for
                Cleaning, Plumbing, Electrical,
                Painting, AC Repair and more —
                delivered at your doorstep.
  
              </p>
  
              {/* Social */}
              <div className="mt-8 flex gap-4">

<Social
  href="https://instagram.com"
  icon={<FaInstagram size={20} />}
/>

<Social
  href="https://facebook.com"
  icon={<FaFacebookF size={18} />}
/>

<Social
  href="https://linkedin.com"
  icon={<FaLinkedinIn size={18} />}
/>

<Social
  href="https://x.com"
  icon={<FaXTwitter size={18} />}
/>

</div>
  
            </div>
  
            {/* Cities */}
  
            <div>
  
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-blue-700">
                Cities
              </h3>
  
              <div className="flex flex-wrap gap-3">
  
                <FooterLink text="Delhi" />
                <FooterLink text="Mumbai" />
                <FooterLink text="Bangalore" />
                <FooterLink text="Hyderabad" />
                <FooterLink text="Pune" />
                <FooterLink text="Noida" />
                <FooterLink text="Ghaziabad" />
                <FooterLink text="Gurugram" />
                <FooterLink text="Chandigarh" />
                <FooterLink text="Jaipur" />
                <FooterLink text="Lucknow" />
                <FooterLink text="Ahmedabad" />
  
              </div>
  
            </div>
                      {/* Services */}

          <div>

<h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-blue-700">
  Our Services
</h3>

<div className="flex flex-wrap gap-3">

  <FooterLink text="Home Cleaning" />
  <FooterLink text="Deep Cleaning" />
  <FooterLink text="Plumbing" />
  <FooterLink text="Electrician" />
  <FooterLink text="AC Repair" />
  <FooterLink text="Painting" />
  <FooterLink text="Carpenter" />
  <FooterLink text="Salon at Home" />
  <FooterLink text="Appliance Repair" />
  <FooterLink text="Pest Control" />
  <FooterLink text="Bathroom Cleaning" />
  <FooterLink text="Kitchen Cleaning" />

</div>

</div>

{/* Company + Contact */}

<div>

<h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-blue-700">
  Company
</h3>

<div className="space-y-4">

  <Link
    to="/about"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    About Us
  </Link>

  <Link
    to="/signup/professional"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    Become a Professional
  </Link>

  <Link
    to="/membership"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    Membership
  </Link>

  <Link
    to="/#faq"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    FAQs
  </Link>

  <Link
    to="/privacy-policy"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms"
    className="block text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
  >
    Terms & Conditions
  </Link>

</div>

{/* Contact */}

<div className="mt-10">

  <h3 className="mb-5 text-lg font-bold uppercase tracking-wider text-blue-700">
    Contact
  </h3>

  <div className="space-y-5">

    <div className="flex items-start gap-3">

      <Phone
        size={18}
        className="mt-1 text-blue-600"
      />

      <span className="text-slate-600">
        +91 98765 43210
      </span>

    </div>

    <div className="flex items-start gap-3">

      <Mail
        size={18}
        className="mt-1 text-blue-600"
      />

      <span className="text-slate-600">
        hello@doorduty.com
      </span>

    </div>

    <div className="flex items-start gap-3">

      <MapPin
        size={18}
        className="mt-1 text-blue-600"
      />

      <span className="text-slate-600 leading-7">

        New Delhi,
        India

      </span>

    </div>

  </div>

</div>

</div>

</div>

{/* Divider */}

<div className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

{/* CTA Card */}

<div className="mt-16 rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-center text-white shadow-[0_25px_70px_rgba(37,99,235,.25)]">

<h2 className="text-4xl font-bold">

Ready to Book Your Next Service?

</h2>

<p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">

Trusted professionals for Cleaning,
Plumbing, Electrical, Painting,
AC Repair and more — delivered
to your doorstep.

</p>

<div className="mt-8 flex flex-wrap justify-center gap-5">
<Link
  to="/"
  className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book Now
</Link>

<Link
  to="/support"
  className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white/10"
>
  Contact Us
</Link>
</div>

</div>
        {/* Bottom Bar */}

        <div className="mt-16 rounded-t-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-8 py-8 text-white">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <p className="text-sm text-blue-100">

              © {new Date().getFullYear()} Door&Duty. All rights reserved.

            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">

            <Link
  to="/privacy-policy"
  className="transition hover:text-white"
>
  Privacy Policy
</Link>

<Link
  to="/terms"
  className="transition hover:text-white"
>
  Terms & Conditions
</Link>

<Link
  to="/refund-policy"
  className="transition hover:text-white"
>
  Refund Policy
</Link>

<Link
  to="/cookies"
  className="transition hover:text-white"
>
  Cookies
</Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

/* ----------------------------------
          Reusable Components
----------------------------------- */

function FooterLink({ text }) {
  return (
    <button
      className="
        rounded-full
        border
        border-slate-200
        bg-slate-50
        px-4
        py-2
        text-sm
        text-slate-700
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:bg-blue-50
        hover:text-blue-700
      "
    >
      {text}
    </button>
  );
}

function SimpleLink({ text }) {
  return (
    <a
      href="#"
      className="
        block
        text-slate-600
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-blue-600
      "
    >
      {text}
    </a>
  );
}

function Social({ icon }) {
  return (
    <button
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-slate-200
        bg-white
        text-slate-600
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-300
        hover:bg-blue-600
        hover:text-white
        hover:shadow-xl
      "
    >
      {icon}
    </button>
  );
}