export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
    {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 9.7,
    stars: 4,
    reviews: 7541,
    badges: ["POPULAR"],
    isPopular: true,
  },
  {
    id: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 9.5,
    stars: 5,
    reviews: 6874,
    badges: ["MELHOR AVALIADO", "OFERTA EXCLUSIVA"],
    isTopRating: true,
    isTopLine: true,
  },
    {
    id: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 9.3,
    stars: 5,
    reviews: 7234,
    badges: ["EM ALTA"],
    isTrending: true,
  },
  {
    id: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.2,
    stars: 5,
    reviews: 6145,
    badges: ["POPULAR", "EM ALTA"],
    isPopular: true,
    isTrending: true,
  },


  {
    id: 5,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 9.0,
    stars: 4,
    reviews: 8145,
    badges: [],
  },
]
