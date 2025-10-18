const characters = [
  {
    name: "Mickey Mouse",
    films: ["Steamboat Willie", "Fantasia", "O Natal do Mickey"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1928,
    isHuman: false,
    image: "mickey.png"
  },
  {
    name: "Minnie Mouse",
    films: ["Steamboat Willie", "O Natal do Mickey"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1928,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/6/67/Minnie_Mouse.png/revision/latest?cb=20240611033558"
  },
  {
    name: "Pato Donald",
    films: ["A Galinha Sábia", "DuckTales: O Filme"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1934,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/a/ab/Donald_Duck_Disney_1.png/revision/latest?cb=20180828172632"
  },
  {
    name: "Pateta",
    films: ["O Filme do Pateta", "Pateta 2: Radicalmente Pateta"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1932,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/e/e5/Goofy.png/revision/latest?cb=20250827192413"
  },
  {
    name: "Simba",
    films: ["O Rei Leão", "O Rei Leão 2: O Reino de Simba", "Mufasa: O Rei Leão"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1994,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg/revision/latest/scale-to-width-down/1000?cb=20190312043852"
  },
  {
    name: "Mufasa",
    films: ["O Rei Leão", "Mufasa: O Rei Leão"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1994,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/5/5e/Mufasa_Lion_King_.jpg/revision/latest/scale-to-width-down/1000?cb=20240910202509"
  },
  {
    name: "Scar",
    films: ["O Rei Leão", "Mufasa: O Rei Leão"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: true,
    firstAppearance: 1994,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/6/66/Profile_-_Scar.jpeg/revision/latest/scale-to-width-down/1000?cb=20250721194731"
  },
  {
    name: "Ariel",
    films: ["A Pequena Sereia", "A Pequena Sereia 2: O Retorno para o Mar"],
    gender: "feminino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 1989,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/8/8a/Profile_-_Ariel.jpg/revision/latest?cb=20230913063128"
  },
  {
    name: "Úrsula",
    films: ["A Pequena Sereia"],
    gender: "feminino",
    sings: true,
    hasPowers: true,
    isVillain: true,
    firstAppearance: 1989,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/7/72/Profile_-_Ursula.jpeg/revision/latest?cb=20201204230949"
  },
  {
    name: "Elsa",
    films: ["Frozen: Uma Aventura Congelante", "Frozen II"],
    gender: "feminino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 2013,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/9/95/Profile_-_Elsa.jpeg/revision/latest?cb=20241222112925"
  },
  {
    name: "Anna",
    films: ["Frozen: Uma Aventura Congelante", "Frozen II"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 2013,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/dis/images/7/7c/B5da8e4c0046a83b81dbd945719f6b354edd764b.jpeg/revision/latest?cb=20160623191458"
  },
  {
    name: "Olaf",
    films: ["Frozen: Uma Aventura Congelante", "Frozen II"],
    gender: "masculino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 2013,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Olaf.jpeg/revision/latest?cb=20200221075027"
  },
  {
    name: "Moana",
    films: ["Moana: Um Mar de Aventuras"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 2016,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/7/7d/Profile_-_Moana.png/revision/latest/scale-to-width-down/1000?cb=20240530203852"
  },
  {
    name: "Maui",
    films: ["Moana: Um Mar de Aventuras"],
    gender: "masculino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 2016,
    isHuman: false,
    image: "https://static.wikia.nocookie.net/disney/images/6/6f/Profile_-_Maui.jpeg/revision/latest?cb=20250309150414"
  },
  {
    name: "Mirabel Madrigal",
    films: ["Encanto"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 2021,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/2/2e/Profile_-_Mirabel_Madrigal.png/revision/latest/scale-to-width-down/1000?cb=20220213075457"
  },
  {
    name: "Isabela Madrigal",
    films: ["Encanto"],
    gender: "feminino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 2021,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/4/47/Profile_-_Isabela_Madrigal.png/revision/latest?cb=20211028173500"
  },
  {
    name: "Bruno Madrigal",
    films: ["Encanto"],
    gender: "masculino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 2021,
    isHuman: true,
    image: "bruno.jpg"
  },
  {
    name: "Tarzan",
    films: ["Tarzan", "Tarzan e Jane"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1999,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/2/2e/Profile_-_Tarzan.png/revision/latest?cb=20190821020257"
  },
  {
    name: "Jane Porter",
    films: ["Tarzan", "Tarzan e Jane"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1999,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/e/ef/Profile_-_Jane_Porter.png/revision/latest?cb=20190312070932"
  },
  {
    name: "Clayton",
    films: ["Tarzan"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: true,
    firstAppearance: 1999,
    isHuman: true,
    image: "https://static.wikia.nocookie.net/disney/images/e/e2/Clayton_profile_.jpg/revision/latest?cb=20160325111414"
  }
];



