const recettes = [
  {
    id: 1,
    nom: "Pasta Carbonara",
    categorie: "Italien",
    temps: 20,
    tempsCuisson: 10,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    ingredients: ["200g de pâtes", "100g de lardons", "2 oeufs", "50g de parmesan", "Poivre"],
    instructions: [
      "Cuire les pâtes dans de l'eau bouillante salée pendant 8 minutes.",
      "Faire revenir les lardons dans une poêle sans matière grasse.",
      "Dans un bol, mélanger les oeufs et le parmesan râpé.",
      "Égoutter les pâtes et les mélanger hors du feu avec les lardons.",
      "Ajouter le mélange oeuf-parmesan et poivrer généreusement."
    ]
  },
  {
    id: 2,
    nom: "Salade César",
    categorie: "Salade",
    temps: 15,
    tempsCuisson: 0,
    tempsPrep: 15,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    ingredients: ["1 laitue romaine", "Croûtons", "50g de parmesan", "Sauce César", "Poivre"],
    instructions: [
      "Laver et essorer la laitue romaine.",
      "Couper les feuilles en morceaux dans un grand saladier.",
      "Ajouter les croûtons et le parmesan râpé.",
      "Verser la sauce César et mélanger délicatement.",
      "Poivrer et servir immédiatement."
    ]
  },
  {
    id: 3,
    nom: "Tarte aux pommes",
    categorie: "Dessert",
    temps: 45,
    tempsCuisson: 35,
    tempsPrep: 10,
    difficulte: "Moyen",
    portions: 6,
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400",
    ingredients: ["1 pâte brisée", "4 pommes", "50g de sucre", "1 sachet de sucre vanillé", "Cannelle"],
    instructions: [
      "Préchauffer le four à 180°C.",
      "Étaler la pâte brisée dans un moule à tarte.",
      "Éplucher les pommes et les couper en fines lamelles.",
      "Disposer les lamelles de pommes sur la pâte.",
      "Saupoudrer de sucre, sucre vanillé et cannelle.",
      "Cuire au four pendant 35 minutes jusqu'à dorure."
    ]
  },
  {
    id: 4,
    nom: "Soupe à l'oignon",
    categorie: "Soupe",
    temps: 40,
    tempsCuisson: 30,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    ingredients: ["4 oignons", "1L de bouillon de boeuf", "4 tranches de pain", "100g de gruyère", "Beurre"],
    instructions: [
      "Éplucher et émincer les oignons finement.",
      "Les faire revenir dans le beurre à feu doux pendant 15 minutes.",
      "Ajouter le bouillon de boeuf et laisser mijoter 20 minutes.",
      "Verser la soupe dans des bols allant au four.",
      "Poser une tranche de pain sur chaque bol et couvrir de gruyère râpé.",
      "Gratiner sous le gril du four pendant 5 minutes."
    ]
  }
]

export default recettes