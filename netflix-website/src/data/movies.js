export const movies = [
  {
    id: 1,
    title: "The Witcher",
    backdrop: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
  },
  {
    id: 2,
    title: "Interstellar",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1954&auto=format&fit=crop",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 3,
    title: "Inception",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    id: 4,
    title: "Blade Runner 2049",
    backdrop: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard."
  },
  {
     id: 5,
     title: "Dune",
     backdrop: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=2070&auto=format&fit=crop",
     poster: "https://images.unsplash.com/photo-1501533544834-ec674d47732e?q=80&w=1974&auto=format&fit=crop",
     description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset."
  }
];

export const categories = [
    { title: "Trending Now", movies: movies },
    { title: "New Releases", movies: [...movies].reverse() },
    { title: "Action Movies", movies: [movies[0], movies[2], movies[4]] },
    { title: "Sci-Fi Hits", movies: [movies[1], movies[3], movies[4]] }
];
