import {
    CalendarDays,
    CreditCard,
    ShieldCheck,
    UserCheck,
    PhoneCall,
    CircleHelp,
  } from "lucide-react";
  
  const faqData = [
    {
      id: 1,
      title: "Booking",
      icon: CalendarDays,
      color: "from-blue-500 to-blue-700",
      question: "How do I book a service?",
      answer:
        "Choose your preferred service, select your location, pick a suitable date & time, and confirm your booking. Our professional will arrive at your doorstep.",
    },
  
    {
      id: 2,
      title: "Payments",
      icon: CreditCard,
      color: "from-indigo-500 to-purple-600",
      question: "Which payment methods are accepted?",
      answer:
        "We accept UPI, Debit Cards, Credit Cards, Net Banking, Wallets and Cash after service completion.",
    },
  
    {
      id: 3,
      title: "Verified",
      icon: UserCheck,
      color: "from-cyan-500 to-sky-600",
      question: "Are professionals verified?",
      answer:
        "Yes. Every Door&Duty professional goes through identity verification, background checks and skill assessments before joining.",
    },
  
    {
      id: 4,
      title: "Warranty",
      icon: ShieldCheck,
      color: "from-green-500 to-emerald-600",
      question: "Do services include warranty?",
      answer:
        "Most premium services include a warranty period. If any issue occurs, we'll resolve it free of charge within the warranty duration.",
    },
  
    {
      id: 5,
      title: "Support",
      icon: PhoneCall,
      color: "from-orange-500 to-red-500",
      question: "How can I contact support?",
      answer:
        "Our support team is available every day through live chat, phone and email to help with bookings or service-related questions.",
    },
  
    {
      id: 6,
      title: "Help",
      icon: CircleHelp,
      color: "from-pink-500 to-fuchsia-600",
      question: "Need more help?",
      answer:
        "If your question isn't listed here, simply contact our support team and we'll guide you personally.",
    },
  ];
  
  export default faqData;