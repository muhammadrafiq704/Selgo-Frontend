interface RecomendedCard {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon?: string;
  price: string;
}

export const recomendedCardData: RecomendedCard[] = [
  {
    id: 1,
    name: "Hill",
    description: "Newly build appartment",
    imageUrl: "/assets/images/Property/Image1.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
  {
    id: 2,
    name: "Room",
    description: "Luxury room",
    imageUrl: "/assets/images/Property/Image2.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
  {
    id: 3,
    name: "Luxury House",
    description: "! canal home",
    imageUrl: "/assets/images/Property/Image3.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
  {
    id: 4,
    name: "Hill",
    description: "Luxury room",
    imageUrl: "/assets/images/Property/Image4.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
  {
    id: 5,
    name: "Room",
    description: "! canal home",
    imageUrl: "/assets/images/Property/Image1.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
  {
    id: 6,
    name: "Luxury House",
    description: "A beautiful dewaan piece.",
    imageUrl: "/assets/images/Property/Image2.png",
    icon: "/assets/images/Card/Icon.png",
    price: "100$",
  },
];