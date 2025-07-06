const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description: "A serene cabin in the snowy mountains, perfect for a winter getaway.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 1500,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Urban Apartment",
    description: "Modern apartment in the heart of New York City.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded7fc3aa",
    price: 2500,
    location: "Manhattan, New York",
    country: "USA"
  },
  {
    title: "Beachfront Villa",
    description: "Luxurious villa with a private beach and stunning sea view.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    price: 4000,
    location: "Calangute, Goa",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "A peaceful retreat surrounded by lush green fields.",
    image: "https://images.unsplash.com/photo-1600585153943-24559a2f8b85",
    price: 1000,
    location: "Cotswolds, England",
    country: "UK"
  },
  {
    title: "Desert Camp",
    description: "Experience the magical nights of the desert in a luxury tent.",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    price: 900,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Charming lake house with a panoramic view of the water.",
    image: "https://images.unsplash.com/photo-1600585152932-93c4ec76d078",
    price: 1800,
    location: "Lake Tahoe, California",
    country: "USA"
  },
  {
  title: "Scandinavian Lodge",
  description: "Elegant wooden lodge with modern interiors and forest views.",
  image: "https://images.unsplash.com/photo-1600585153033-1c5c1d3c6a9a",
  price: 2200,
  location: "Oslo, Norway",
  country: "Norway"
},
{
  title: "Historic Stone Cottage",
  description: "Charming old-world cottage in the heart of Tuscany’s wine region.",
  image: "https://images.unsplash.com/photo-1560185127-6a8c985b3c73",
  price: 1700,
  location: "Chianti, Tuscany",
  country: "Italy"
},
{
  title: "Glass Treehouse",
  description: "Futuristic glass treehouse with 360° forest canopy views.",
  image: "https://images.unsplash.com/photo-1534430480877-01b6a2b28c61",
  price: 2800,
  location: "Ubud, Bali",
  country: "Indonesia"
},
{
  title: "Art Deco Penthouse",
  description: "Stylish penthouse suite with rooftop garden and skyline view.",
  image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  price: 3200,
  location: "Barcelona, Spain",
  country: "Spain"
},
{
  title: "Minimal Zen Hut",
  description: "Minimalistic hut built for complete digital detox and relaxation.",
  image: "https://images.unsplash.com/photo-1505692794403-32537e76f2c5",
  price: 800,
  location: "Kyoto, Japan",
  country: "Japan"
},
{
  title: "Luxury Ski Chalet",
  description: "Ski-in/ski-out chalet with fireplace and mountain views.",
  image: "https://images.unsplash.com/photo-1588854337113-0cfbd5f0ee0e",
  price: 4500,
  location: "Zermatt, Switzerland",
  country: "Switzerland"
},
{
  title: "Cliffside Bungalow",
  description: "Secluded bungalow perched on a cliff above turquoise waters.",
  image: "https://images.unsplash.com/photo-1578894380012-8403c12d0b62",
  price: 3500,
  location: "Santorini, Greece",
  country: "Greece"
},
{
  title: "Bohemian Studio Loft",
  description: "Colorful and artsy loft perfect for creatives and dreamers.",
  image: "https://images.unsplash.com/photo-1600047501514-1ff7c8aafba1",
  price: 1100,
  location: "Austin, Texas",
  country: "USA"
},
{
  title: "Jungle Treehouse",
  description: "Eco-friendly treehouse in the heart of the Amazon rainforest.",
  image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  price: 950,
  location: "Leticia, Colombia",
  country: "Colombia"
},
{
  title: "Modern Desert Dome",
  description: "Innovative dome house in the middle of serene desert landscape.",
  image: "https://images.unsplash.com/photo-1606788075761-9c7a27d5f24c",
  price: 1600,
  location: "Joshua Tree, California",
  country: "USA"
}

];

module.exports = {data: sampleListings}