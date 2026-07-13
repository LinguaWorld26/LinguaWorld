export type TravelChecklistItem = {
    id: string;
    title: string;
    description: string;
    category:
      | "Documents"
      | "Money"
      | "Health"
      | "Connectivity"
      | "Transportation"
      | "Accommodation"
      | "Language"
      | "Packing";
  };
  
  export const travelChecklistItems: TravelChecklistItem[] = [
    {
      id: "passport",
      title: "Passport is valid",
      description:
        "Check the expiration date and make sure it meets your destination’s entry requirements.",
      category: "Documents",
    },
    {
      id: "visa",
      title: "Visa requirements checked",
      description:
        "Confirm whether you need a visa, travel authorization, residence permit, or supporting documents.",
      category: "Documents",
    },
    {
      id: "document-copies",
      title: "Copies of important documents saved",
      description:
        "Keep digital and paper copies of your passport, visa, insurance, and reservations.",
      category: "Documents",
    },
    {
      id: "travel-budget",
      title: "Travel budget prepared",
      description:
        "Plan for lodging, food, transportation, activities, emergencies, and exchange-rate changes.",
      category: "Money",
    },
    {
      id: "payment-methods",
      title: "Payment methods ready",
      description:
        "Bring at least two ways to pay and notify your bank when necessary.",
      category: "Money",
    },
    {
      id: "emergency-funds",
      title: "Emergency funds available",
      description:
        "Keep part of your emergency money separate from your main wallet.",
      category: "Money",
    },
    {
      id: "travel-insurance",
      title: "Travel or health insurance confirmed",
      description:
        "Review what your policy covers and save the emergency contact details.",
      category: "Health",
    },
    {
      id: "medications",
      title: "Medications packed",
      description:
        "Bring enough medication for the trip and keep prescriptions or documentation when needed.",
      category: "Health",
    },
    {
      id: "health-needs",
      title: "Destination health guidance checked",
      description:
        "Review vaccination, food, water, weather, and local health recommendations.",
      category: "Health",
    },
    {
      id: "esim",
      title: "Phone and internet plan arranged",
      description:
        "Choose roaming, a local SIM, or an eSIM and confirm that your phone is unlocked.",
      category: "Connectivity",
    },
    {
      id: "offline-maps",
      title: "Offline maps downloaded",
      description:
        "Save maps, important addresses, tickets, and translation tools for offline access.",
      category: "Connectivity",
    },
    {
      id: "airport-transfer",
      title: "Airport arrival plan prepared",
      description:
        "Know how you will travel from the airport or station to your accommodation.",
      category: "Transportation",
    },
    {
      id: "local-transit",
      title: "Local transportation researched",
      description:
        "Check public transportation apps, passes, ticket rules, and operating hours.",
      category: "Transportation",
    },
    {
      id: "lodging-confirmed",
      title: "Accommodation confirmed",
      description:
        "Save the address, check-in instructions, contact details, and cancellation policy.",
      category: "Accommodation",
    },
    {
      id: "first-night",
      title: "First-night essentials planned",
      description:
        "Know where you will sleep, eat, and get basic supplies after arrival.",
      category: "Accommodation",
    },
    {
      id: "essential-phrases",
      title: "Essential phrases practiced",
      description:
        "Learn greetings, directions, numbers, food phrases, and how to ask for help.",
      category: "Language",
    },
    {
      id: "phrasebook-saved",
      title: "Phrasebook saved for quick access",
      description:
        "Keep important phrases available offline or bookmarked on your phone.",
      category: "Language",
    },
    {
      id: "packing-list",
      title: "Packing checklist completed",
      description:
        "Review clothing, weather needs, electronics, toiletries, and cultural expectations.",
      category: "Packing",
    },
    {
      id: "adapter",
      title: "Correct power adapter packed",
      description:
        "Confirm the destination’s plug type and voltage before leaving.",
      category: "Packing",
    },
    {
      id: "luggage-limits",
      title: "Airline baggage limits checked",
      description:
        "Review weight, size, carry-on, personal-item, and liquid restrictions.",
      category: "Packing",
    },
  ];