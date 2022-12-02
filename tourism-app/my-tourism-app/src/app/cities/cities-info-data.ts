import {CityInfo} from './cities-info'

export const citiesInfo: CityInfo[] = [
  { name: "Aswan", attractions: ["Abu-Simbel", "Nubian Museum", "Elephantine"] },
  { name: "Cairo", attractions: ["The Pyramids", "Niles", "Khan elKhalili"] },
  { name: "Luxor", attractions: ["Valley of the Kings", "Karnak", "Luxor Template"] },
  { name: "Sharm El-Sheikh", attractions: ["Naama", "Ras Muhammad National Park"] }


  ]

export const citiesWeather = [
  { name: "Aswan", springN: 23, springM: 40, summerN: 28, summerM: 43, winterN: 12, winterM: 25, autumnN: 22, autumnM: 36, visitFrom: "October", visitTo: "April" },
  { name: "Cairo", springN: 18, springM: 30, summerN: 23, summerM: 42, winterN: 13, winterM: 22, autumnN: 21, autumnM: 38, visitFrom: "December", visitTo: "January" },
  { name: "Luxor", springN: 25, springM: 10, summerN: 98, summerM: 33, winterN: 42, winterM: 75, autumnN: 22, autumnM: 16, visitFrom: "October", visitTo: "April" },
  { name: "Sharm Elsheikh", springN: 22, springM: 20, summerN: 78, summerM: 23, winterN: 52, winterM: 65, autumnN: 32, autumnM: 26, visitFrom: "October", visitTo: "November" },
]
