export const productsData = [
  {
    id: 1,
    name: "Aloe Vera",
    price: "15",
    category: "Succulents",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 10,
    images: ["aloe-vera", "aloe-vera-1", "aloe-vera-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description: "Aloe Vera is a succulent plant species of the genus Aloe.",
    scientificName: "Aloe barbadensis miller",
    origin: "Arabian Peninsula",
    careInstructions: "Water every 3 weeks, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "John Doe",
          profileImage: "https://source.unsplash.com/random/100x100?user-1",
        },
        rating: 5,
        comment: "Great plant!",
      },
      {
        user: {
          name: "Jane Smith",
          profileImage: "https://source.unsplash.com/random/100x100?user-2",
        },
        rating: 4,
        comment: "Very healthy!",
      },
    ],
    relatedProducts: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Bonsai Tree",
    price: "50",
    category: "Tropical",
    seller: {
      name: "Miniature Forest",
      profileImage: "https://source.unsplash.com/random/100x100?profile-2",
    },
    available: 5,
    images: ["bonsai", "bonsai-1", "bonsai-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 5-7 business days",
    description:
      "Bonsai is a Japanese art form using cultivation techniques to produce small trees.",
    scientificName: "Ficus retusa",
    origin: "Japan",
    careInstructions:
      "Water regularly, keep in humid conditions, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Alice Johnson",
          profileImage: "https://source.unsplash.com/random/100x100?user-3",
        },
        rating: 5,
        comment: "Beautiful tree!",
      },
    ],
    relatedProducts: [1, 3, 5, 7],
  },
  {
    id: 3,
    name: "Orchid",
    price: "25",
    category: "Tropical",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 8,
    images: ["orchid", "orchid-1", "orchid-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Orchids are a diverse and widespread family of flowering plants.",
    scientificName: "Orchidaceae",
    origin: "Global",
    careInstructions: "Water weekly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Michael Brown",
          profileImage: "https://source.unsplash.com/random/100x100?user-4",
        },
        rating: 4,
        comment: "Lovely flowers!",
      },
    ],
    relatedProducts: [2, 4, 6, 8],
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    price: "30",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 15,
    images: ["monstera", "monstera-1", "monstera-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "Monstera deliciosa is a species of flowering plant native to tropical forests.",
    scientificName: "Monstera deliciosa",
    origin: "Central America",
    careInstructions:
      "Water every 1-2 weeks, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Emily Davis",
          profileImage: "https://source.unsplash.com/random/100x100?user-5",
        },
        rating: 5,
        comment: "Amazing plant!",
      },
    ],
    relatedProducts: [1, 3, 5, 7],
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    price: "50",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 7,
    images: ["fiddle-leaf", "fiddle-leaf-1", "fiddle-leaf-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 4-6 business days",
    description:
      "Fiddle Leaf Fig is a species of flowering plant in the mulberry and fig family Moraceae.",
    scientificName: "Ficus lyrata",
    origin: "Western Africa",
    careInstructions:
      "Water when the top inch of soil is dry, provide bright, indirect light.",
    reviews: [
      {
        user: {
          name: "Sarah Wilson",
          profileImage: "https://source.unsplash.com/random/100x100?user-6",
        },
        rating: 5,
        comment: "Gorgeous!",
      },
    ],
    relatedProducts: [2, 3, 4, 6],
  },
  {
    id: 6,
    name: "Snake Plant",
    price: "25",
    category: "Succulents",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 12,
    images: ["snake-plant", "snake-plant-1", "snake-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Snake Plant is a species of flowering plant in the family Asparagaceae.",
    scientificName: "Sansevieria trifasciata",
    origin: "West Africa",
    careInstructions: "Water every 2-8 weeks, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "David Martinez",
          profileImage: "https://source.unsplash.com/random/100x100?user-7",
        },
        rating: 4,
        comment: "Very easy to care for.",
      },
    ],
    relatedProducts: [1, 3, 5, 7],
  },
  {
    id: 7,
    name: "Bird of Paradise",
    price: "40",
    category: "Tropical",
    seller: {
      name: "Tropical Oasis",
      profileImage: "https://source.unsplash.com/random/100x100?profile-6",
    },
    available: 6,
    images: [
      "bird-of-paradise",
      "bird-of-paradise-1",
      "bird-of-paradise-2",
    ].map((image) => `/images/plants/${image}.jpg`),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 5-7 business days",
    description:
      "Bird of Paradise is a genus of flowering plants native to South Africa.",
    scientificName: "Strelitzia reginae",
    origin: "South Africa",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Chris Lee",
          profileImage: "https://source.unsplash.com/random/100x100?user-8",
        },
        rating: 5,
        comment: "Stunning plant!",
      },
    ],
    relatedProducts: [4, 5, 6, 12],
  },
  {
    id: 8,
    name: "Anthurium",
    price: "35",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 9,
    images: ["anthurium", "anthurium-1", "anthurium-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "Anthurium is a genus of about 1,000 species of flowering plants.",
    scientificName: "Anthurium andraeanum",
    origin: "Colombia and Ecuador",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Kimberly Johnson",
          profileImage: "https://source.unsplash.com/random/100x100?user-9",
        },
        rating: 4,
        comment: "Beautiful flowers.",
      },
    ],
    relatedProducts: [2, 4, 6, 8],
  },
  {
    id: 9,
    name: "Philodendron",
    price: "28",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 11,
    images: ["philodendron", "philodendron-1", "philodendron-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Philodendron is a large genus of flowering plants in the family Araceae.",
    scientificName: "Philodendron hederaceum",
    origin: "Central and South America",
    careInstructions: "Water every 1-2 weeks, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "George Brown",
          profileImage: "https://source.unsplash.com/random/100x100?user-10",
        },
        rating: 5,
        comment: "Very easy to care for.",
      },
    ],
    relatedProducts: [1, 3, 6, 9],
  },
  {
    id: 10,
    name: "ZZ Plant",
    price: "22",
    category: "Succulents",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 10,
    images: ["zz-plant", "zz-plant-1", "zz-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "ZZ Plant is a species of flowering plant in the family Araceae.",
    scientificName: "Zamioculcas zamiifolia",
    origin: "Eastern Africa",
    careInstructions: "Water every 2-3 weeks, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Rebecca White",
          profileImage: "https://source.unsplash.com/random/100x100?user-11",
        },
        rating: 4,
        comment: "Very resilient plant.",
      },
    ],
    relatedProducts: [2, 4, 5, 10],
  },
  {
    id: 11,
    name: "Rubber Plant",
    price: "27",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 14,
    images: ["rubber-plant", "rubber-plant-1", "rubber-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Rubber Plant is a species of flowering plant in the family Moraceae.",
    scientificName: "Ficus elastica",
    origin: "South Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide bright, indirect light.",
    reviews: [
      {
        user: {
          name: "Emma Thompson",
          profileImage: "https://source.unsplash.com/random/100x100?user-12",
        },
        rating: 5,
        comment: "Very attractive plant.",
      },
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 12,
    name: "Pothos",
    price: "18",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 20,
    images: ["pothos", "pothos-1", "pothos-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Pothos is a genus of flowering plants in the family Araceae.",
    scientificName: "Epipremnum aureum",
    origin: "Mo'orea",
    careInstructions: "Water every 1-2 weeks, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Oliver Scott",
          profileImage: "https://source.unsplash.com/random/100x100?user-13",
        },
        rating: 5,
        comment: "Grows very quickly!",
      },
    ],
    relatedProducts: [2, 4, 6],
  },
  {
    id: 13,
    name: "Peace Lily",
    price: "20",
    category: "Tropical",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 13,
    images: ["peace-lily", "peace-lily-1", "peace-lily-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Peace Lily is a genus of flowering plants in the family Araceae.",
    scientificName: "Spathiphyllum wallisii",
    origin: "Central and South America",
    careInstructions: "Water weekly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Sophia Miller",
          profileImage: "https://source.unsplash.com/random/100x100?user-14",
        },
        rating: 5,
        comment: "Lovely flowers!",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 14,
    name: "Cactus",
    price: "12",
    category: "Succulents",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 22,
    images: ["cactus", "cactus-1", "cactus-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Cactus is a member of the plant family Cactaceae.",
    scientificName: "Cactaceae",
    origin: "Americas",
    careInstructions: "Water every 2-8 weeks, provide direct sunlight.",
    reviews: [
      {
        user: {
          name: "Noah Williams",
          profileImage: "https://source.unsplash.com/random/100x100?user-15",
        },
        rating: 4,
        comment: "Very hardy plant.",
      },
    ],
    relatedProducts: [2, 4, 6],
  },
  {
    id: 15,
    name: "Calathea",
    price: "32",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 7,
    images: ["calathea", "calathea-1", "calathea-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Calathea is a genus of plants belonging to the family Marantaceae.",
    scientificName: "Calathea orbifolia",
    origin: "South America",
    careInstructions:
      "Water when the top inch of soil is dry, provide bright, indirect light.",
    reviews: [
      {
        user: {
          name: "Mia Clark",
          profileImage: "https://source.unsplash.com/random/100x100?user-16",
        },
        rating: 5,
        comment: "Gorgeous leaves!",
      },
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 16,
    name: "Chinese Evergreen",
    price: "24",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 16,
    images: [
      "chinese-evergreen",
      "chinese-evergreen-1",
      "chinese-evergreen-2",
    ].map((image) => `/images/plants/${image}.jpg`),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Chinese Evergreen is a genus of flowering plants in the arum family, Araceae.",
    scientificName: "Aglaonema",
    origin: "Southeast Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "William Harris",
          profileImage: "https://source.unsplash.com/random/100x100?user-17",
        },
        rating: 5,
        comment: "Very hardy plant.",
      },
    ],
    relatedProducts: [2, 4, 6],
  },
  {
    id: 17,
    name: "Ficus",
    price: "38",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 9,
    images: ["ficus", "ficus-1", "ficus-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes, and hemiepiphytes.",
    scientificName: "Ficus benjamina",
    origin: "South and Southeast Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide bright, indirect light.",
    reviews: [
      {
        user: {
          name: "James Robinson",
          profileImage: "https://source.unsplash.com/random/100x100?user-18",
        },
        rating: 4,
        comment: "Lovely tree.",
      },
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 18,
    name: "Spider Plant",
    price: "15",
    category: "Tropical",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 18,
    images: ["spider-plant", "spider-plant-1", "spider-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description: "Spider Plant is a species of perennial flowering plant.",
    scientificName: "Chlorophytum comosum",
    origin: "South Africa",
    careInstructions:
      "Water when the top inch of soil is dry, provide bright, indirect light.",
    reviews: [
      {
        user: {
          name: "Ava Martinez",
          profileImage: "https://source.unsplash.com/random/100x100?user-19",
        },
        rating: 5,
        comment: "Grows very fast.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 19,
    name: "Jade Plant",
    price: "25",
    category: "Succulents",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 14,
    images: ["jade-plant", "jade-plant-1", "jade-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Jade Plant is a succulent plant native to South Africa and Mozambique.",
    scientificName: "Crassula ovata",
    origin: "South Africa",
    careInstructions:
      "Water when the soil is completely dry, provide direct sunlight.",
    reviews: [
      {
        user: {
          name: "Amelia Garcia",
          profileImage: "https://source.unsplash.com/random/100x100?user-20",
        },
        rating: 5,
        comment: "Very beautiful plant.",
      },
    ],
    relatedProducts: [1, 3, 6],
  },
  {
    id: 20,
    name: "Bird's Nest Fern",
    price: "28",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 8,
    images: ["birds-nest-fern", "birds-nest-fern-1", "birds-nest-fern-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "Bird's Nest Fern is a species of epiphytic fern in the family Aspleniaceae.",
    scientificName: "Asplenium nidus",
    origin: "Australia, Southeast Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Isabella Harris",
          profileImage: "https://source.unsplash.com/random/100x100?user-21",
        },
        rating: 4,
        comment: "Lovely leaves.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 21,
    name: "Parlor Palm",
    price: "22",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 12,
    images: ["parlor-palm", "parlor-palm-1", "parlor-palm-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description: "Parlor Palm is a species of small palm tree.",
    scientificName: "Chamaedorea elegans",
    origin: "Mexico, Guatemala",
    careInstructions:
      "Water when the top inch of soil is dry, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Lucas Clark",
          profileImage: "https://source.unsplash.com/random/100x100?user-22",
        },
        rating: 5,
        comment: "Very easy to care for.",
      },
    ],
    relatedProducts: [1, 3, 5],
  },
  {
    id: 22,
    name: "Money Tree",
    price: "45",
    category: "Tropical",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 5,
    images: ["money-tree", "money-tree-1", "money-tree-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description: "Money Tree is a species of tree native to tropical regions.",
    scientificName: "Pachira aquatica",
    origin: "Central and South America",
    careInstructions:
      "Water when the top inch of soil is dry, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Jack Wilson",
          profileImage: "https://source.unsplash.com/random/100x100?user-23",
        },
        rating: 4,
        comment: "Beautiful tree.",
      },
    ],
    relatedProducts: [2, 4, 6],
  },
  {
    id: 23,
    name: "Hibiscus",
    price: "35",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 12,
    images: ["hibiscus", "hibiscus-1", "hibiscus-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Hibiscus is a genus of flowering plants in the mallow family, Malvaceae.",
    scientificName: "Hibiscus rosa-sinensis",
    origin: "East Asia",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Aiden Walker",
          profileImage: "https://source.unsplash.com/random/100x100?user-24",
        },
        rating: 5,
        comment: "Beautiful flowers.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 24,
    name: "Papaya Plant",
    price: "30",
    category: "Tropical",
    seller: {
      name: "Tropical Oasis",
      profileImage: "https://source.unsplash.com/random/100x100?profile-6",
    },
    available: 7,
    images: ["papaya-plant", "papaya-plant-1", "papaya-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description: "Papaya is the plant species in the genus Carica.",
    scientificName: "Carica papaya",
    origin: "Central America",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Samuel Young",
          profileImage: "https://source.unsplash.com/random/100x100?user-25",
        },
        rating: 5,
        comment: "Grows very fast.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 25,
    name: "Mango Plant",
    price: "40",
    category: "Tropical",
    seller: {
      name: "Tropical Oasis",
      profileImage: "https://source.unsplash.com/random/100x100?profile-6",
    },
    available: 5,
    images: ["mango-plant", "mango-plant-1", "mango-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "Mango is a tropical stone fruit, produced by the tree Mangifera indica.",
    scientificName: "Mangifera indica",
    origin: "South Asia",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Henry Allen",
          profileImage: "https://source.unsplash.com/random/100x100?user-26",
        },
        rating: 5,
        comment: "Very healthy plant.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 26,
    name: "Ginger Plant",
    price: "22",
    category: "Tropical",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 11,
    images: ["ginger-plant", "ginger-plant-1", "ginger-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice.",
    scientificName: "Zingiber officinale",
    origin: "Southeast Asia",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Grace King",
          profileImage: "https://source.unsplash.com/random/100x100?user-27",
        },
        rating: 5,
        comment: "Very aromatic plant.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 27,
    name: "Dragon Tree",
    price: "35",
    category: "Tropical",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 9,
    images: ["dragon-tree", "dragon-tree-1", "dragon-tree-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Dragon Tree is a species of flowering plant in the family Asparagaceae.",
    scientificName: "Dracaena marginata",
    origin: "Madagascar",
    careInstructions:
      "Water when the top inch of soil is dry, provide indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Ethan Wright",
          profileImage: "https://source.unsplash.com/random/100x100?user-28",
        },
        rating: 5,
        comment: "Very exotic plant.",
      },
    ],
    relatedProducts: [2, 4, 6],
  },
  {
    id: 28,
    name: "Banana Plant",
    price: "50",
    category: "Tropical",
    seller: {
      name: "Tropical Oasis",
      profileImage: "https://source.unsplash.com/random/100x100?profile-6",
    },
    available: 6,
    images: ["banana-plant", "banana-plant-1", "banana-plant-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 3-5 business days",
    description:
      "Banana is the common name for the herbaceous plants of the genus Musa.",
    scientificName: "Musa",
    origin: "Southeast Asia",
    careInstructions: "Water regularly, provide bright, indirect sunlight.",
    reviews: [
      {
        user: {
          name: "Mason Baker",
          profileImage: "https://source.unsplash.com/random/100x100?user-29",
        },
        rating: 5,
        comment: "Grows very fast.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 29,
    name: "Lavender",
    price: "15",
    category: "Herbs",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 18,
    images: ["lavender", "lavender-1", "lavender-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Lavender is a genus of 47 known species of flowering plants in the mint family, Lamiaceae.",
    scientificName: "Lavandula",
    origin: "Mediterranean",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Abigail Turner",
          profileImage: "https://source.unsplash.com/random/100x100?user-30",
        },
        rating: 5,
        comment: "Very aromatic plant.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 30,
    name: "Rosemary",
    price: "18",
    category: "Herbs",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 16,
    images: ["rosemary", "rosemary-1", "rosemary-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 2-4 business days",
    description:
      "Rosemary is a woody, perennial herb with fragrant evergreen needle-like leaves.",
    scientificName: "Salvia rosmarinus",
    origin: "Mediterranean",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Daniel Young",
          profileImage: "https://source.unsplash.com/random/100x100?user-31",
        },
        rating: 5,
        comment: "Great for cooking.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 31,
    name: "Thyme",
    price: "12",
    category: "Herbs",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 20,
    images: ["thyme", "thyme-1", "thyme-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Thyme is a genus of about 350 species of aromatic perennial herbaceous plants.",
    scientificName: "Thymus vulgaris",
    origin: "Eurasia",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Elijah Martinez",
          profileImage: "https://source.unsplash.com/random/100x100?user-32",
        },
        rating: 5,
        comment: "Very aromatic.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 32,
    name: "Mint",
    price: "10",
    category: "Herbs",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 25,
    images: ["mint", "mint-1", "mint-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Mint is a genus of plants in the family Lamiaceae.",
    scientificName: "Mentha",
    origin: "Eurasia",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Benjamin Gonzalez",
          profileImage: "https://source.unsplash.com/random/100x100?user-33",
        },
        rating: 5,
        comment: "Very fresh.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 33,
    name: "Basil",
    price: "12",
    category: "Herbs",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 20,
    images: ["basil", "basil-1", "basil-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Basil is a culinary herb of the family Lamiaceae.",
    scientificName: "Ocimum basilicum",
    origin: "Central Africa to Southeast Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Aiden Walker",
          profileImage: "https://source.unsplash.com/random/100x100?user-34",
        },
        rating: 5,
        comment: "Very aromatic.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 34,
    name: "Oregano",
    price: "14",
    category: "Herbs",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 18,
    images: ["oregano", "oregano-1", "oregano-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Oregano is a species of flowering plant in the mint family, Lamiaceae.",
    scientificName: "Origanum vulgare",
    origin: "Mediterranean",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Ava Martinez",
          profileImage: "https://source.unsplash.com/random/100x100?user-35",
        },
        rating: 5,
        comment: "Very flavorful.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 35,
    name: "Sage",
    price: "15",
    category: "Herbs",
    seller: {
      name: "Desert Bloom",
      profileImage: "https://source.unsplash.com/random/100x100?profile-5",
    },
    available: 20,
    images: ["sage", "sage-1", "sage-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Sage is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers.",
    scientificName: "Salvia officinalis",
    origin: "Mediterranean",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Oliver Scott",
          profileImage: "https://source.unsplash.com/random/100x100?user-36",
        },
        rating: 5,
        comment: "Very aromatic.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 36,
    name: "Cilantro",
    price: "10",
    category: "Herbs",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 22,
    images: ["cilantro", "cilantro-1", "cilantro-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Cilantro, also known as coriander, is an annual herb in the family Apiaceae.",
    scientificName: "Coriandrum sativum",
    origin: "Southern Europe, Northern Africa to Southwestern Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Mia Clark",
          profileImage: "https://source.unsplash.com/random/100x100?user-37",
        },
        rating: 5,
        comment: "Very flavorful.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 37,
    name: "Parsley",
    price: "10",
    category: "Herbs",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 18,
    images: ["parsley", "parsley-1", "parsley-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Parsley is a species of flowering plant in the family Apiaceae.",
    scientificName: "Petroselinum crispum",
    origin: "Southern Europe",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Elijah Martinez",
          profileImage: "https://source.unsplash.com/random/100x100?user-38",
        },
        rating: 5,
        comment: "Very fresh.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 38,
    name: "Chives",
    price: "12",
    category: "Herbs",
    seller: {
      name: "Orchid Paradise",
      profileImage: "https://source.unsplash.com/random/100x100?profile-3",
    },
    available: 16,
    images: ["chives", "chives-1", "chives-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description:
      "Chives is a species of flowering plant in the family Amaryllidaceae.",
    scientificName: "Allium schoenoprasum",
    origin: "Europe, Asia, North America",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Grace King",
          profileImage: "https://source.unsplash.com/random/100x100?user-39",
        },
        rating: 5,
        comment: "Great for cooking.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 39,
    name: "Dill",
    price: "14",
    category: "Herbs",
    seller: {
      name: "Green Thumb Nursery",
      profileImage: "https://source.unsplash.com/random/100x100?profile-1",
    },
    available: 14,
    images: ["dill", "dill-1", "dill-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Dill is an annual herb in the celery family Apiaceae.",
    scientificName: "Anethum graveolens",
    origin: "Europe, Mediterranean, Asia",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "Lucas Clark",
          profileImage: "https://source.unsplash.com/random/100x100?user-40",
        },
        rating: 5,
        comment: "Very aromatic.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
  {
    id: 40,
    name: "Tarragon",
    price: "16",
    category: "Herbs",
    seller: {
      name: "Urban Jungle",
      profileImage: "https://source.unsplash.com/random/100x100?profile-4",
    },
    available: 12,
    images: ["tarragon", "tarragon-1", "tarragon-2"].map(
      (image) => `/images/plants/${image}.jpg`
    ),
    sizes: ["Small", "Medium", "Large"],
    shippingInfo: "Ships in 1-3 business days",
    description: "Tarragon is a perennial herb in the sunflower family.",
    scientificName: "Artemisia dracunculus",
    origin: "Eurasia, North America",
    careInstructions:
      "Water when the top inch of soil is dry, provide full sunlight.",
    reviews: [
      {
        user: {
          name: "James Robinson",
          profileImage: "https://source.unsplash.com/random/100x100?user-41",
        },
        rating: 5,
        comment: "Great for cooking.",
      },
    ],
    relatedProducts: [2, 4, 5],
  },
];
