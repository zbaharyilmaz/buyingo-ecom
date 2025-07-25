// utils/Products.ts
export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iPhone 14",
    description: "Short description",
    price: 2999,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX Keyboard",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match your fingertips, offering satisfying feedback with every tap. COMFORT AND STABILITY - Crafted for precision typing.",
    price: 102.99,
    brand: "Logitech",
    category: "Accessories",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "Great keyboard!",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Berkant Kaya",
          email: "example@gmail.com",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Refurbished iPhone 12",
    description:
      "Refurbished excellent condition, backed by a 90-day guarantee. Includes charger, cable, SIM tool.",
    price: 40,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment: "Çok güzel bir ürün, tavsiye ederim.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Berkant Kaya",
          email: "example1@gmail.com",
          image: "https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master Mouse",
    description:
      "Cross-computer control, dual connectivity, gesture button—game changing capacity.",
    price: 70,
    brand: "Logitech",
    category: "Accessories",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: "Smart Watch (Calls & Messages)",
    description:
      "Bluetooth call and message reminder, HD speaker, sync contacts, call history.",
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: [],
  },
];
