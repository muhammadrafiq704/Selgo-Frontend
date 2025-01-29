interface ProfileCardData {
  id: number;
  title: string;
  img: string;
}

export const ProfileCardsData: ProfileCardData[] = [
  {
    id: 1,
    title: "Your Orders",
    img: "/assets/images/PopularAds/Profile/order.png",
  },
  {
    id: 2,
    title: "Mobile and Accessories",
    img: "/assets/images/PopularAds/Profile/accessories.png",
  },
  {
    id: 3,
    title: "Watches for Men",
    img: "/assets/images/PopularAds/Profile/watch.png",
  },
  {
    id: 4,
    title: "Fashion",
    img: "/assets/images/PopularAds/Profile/fashion.png",
    // img: {FashionImage}
  },
];
