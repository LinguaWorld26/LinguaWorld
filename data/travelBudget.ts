export type TravelStyle = "budget" | "standard" | "comfort";

export type CountryBudget = {
  countryId: string;
  countryName: string;
  currency: string;
  dailyCosts: Record<
    TravelStyle,
    {
      lodging: number;
      food: number;
      transportation: number;
      activities: number;
    }
  >;
};

export const travelBudgets: Record<string, CountryBudget> = {
  france: {
    countryId: "france",
    countryName: "France",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 55,
        food: 30,
        transportation: 10,
        activities: 18,
      },
      standard: {
        lodging: 120,
        food: 55,
        transportation: 16,
        activities: 35,
      },
      comfort: {
        lodging: 220,
        food: 90,
        transportation: 30,
        activities: 65,
      },
    },
  },

  spain: {
    countryId: "spain",
    countryName: "Spain",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 45,
        food: 28,
        transportation: 8,
        activities: 15,
      },
      standard: {
        lodging: 100,
        food: 48,
        transportation: 14,
        activities: 30,
      },
      comfort: {
        lodging: 190,
        food: 80,
        transportation: 26,
        activities: 55,
      },
    },
  },

  italy: {
    countryId: "italy",
    countryName: "Italy",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 50,
        food: 30,
        transportation: 10,
        activities: 20,
      },
      standard: {
        lodging: 115,
        food: 55,
        transportation: 18,
        activities: 38,
      },
      comfort: {
        lodging: 215,
        food: 90,
        transportation: 32,
        activities: 68,
      },
    },
  },

  germany: {
    countryId: "germany",
    countryName: "Germany",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 50,
        food: 32,
        transportation: 11,
        activities: 16,
      },
      standard: {
        lodging: 110,
        food: 55,
        transportation: 18,
        activities: 32,
      },
      comfort: {
        lodging: 205,
        food: 88,
        transportation: 32,
        activities: 60,
      },
    },
  },

  russia: {
    countryId: "russia",
    countryName: "Russia",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 35,
        food: 22,
        transportation: 6,
        activities: 12,
      },
      standard: {
        lodging: 80,
        food: 42,
        transportation: 12,
        activities: 25,
      },
      comfort: {
        lodging: 160,
        food: 70,
        transportation: 24,
        activities: 48,
      },
    },
  },

  japan: {
    countryId: "japan",
    countryName: "Japan",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 50,
        food: 28,
        transportation: 14,
        activities: 18,
      },
      standard: {
        lodging: 115,
        food: 52,
        transportation: 25,
        activities: 35,
      },
      comfort: {
        lodging: 225,
        food: 90,
        transportation: 45,
        activities: 70,
      },
    },
  },

  egypt: {
    countryId: "egypt",
    countryName: "Egypt",
    currency: "USD",
    dailyCosts: {
      budget: {
        lodging: 25,
        food: 16,
        transportation: 6,
        activities: 15,
      },
      standard: {
        lodging: 65,
        food: 32,
        transportation: 12,
        activities: 30,
      },
      comfort: {
        lodging: 145,
        food: 60,
        transportation: 25,
        activities: 58,
      },
    },
  },
};