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
    image: "https://raw.githubusercontent.com/shitsubernard/disney-guess/main/mickey.png"
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
    image: "minnei.jpg"
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
    image: "donald.jpg"
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
    image: "pateta.png"
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
    image: "simba.png"
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
    image: "mufasa.jpg"
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
    image: "scar.jpg"
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
    image: "ariel.jpg"
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
    image: "ursula.jpeg"
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
    image: "elsa.jpg"
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
    image: "anna.png"
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
    image: "olaf.png"
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
    image: "moana.jpg"
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
    image: "maui.jpg"
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
    image: "mirabel.jpeg"
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
    image: "isabela.jpg"
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
    image: "tarzan.jpg"
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
    image: "jane.jpg"
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
    image: "clayton.jpg"
  },
  {
    name: "Tiana",
    films: ["A Princesa e o Sapo"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 2009,
    isHuman: true,
    image: "tiana.png"
  },
  {
    name: "Príncipe Naveen",
    films: ["A Princesa e o Sapo"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 2009,
    isHuman: true,
    image: "Príncipe Naveen.jpg"
  },
  {
    name: "Mogli",
    films: ["Mogli: O Menino Lobo"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1967,
    isHuman: true,
    image: "mogli.jpg"
  },
  {
    name: "Baloo",
    films: ["Mogli: O Menino Lobo"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1967,
    isHuman: false,
    image: "baloo.jpg"
  },
  {
    name: "Cinderela",
    films: ["Cinderela"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1950,
    isHuman: true,
    image: "cinderela.jpg"
  },
  {
    name: "Fada Madrinha",
    films: ["Cinderela"],
    gender: "feminino",
    sings: false,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 1950,
    isHuman: true,
    image: "fada_madrinha.jpg"
  },
  {
    name: "Aladdin",
    films: ["Aladdin"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1992,
    isHuman: true,
    image: "alladin.jpg"
  },
  {
    name: "Gênio",
    films: ["Aladdin"],
    gender: "masculino",
    sings: true,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 1992,
    isHuman: false,
    image: "genio.jpeg"
  },
  {
    name: "Branca de Neve",
    films: ["Branca de Neve e os Sete Anões"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1937,
    isHuman: true,
    image: "branca_de_neve.jpeg"
  },
  {
    name: "Rainha Má",
    films: ["Branca de Neve e os Sete Anões"],
    gender: "feminino",
    sings: false,
    hasPowers: true,
    isVillain: true,
    firstAppearance: 1937,
    isHuman: true,
    image: "rainha_ma.jpeg"
  },
  {
    name: "Quasímodo",
    films: ["O Corcunda de Notre Dame"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1996,
    isHuman: true,
    image: "quasimodo.jpeg"
  },
  {
    name: "Esmeralda",
    films: ["O Corcunda de Notre Dame"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1996,
    isHuman: true,
    image: "esmeralda.jpeg"
  },
  {
    name: "Bernardo",
    films: ["Bernardo e Bianca"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1977,
    isHuman: false,
    image: "bernardo.jpg"
  },
  {
    name: "Bianca",
    films: ["Bernardo e Bianca"],
    gender: "feminino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1977,
    isHuman: false,
    image: "bianca.jpg"
  },
  {
    name: "Tod",
    films: ["O Cão e a Raposa"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1981,
    isHuman: false,
    image: "tod.jpeg"
  },
  {
    name: "Copper",
    films: ["O Cão e a Raposa"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1981,
    isHuman: false,
    image: "copper.jpeg"
  },
  {
    name: "Pocahontas",
    films: ["Pocahontas"],
    gender: "feminino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1995,
    isHuman: true,
    image: "pocahontas.jpeg"
  },
  {
    name: "John Smith",
    films: ["Pocahontas"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1995,
    isHuman: true,
    image: "john_smith.jpeg"
  },
  {
    name: "Dumbo",
    films: ["Dumbo"],
    gender: "masculino",
    sings: false,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1941,
    isHuman: false,
    image: "dumbo.jpeg"
  },
  {
    name: "Merlin",
    films: ["A Espada Era a Lei"],
    gender: "masculino",
    sings: false,
    hasPowers: true,
    isVillain: false,
    firstAppearance: 1963,
    isHuman: true,
    image: "merlin.jpeg"
  },
  {
    name: "Pinóquio",
    films: ["Pinóquio"],
    gender: "masculino",
    sings: true,
    hasPowers: false,
    isVillain: false,
    firstAppearance: 1940,
    isHuman: false,
    image: "pinoquio.jpeg"
  }
];








