const services = [
    {
      id: 1,
      slug: "cleaning",
  
      title: "Home Cleaning",
  
      shortTitle: "Cleaning",
  
      subtitle:
        "Professional home cleaning by trained and verified experts.",
  
      price: "₹499",
  
      duration: "2 - 4 Hours",
  
      rating: 4.9,
  
      reviews: 2487,
  
      heroImage:
        "/images/services/cleaning-hero.jpg",
  
      coverImage:
        "/images/services/cleaning-cover.jpg",
  
      badge: "Most Booked",
  
      color: "blue",
  
      description:
        "Experience a spotless home with our premium home cleaning service using professional equipment and eco-friendly products.",
  
      benefits: [
        "Verified Professionals",
        "Safe Cleaning Products",
        "Same Day Booking",
        "Affordable Pricing",
        "100% Satisfaction",
        "Background Verified Staff",
      ],
  
      includes: [
        "Bedroom Cleaning",
        "Living Room Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "Dust Removal",
        "Floor Mopping",
        "Furniture Wiping",
        "Glass Cleaning",
      ],
  
      pricing: [
        {
          name: "Basic",
          price: "₹499",
          duration: "2 Hours",
        },
        {
          name: "Standard",
          price: "₹999",
          duration: "4 Hours",
        },
        {
          name: "Premium",
          price: "₹1499",
          duration: "6 Hours",
        },
      ],
  
      faqs: [
        {
          question:
            "How long does home cleaning take?",
  
          answer:
            "Usually between 2 and 6 hours depending on the package.",
        },
        {
          question:
            "Do professionals bring cleaning materials?",
  
          answer:
            "Yes. Our professionals carry all required equipment and chemicals.",
        },
        {
          question:
            "Can I reschedule my booking?",
  
          answer:
            "Yes, bookings can be rescheduled before the scheduled time.",
        },
      ],
    },
  
    {
      id: 2,
  
      slug: "plumbing",
  
      title: "Plumbing Services",
  
      shortTitle: "Plumbing",
  
      subtitle:
        "Professional plumbing solutions for every home.",
  
      price: "₹299",
  
      duration: "30 - 90 Minutes",
  
      rating: 4.8,
  
      reviews: 1925,
  
      heroImage:
        "/images/services/plumbing-hero.jpg",
  
      coverImage:
        "/images/services/plumbing-cover.jpg",
  
      badge: "Popular",
  
      color: "cyan",
  
      description:
        "From leaking taps to complete bathroom fittings, our expert plumbers are ready to help.",
  
      benefits: [
        "Verified Plumbers",
        "Quick Response",
        "Quality Work",
        "Transparent Pricing",
        "Warranty Included",
      ],
  
      includes: [
        "Tap Repair",
        "Leak Fixing",
        "Pipe Installation",
        "Toilet Repair",
        "Bathroom Fittings",
        "Kitchen Plumbing",
      ],
  
      pricing: [
        {
          name: "Inspection",
          price: "₹299",
          duration: "30 Min",
        },
        {
          name: "Standard Repair",
          price: "₹699",
          duration: "1 Hour",
        },
        {
          name: "Complete Service",
          price: "₹1299",
          duration: "2 Hours",
        },
      ],
  
      faqs: [
        {
          question:
            "Do you provide emergency plumbing?",
  
          answer:
            "Yes, emergency services are available in selected cities.",
        },
        {
          question:
            "Are spare parts included?",
  
          answer:
            "No. Spare parts are charged separately.",
        },
        
      ],
    },
    {
        id: 3,
    
        slug: "electrician",
    
        title: "Electrician Services",
    
        shortTitle: "Electrician",
    
        subtitle: "Certified electricians for all electrical needs.",
    
        price: "₹299",
    
        duration: "30 - 90 Minutes",
    
        rating: 4.8,
    
        reviews: 1754,
    
        heroImage: "/images/services/electrician-hero.jpg",
    
        coverImage: "/images/services/electrician-cover.jpg",
    
        badge: "Fast Service",
    
        color: "yellow",
    
        description:
          "Professional electrical repairs, installations, and maintenance by experienced electricians.",
    
        benefits: [
          "Licensed Electricians",
          "Safe Installation",
          "Fast Service",
          "Affordable Pricing",
          "Service Warranty",
        ],
    
        includes: [
          "Switch Repair",
          "Fan Installation",
          "Light Installation",
          "MCB Replacement",
          "Wiring",
          "Power Socket Repair",
        ],
    
        pricing: [
          {
            name: "Inspection",
            price: "₹299",
            duration: "30 Min",
          },
          {
            name: "Standard",
            price: "₹799",
            duration: "1 Hour",
          },
          {
            name: "Premium",
            price: "₹1499",
            duration: "2 Hours",
          },
        ],
    
        faqs: [
          {
            question: "Do you repair wiring?",
            answer: "Yes, complete wiring repairs and installations are available.",
          },
        ],
      },
    
      {
        id: 4,
    
        slug: "ac-repair",
    
        title: "AC Repair",
    
        shortTitle: "AC Repair",
    
        subtitle:
          "Expert AC servicing, repair and gas refill.",
    
        price: "₹499",
    
        duration: "1 - 2 Hours",
    
        rating: 4.9,
    
        reviews: 3125,
    
        heroImage: "/images/services/ac-hero.jpg",
    
        coverImage: "/images/services/ac-cover.jpg",
    
        badge: "Top Rated",
    
        color: "sky",
    
        description:
          "Professional AC technicians for servicing, installation and repair.",
    
        benefits: [
          "Experienced Technicians",
          "Gas Refill",
          "Installation",
          "90-Day Warranty",
          "Doorstep Service",
        ],
    
        includes: [
          "AC Service",
          "AC Repair",
          "Gas Charging",
          "Installation",
          "Uninstallation",
          "Cooling Check",
        ],
    
        pricing: [
          {
            name: "Service",
            price: "₹499",
            duration: "45 Min",
          },
          {
            name: "Repair",
            price: "₹999",
            duration: "90 Min",
          },
          {
            name: "Premium",
            price: "₹1799",
            duration: "2 Hours",
          },
        ],
    
        faqs: [
          {
            question: "Do you refill gas?",
            answer: "Yes, gas refill is available after inspection.",
          },
        ],
      },
    
      {
        id: 5,
    
        slug: "beauty",
    
        title: "Beauty At Home",
    
        shortTitle: "Beauty",
    
        subtitle:
          "Salon-quality beauty services at your home.",
    
        price: "₹699",
    
        duration: "1 - 3 Hours",
    
        rating: 4.9,
    
        reviews: 2650,
    
        heroImage: "/images/services/beauty-hero.jpg",
    
        coverImage: "/images/services/beauty-cover.jpg",
    
        badge: "Women's Choice",
    
        color: "pink",
    
        description:
          "Professional beauticians providing salon services at home.",
    
        benefits: [
          "Certified Beauticians",
          "Premium Products",
          "Home Service",
          "Affordable Packages",
        ],
    
        includes: [
          "Facial",
          "Waxing",
          "Hair Spa",
          "Hair Cut",
          "Manicure",
          "Pedicure",
        ],
    
        pricing: [
          {
            name: "Basic",
            price: "₹699",
            duration: "60 Min",
          },
          {
            name: "Premium",
            price: "₹1499",
            duration: "2 Hours",
          },
        ],
    
        faqs: [
          {
            question: "Do professionals bring products?",
            answer: "Yes, all products are carried by our beauticians.",
          },
        ],
      },
    
      {
        id: 6,
    
        slug: "carpentry",
    
        title: "Carpentry",
    
        shortTitle: "Carpentry",
    
        subtitle:
          "Furniture repair and carpentry solutions.",
    
        price: "₹399",
    
        duration: "1 - 2 Hours",
    
        rating: 4.8,
    
        reviews: 1495,
    
        heroImage: "/images/services/carpentry-hero.jpg",
    
        coverImage: "/images/services/carpentry-cover.jpg",
    
        badge: "Reliable",
    
        color: "orange",
    
        description:
          "Professional carpenters for repair, installation and furniture work.",
    
        benefits: [
          "Verified Carpenters",
          "Quick Service",
          "Furniture Repair",
          "Installation",
        ],
    
        includes: [
          "Door Repair",
          "Furniture Assembly",
          "Wardrobe Repair",
          "Table Repair",
          "Shelf Installation",
        ],
    
        pricing: [
          {
            name: "Visit",
            price: "₹399",
            duration: "45 Min",
          },
          {
            name: "Repair",
            price: "₹899",
            duration: "90 Min",
          },
        ],
    
        faqs: [
          {
            question: "Can you assemble furniture?",
            answer: "Yes, we assemble all major furniture brands.",
          },
        ],
      },
    
      {
        id: 7,
    
        slug: "painting",
    
        title: "Painting",
    
        shortTitle: "Painting",
    
        subtitle:
          "Professional interior & exterior painting services.",
    
        price: "₹999",
    
        duration: "Depends on Area",
    
        rating: 4.9,
    
        reviews: 1124,
    
        heroImage: "/images/services/painting-hero.jpg",
    
        coverImage: "/images/services/painting-cover.jpg",
    
        badge: "Premium",
    
        color: "emerald",
    
        description:
          "Complete home painting solutions with premium paints.",
    
        benefits: [
          "Premium Paint",
          "Expert Painters",
          "Clean Finish",
          "Warranty",
        ],
    
        includes: [
          "Interior Painting",
          "Exterior Painting",
          "Wall Putty",
          "Texture Paint",
          "Waterproofing",
        ],
    
        pricing: [
          {
            name: "Inspection",
            price: "Free",
            duration: "30 Min",
          },
          {
            name: "Quotation",
            price: "Custom",
            duration: "Depends",
          },
        ],
    
        faqs: [
            {
              question: "Is paint included?",
              answer: "Yes, depending on the selected package.",
            },
          ],
        }
      
      ];
      
      export default services;