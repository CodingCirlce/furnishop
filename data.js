const products = [
  {
    id: 1,
    name: "Classic Double Bed",
    category: "double-beds",
    description: "Timeless double bed with sturdy wooden frame",
    price: "All Rates Incl. ₹41,300",
    images: ["./assets/images/product/33.png"]

  },
  {
    id: 2,
    name: "Modern Serenity Bed",
    category: "double-beds",
    description: "Contemporary design for peaceful sleep",
    price: "All Rates Incl. ₹29,900",
    images: ["./assets/images/product/34.png"]
  },
  {
    id: 3,
    name: "Dream Weaver Bed",
    category: "double-beds",
    description: "Handcrafted bed with intricate detailing",
    price: "All Rates Incl. ₹42,900",
    images: ["./assets/images/product/35.png"]
  },
  {
    id: 4,
    name: "Horizon Platform Bed",
    category: "double-beds",
    description: "Low-profile platform bed with clean lines",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/product/36.png"]
  },
  {
    id: 5,
    name: "Everest Plush Bed",
    category: "double-beds",
    description: "Luxurious high-end bed with premium upholstery",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/product/37.png"]
  },
  {
    id: 6,
    name: "Coastal Retreat Bed",
    category: "double-beds",
    description: "Beach-inspired design with light wood finish",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/product/39.png"]
  },
  {
    id: 7,
    name: "Utopia King Bed",
    category: "double-beds",
    description: "Spacious king-size bed with elegant headboard",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.35.jpeg"]
  },
  {
    id: 8,
    name: "Artisan Craft Bed",
    category: "double-beds",
    description: "Hand-carved wooden bed with traditional motifs",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.36.jpeg"]
  },
  {
    id: 9,
    name: "Celestial Slumber Bed",
    category: "double-beds",
    description: "Canopy bed with celestial-inspired design",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.38.jpeg"]
  },
  {
    id: 10,
    name: "Whispering Willow Bed",
    category: "double-beds",
    description: "Graceful bed with willow-inspired carvings",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.41.jpeg"]
  },
  {
    id: 11,
    name: "Monarch Grand Bed",
    category: "double-beds",
    description: "Regal bed fit for royalty with ornate details",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.42.jpeg"]
  },
  {
    id: 12,
    name: "Harmony Haven Bed",
    category: "double-beds",
    description: "Balanced design promoting restful sleep",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/WhatsApp Image 2025-04-27 at 13.32.46.jpeg"]
  },
  {
    id: 13,
    name: "Summit Sleep Bed",
    category: "double-beds",
    description: "Peak of comfort with premium mattress support",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/IMG_20240329_164339_815.jpg"]
  },
  {
    id: 14,
    name: "Infinity Zen Bed",
    category: "double-beds",
    description: "Minimalist design with zen-inspired aesthetics",
    price: "All Rates Incl. ₹43,900",
    images: ["./assets/images/sofa/ChatGPT Image Jun 18, 2025, 01_52_56 PM.png"]
  },
  {
    id: 15,
    name: "2 Doors Almirah With 2 Outer Bottom Drawer",
    category: "almirah",
    description: "Compact wardrobe with convenient bottom storage",
    price: "₹26,100",
    images: ["./assets/images/product/57.PNG"]
  },
  {
    id: 16,
    name: "2 Doors Almirah (Durable & Spacious)",
    category: "almirah",
    description: "Sturdy two-door wardrobe with ample space",
    price: "₹23,100",
    images: ["./assets/images/product/58.PNG"]
  },
  {
    id: 17,
    name: "3 Doors Almirah (Durable & Spacious)",
    category: "almirah",
    description: "Three-door wardrobe with generous storage",
    price: "₹27,100",
    images: ["./assets/images/product/59.PNG"]
  },
  {
    id: 18,
    name: "2 Doors Almirah (Extra Heavy Duty)",
    category: "almirah",
    description: "Reinforced construction for maximum durability",
    price: "₹26,100",
    images: ["./assets/images/product/60.PNG"]
  },
  {
    id: 19,
    name: "3 Doors Almirah (Extra Heavy Duty)",
    category: "almirah",
    description: "Heavy-duty three-door wardrobe built to last",
    price: "₹30,100",
    images: ["./assets/images/product/61.PNG"]
  },
  {
    id: 20,
    name: "2 Doors Almirah With 2 Outer Bottom Drawer",
    category: "almirah",
    description: "Functional wardrobe with easy-access drawers",
    price: "₹26,100",
    images: ["./assets/images/product/62.PNG"]
  },
  {
    id: 21,
    name: "3 Doors Almirah With 2 Outer Bottom Drawer",
    category: "almirah",
    description: "Spacious three-door with additional drawer storage",
    price: "₹30,100",
    images: ["./assets/images/product/63.PNG"]
  },
  {
    id: 22,
    name: "2 Doors Almirah With Mirror & 2 Outer Drawer",
    category: "almirah",
    description: "Mirrored wardrobe with convenient drawers",
    price: "₹27,100",
    images: ["./assets/images/product/64.PNG"]
  },
  {
    id: 23,
    name: "2 Doors Almirah With Upper Shocker Compartment",
    category: "almirah",
    description: "Innovative design with overhead storage",
    price: "₹27,100",
    images: ["./assets/images/product/65.PNG"]
  },
  {
    id: 24,
    name: "3 Doors Almirah With Upper Shocker Compartment",
    category: "almirah",
    description: "Three-door with elevated storage space",
    price: "₹31,100",
    images: ["./assets/images/product/66.PNG"]
  },
  {
    id: 25,
    name: "2 Doors Almirah With Upper Shocker Compartment & 2 Bottom Drawer",
    category: "almirah",
    description: "Versatile storage with compartments and drawers",
    price: "₹31,100",
    images: ["./assets/images/product/67.PNG"]
  },
  {
    id: 26,
    name: "3 Doors Almirah With Upper Shocker Compartment & 2 Bottom Drawer",
    category: "almirah",
    description: "Complete storage solution with multiple sections",
    price: "₹32,100",
    images: ["./assets/images/product/68.PNG"]
  },
  {
    id: 27,
    name: "Dressing Almirah With 5 Doors",
    category: "almirah",
    description: "Comprehensive dressing unit with five sections",
    price: "₹31,100",
    images: ["./assets/images/product/69.PNG"]
  },
  {
    id: 28,
    name: "Full Dressing Almirah",
    category: "almirah",
    description: "Complete dressing station with mirrors and storage",
    price: "₹35,100",
    images: ["./assets/images/product/70.PNG"]
  },
  {
    id: 29,
    name: "The Grand Feast",
    category: "dining-tables",
    description: "Elegant dining table for family gatherings",
    price: "All Rates Incl. ₹46,900",
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.13.jpeg"]
  },
  {
    id: 30,
    name: "Maharaja Dine",
    category: "dining-tables",
    description: "Royal-inspired dining table for lavish meals",
    price: "All Rates Incl. ₹98,600",
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.14.jpeg"]
  },
  {
    id: 31,
    category: "dining-tables",
    name: "Regal Rose",
    description: "Seats 5 people with extension leaf",
    price: "All Rates Incl. ₹46900",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.16 (1).jpeg"]
  },

  {
    id: 32,
    category: "dining-tables",
    name: "Emperor's Table",
    description: "Seats 8 people with extension leaf",
    price: "All Rates Incl. ₹148900",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.16.jpeg"]
  },
  {
    id: 33,
    category: "dining-tables",
    name: "Royal Oak",
    description: "Wooden table for 1",
    price: "All Rates Incl. ₹16520",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.17 (1).jpeg"]
  },
  {
    id: 34,
    category: "dining-tables",
    name: "Heritage Dining",
    description: "Seats 8 people with extension leaf",
    price: "All Rates Incl. ₹151900",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.17.jpeg"]
  },
  {
    id: 35,
    category: "dining-tables",
    name: "Classic Teak",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹158900",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.18 (1).jpeg"]
  },
  {
    id: 36,
    category: "dining-tables",
    name: "Ivory Elegance",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹95800",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 12.58.18.jpeg"]
  },
  {
    id: 37,
    category: "dining-tables",
    name: "Saffron Supper",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹152900",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.03.50.jpeg"]
  },
  {
    id: 38,
    category: "dining-tables",
    name: "The Noble Table",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹152900",
    gstIncluded: true,
    images: ["./assets/images/latestone/WhatsApp Image 2025-05-30 at 12.16.00 (1).jpeg"]
  },
  {
    id: 39,
    category: "dining-tables",
    name: "Golden Glaze",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹152900",
    gstIncluded: true,
    images: ["./assets/images/latestone/WhatsApp Image 2025-05-30 at 12.16.00.jpeg"]
  },
  {
    id: 40,
    category: "dining-tables",
    name: "Pearl Dining",
    description: "Seats 6 people with extension leaf",
    price: "All Rates Incl. ₹78116",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-29 at 12.41.18.jpeg"]
  },

  // Sofa Cum Beds
  {
    id: 41,
    category: "sofa-cum-beds",
    name: "The ConvertiLounge",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹36580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.21 (1).jpeg"]
  },
  {
    id: 42,
    category: "sofa-cum-beds",
    name: "FlexiSleeper",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹36580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.18.jpeg"]
  },
  {
    id: 43,
    category: "sofa-cum-beds",
    name: "Urban Dweller Sofa Bed",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹41580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.21 (2).jpeg"]
  },
  {
    id: 44,
    category: "sofa-cum-beds",
    name: "The Harmony Transformer",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹41580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.22.jpeg"]
  },
  {
    id: 45,
    category: "sofa-cum-beds",
    name: "Chameleon Couch",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹36580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.23 (1).jpeg"]
  },
  {
    id: 46,
    category: "sofa-cum-beds",
    name: "Day-to-Night Lounger",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹38580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.24 (1).jpeg"]
  },
  {
    id: 47,
    category: "sofa-cum-beds",
    name: "SpaceSaver Sleeper",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹40580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.26.jpeg"]
  },
  {
    id: 48,
    category: "sofa-cum-beds",
    name: "Convertible Sofa Bed",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹37580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.29.jpeg"]
  },
  {
    id: 49,
    category: "sofa-cum-beds",
    name: "The Dual Function Sofa",
    description: "Convertible sofa to bed",
    price: "All Rates Incl. ₹42580",
    gstIncluded: true,
    images: ["./assets/images/product/WhatsApp Image 2025-05-17 at 13.50.28 (1).jpeg"]
  },

  // Sofas
  {
    id: 50,
    category: "sofa",
    name: "Classic 3-Seater Sofa",
    description: "Traditional 3-seater sofa",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/sofa/img70.jpg"]
  },
  {
    id: 51,
    category: "sofa",
    name: "L-Shaped Sectional Sofa",
    description: "Modular L-shaped configuration",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img76.jpg"]
  },
  {
    id: 52,
    category: "sofa",
    name: "Regal Maharaja Sofa",
    description: "Ornate royal-inspired design",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img82.jpg"]
  },
  {
    id: 53,
    category: "sofa",
    name: "Majestic Empress Sofa",
    description: "Elegant curved-back design",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img88.jpg"]
  },
  {
    id: 54,
    category: "sofa",
    name: "Grand Nawab Sofa",
    description: "Luxurious velvet upholstery",
    price: "₹9,204 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img112.jpg"]
  },
  {
    id: 55,
    category: "sofa",
    name: "Colonial Charm Sofa",
    description: "Vintage colonial style",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img118.jpg"]
  },
  {
    id: 56,
    category: "sofa",
    name: "Artisan Carver Sofa",
    description: "Hand-carved wooden details",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img148.jpg"]
  },
  {
    id: 57,
    category: "sofa",
    name: "Jaipur Bloom Sofa",
    description: "Floral motif fabric",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img160.jpg"]
  },
  {
    id: 58,
    category: "sofa",
    name: "Deccan Dynasty Sofa",
    description: "Regal high-back design",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img166.jpg"]
  },
  {
    id: 59,
    category: "sofa",
    name: "Vedic Comfort Sofa",
    description: "Ergonomic spiritual design",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img172.jpg"]
  },
  {
    id: 60,
    category: "sofa",
    name: "Bombay Lounge Sofa",
    description: "Art deco inspired",
    price: "₹9,204 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img178.jpg"]
  },
  {
    id: 61,
    category: "sofa",
    name: "Delhi Sultan Sofa",
    description: "Opulent Mughal style",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img184.jpg"]
  },
  {
    id: 62,
    category: "sofa",
    name: "Calcutta Club Sofa",
    description: "British Raj elegance",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img190.jpg"]
  },
  {
    id: 63,
    category: "sofa",
    name: "Punjab Pride Sofa",
    description: "Vibrant Phulkari patterns",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img208.jpg"]
  },
  {
    id: 64,
    category: "sofa",
    name: "Himalayan Retreat Sofa",
    description: "Natural wood and wool",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img220.jpg"]
  },
  {
    id: 65,
    category: "sofa",
    name: "Goan Getaway Sofa",
    description: "Portuguese colonial influence",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img226.jpg"]
  },
  {
    id: 66,
    category: "sofa",
    name: "Ganga River Sofa",
    description: "Flowing curved design",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img232.jpg"]
  },
  {
    id: 67,
    category: "sofa",
    name: "Indus Modern Sofa",
    description: "Contemporary clean lines",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img238.jpg"]
  },
  {
    id: 68,
    category: "sofa",
    name: "Bharat Recliner Sofa",
    description: "With built-in recliners",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img250.jpg"]
  },
  {
    id: 69,
    category: "sofa",
    name: "Unity Corner Sofa",
    description: "Modular sectional pieces",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img262.jpg"]
  },
  {
    id: 70,
    category: "sofa",
    name: "Divine Embrace Sofa",
    description: "Wraparound comfort",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img268.jpg"]
  },
  {
    id: 71,
    category: "sofa",
    name: "Mystic Sands Sofa",
    description: "Desert-inspired tones",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img274.jpg"]
  },
  {
    id: 72,
    category: "sofa",
    name: "Golden Thread Sofa",
    description: "Metallic thread embroidery",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img280.jpg"]
  },
  {
    id: 73,
    category: "sofa",
    name: "Sapphire Blue Sofa",
    description: "Deep blue velvet",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img286.jpg"]
  },
  {
    id: 74,
    category: "sofa",
    name: "Emerald Green Sofa",
    description: "Jewel-toned luxury",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img304.jpg"]
  },
  {
    id: 75,
    category: "sofa",
    name: "Mahal Palace Sofa",
    description: "Fit for royalty",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img316.jpg"]
  },
  {
    id: 76,
    category: "sofa",
    name: "Fortress Living Sofa",
    description: "Sturdy and imposing",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img322.jpg"]
  },
  {
    id: 77,
    category: "sofa",
    name: "Royal Comfort Sofa",
    description: "Plush cushioning",
    price: "₹7,316 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img328.jpg"]
  },
  {
    id: 78,
    category: "sofa",
    name: "Zenith Modular Sofa",
    description: "Custom configurations",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img364.jpg"]
  },
  // Additional Sofas (to be added to the furnitureItems array)
  {
    id: 79,
    category: "sofa",
    name: "Elite Executive Sofa",
    description: "Premium executive seating",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img394.jpg"]
  },
  {
    id: 80,
    category: "sofa",
    name: "Family Fiesta Sofa",
    description: "Spacious family seating",
    price: "₹10,030 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img400.jpg"]
  },
  {
    id: 81,
    category: "sofa",
    name: "Studio Smart Sofa",
    description: "Modern studio apartment solution",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img406.jpg"]
  },
  {
    id: 82,
    category: "sofa",
    name: "Compact Living Sofa",
    description: "Space-efficient urban design",
    price: "₹11,210 per seat All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: true,
    images: ["./assets/images/sofa/img412.jpg"]
  },
  {
    id: 83,
    category: "centertable",
    name: "Modern Glass Center Table",
    description: "Sleek tempered glass top with metallic frame for contemporary spaces",
    price: "₹16,140 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img01.png"]
  },
  {
    id: 84,
    category: "centertable",
    name: "Wooden Center Table",
    description: "Handcrafted solid wood table with natural finish",
    price: "₹21,830 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img02.png"]
  },
  {
    id: 85,
    category: "centertable",
    name: "Nested Coffee Tables Set",
    description: "Set of three versatile tables that can be arranged creatively",
    price: "₹31,270 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img03.png"]
  },
  {
    id: 86,
    category: "centertable",
    name: "Industrial Center Table",
    description: "Rustic iron frame with distressed wood top for industrial chic",
    price: "₹31,270 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img04.png"]
  },
  {
    id: 87,
    category: "centertable",
    name: "Marble Top Center Table",
    description: "Elegant marble surface with gold-trimmed legs",
    price: "₹29,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img05.png"]
  },
  {
    id: 88,
    category: "centertable",
    name: "Ottoman Table",
    description: "Dual-purpose design that converts from table to footrest",
    price: "₹32,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img06.png"]
  },
  {
    id: 89,
    category: "centertable",
    name: "Rustic Tree Trunk Table",
    description: "Natural wood slice with live edge and iron base",
    price: "₹31,270 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img07.png"]
  },
  {
    id: 90,
    category: "centertable",
    name: "Minimalist Square Center Table",
    description: "Clean lines and neutral tones for Scandinavian interiors",
    price: "₹17,110 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img08.png"]
  },
  {
    id: 91,
    category: "centertable",
    name: "Lift-Top Coffee Table",
    description: "Convertible design with adjustable height for multiple uses",
    price: "₹18,880 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img09.png"]
  },
  {
    id: 92,
    category: "centertable",
    name: "Vintage Trunk Center Table",
    description: "Antique-style leather trunk with storage space",
    price: "₹18,880 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img10.png"]
  },
  {
    id: 93,
    category: "centertable",
    name: "Geometric Brass Center Table",
    description: "Angular brass frame with smoked glass top for modern decor",
    price: "₹28,320 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img11.png"]
  },
  {
    id: 94,
    category: "centertable",
    name: "River Epoxy Wood Table",
    description: "Live edge wood with blue epoxy resin river design",
    price: "₹15,880 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img12.png"]
  },
  {
    id: 95,
    category: "centertable",
    name: "Rotating Storage Center Table",
    description: "360° rotating top with hidden compartments for organization",
    price: "₹17,850 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img13.png"]
  },
  {
    id: 96,
    category: "centertable",
    name: "Mid-Century Teak Center Table",
    description: "Classic 1960s design with tapered legs and warm wood tones",
    price: "₹29,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img14.png"]
  },
  {
    id: 97,
    category: "centertable",
    name: "Acrylic Floating Center Table",
    description: "Transparent modern design that creates illusion of space",
    price: "₹18,880 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/center/img15.png"]
  },
  {
    id: 98,
    category: "double-beds",
    name: "Full-size bed",
    description: "The Full-Size Bed: Intimate Comfort",
    price: "₹32,320 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/13.png"]
  },
  {
    id: 99,
    category: "double-beds",
    name: "Celestial Dream Bed",
    description: "Canopy design with star-patterned fabric for heavenly sleeps",
    price: "₹32,450 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/14.png"]
  },
  {
    id: 100,
    category: "double-beds",
    name: "Whispering Pines Bed",
    description: "Solid pine wood frame with carved nature-inspired motifs",
    price: "₹42,190 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/15.png"]
  },
  {
    id: 101,
    category: "double-beds",
    name: "Velvet Horizon Bed",
    description: "Luxurious velvet upholstery in sunset colors with chrome legs",
    price: "₹40,290 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/16.png"]
  },
  {
    id: 102,
    category: "double-beds",
    name: "Marble & Oak Bed",
    description: "Italian marble inlay on premium oak wood frame",
    price: "₹46,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/17.png"]
  },
  {
    id: 103,
    category: "double-beds",
    name: "Cloud Haven Bed",
    description: "Triple-layered cushioning system for weightless comfort",
    price: "₹38,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/18.png"]
  },
  {
    id: 104,
    category: "double-beds",
    name: "Industrial Loft Bed",
    description: "Reclaimed metal pipes with distressed wood platform",
    price: "₹46,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/19.png"]
  },
  {
    id: 105,
    category: "double-beds",
    name: "Zen Harmony Bed",
    description: "Low-profile Japanese platform with built-in nightstands",
    price: "₹42,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/20.png"]
  },
  {
    id: 106,
    category: "double-beds",
    name: "Art Deco Majesty Bed",
    description: "Geometric patterns and gold leaf detailing from the 1920s",
    price: "₹45,300 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/21.png"]
  },
  {
    id: 107,
    category: "double-beds",
    name: "Floating Cloud Bed",
    description: "LED-lit platform creates illusion of hovering above ground",
    price: "₹39,999 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/22.png"]
  },
  {
    id: 108,
    category: "double-beds",
    name: "Moonlight Serenade Bed",
    description: "Round velvet headboard with integrated mood lighting for romantic ambiance",
    price: "₹44,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/23.png"]
  },
  {
    id: 109,
    category: "double-beds",
    name: "Royal Canopy Dream",
    description: "Four-poster bed with sheer drapes for luxurious privacy",
    price: "₹45,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/2.png"]
  },
  {
    id: 110,
    category: "double-beds",
    name: "Velvet Eclipse",
    description: "Circular midnight blue velvet headboard with gold accents",
    price: "₹42,750 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/3.png"]
  },
  {
    id: 111,
    category: "double-beds",
    name: "Zen Platform Haven",
    description: "Low-profile Japanese-style bed with integrated storage",
    price: "₹38,200 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/4.png"]
  },
  {
    id: 112,
    category: "double-beds",
    name: "Marble & Oak Symphony",
    description: "Carrara marble inlay on solid oak wooden frame",
    price: "₹38,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/5.png"]
  },
  {
    id: 113,
    category: "double-beds",
    name: "Starlight Haven",
    description: "Fiber-optic headboard that mimics a starry night sky",
    price: "₹36,400 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/6.png"]
  },
  {
    id: 114,
    category: "double-beds",
    name: "Industrial Chic Loft",
    description: "Reclaimed metal piping with distressed leather headboard",
    price: "₹41,350 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/7.png"]
  },
  {
    id: 115,
    category: "double-beds",
    name: "Whispering Willow",
    description: "Hand-carved botanical motifs on sustainable teak wood",
    price: "₹38,900 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/8.png"]
  },
  {
    id: 116,
    category: "double-beds",
    name: "Art Deco Majesty",
    description: "Geometric patterns and gold leaf detailing from the Roaring Twenties",
    price: "₹42,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/9.png"]
  },
  {
    id: 117,
    category: "double-beds",
    name: "Cloud Nine Sanctuary",
    description: "Triple-layer memory foam with temperature regulation",
    price: "₹38,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/10.png"]
  },
  {
    id: 118,
    category: "double-beds",
    name: "Modernist Horizon",
    description: "Floating platform with hidden LED ambient lighting",
    price: "₹36,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/11.png"]
  },
  {
    id: 119,
    category: "double-beds",
    name: "Rustic Charm Retreat",
    description: "Reclaimed barn wood with visible natural imperfections",
    price: "₹39,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/12.png"]
  },
  {
    id: 120,
    category: "double-beds",
    name: "Celestial Nest",
    description: "Round bed with crescent moon headboard and star projections",
    price: "₹42,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/morebeds/1.png"]
  },
  {
    id: 121,
    category: "dining-tables",
    name: "Minimalist Zen Platform",
    description: "Low-profile white oak table with hidden joinery",
    price: "₹92,586 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/15.png"]
  },
  {
    id: 122,
    category: "dining-tables",
    name: "Marble Monarch Table",
    description: "Italian Carrara marble top with gold-accented iron base",
    price: "₹90,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/16.png"]
  },
  {
    id: 123,
    category: "dining-tables",
    name: "Rustic Farmhouse Feast",
    description: "Reclaimed teak wood with visible grain and iron brackets",
    price: "₹1,52,900 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/17.png"]
  },
  {
    id: 124,
    category: "dining-tables",
    name: "Modern Marble Horizon",
    description: "Tempered glass top floating on polished chrome legs",
    price: "₹72,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/18.png"]
  },
  {
    id: 125,
    category: "dining-tables",
    name: "Extendable Oak Symphony",
    description: "Solid oak table with hidden leaf for 6-10 person seating",
    price: "₹95,700 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/19.png"]
  },
  {
    id: 126,
    category: "dining-tables",
    name: "Industrial Pipe Chic",
    description: "Black iron pipe base with distressed walnut top",
    price: "₹70,500 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/20.png"]
  },
  {
    id: 127,
    category: "dining-tables",
    name: "Mid-Century Modern Classic",
    description: "Tapered wooden legs with oval walnut veneer top",
    price: "₹71,600 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/21.png"]
  },
  {
    id: 128,
    category: "dining-tables",
    name: "Live Edge Naturalist",
    description: "Single slab acacia wood with preserved natural edges",
    price: "₹50,220 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/22.png"]
  },
  {
    id: 129,
    category: "dining-tables",
    name: "Art Deco Grandeur",
    description: "Geometric patterned top with brass inlay details",
    price: "₹48,800 All Rates Incl.",
    gstIncluded: true,
    pricePerSeat: false,
    images: ["./assets/images/moretables/23.png"]
  }
];