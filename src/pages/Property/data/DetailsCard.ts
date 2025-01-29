interface DetailsCard {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

export const detailsCardData: DetailsCard[] = [
  {
    id: 1,
    imageUrl: "/assets/images/Property/Image.png",
    name: "Rooms",
    price: "100$",
    description: "1 bedroom",
  },
];
