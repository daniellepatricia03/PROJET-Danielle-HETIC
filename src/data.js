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
  },
  {
    id: 5,
    nom: "Poulet rôti aux herbes",
    categorie: "Plat",
    temps: 90,
    tempsCuisson: 75,
    tempsPrep: 15,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400",
    ingredients: ["1 poulet entier", "Thym", "Romarin", "3 gousses d'ail", "Beurre", "Sel", "Poivre"],
    instructions: [
      "Préchauffer le four à 200°C.",
      "Mélanger le beurre avec le thym, romarin et l'ail écrasé.",
      "Badigeonner le poulet avec ce mélange.",
      "Saler et poivrer généreusement.",
      "Enfourner pendant 1h15 en arrosant régulièrement.",
      "Laisser reposer 10 minutes avant de servir."
    ]
  },
  {
    id: 6,
    nom: "Ratatouille",
    categorie: "Végétarien",
    temps: 60,
    tempsCuisson: 45,
    tempsPrep: 15,
    difficulte: "Moyen",
    portions: 4,
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=400",
    ingredients: ["2 courgettes", "2 aubergines", "3 tomates", "2 poivrons", "Herbes de Provence", "Huile d'olive"],
    instructions: [
      "Couper tous les légumes en rondelles fines.",
      "Faire revenir l'oignon et l'ail dans l'huile d'olive.",
      "Ajouter les légumes et les herbes de Provence.",
      "Laisser mijoter à feu doux pendant 45 minutes.",
      "Rectifier l'assaisonnement et servir chaud."
    ]
  },
  {
    id: 7,
    nom: "Crème brûlée",
    categorie: "Dessert",
    temps: 50,
    tempsCuisson: 40,
    tempsPrep: 10,
    difficulte: "Moyen",
    portions: 4,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400",
    ingredients: ["50cl de crème liquide", "4 jaunes d'oeufs", "80g de sucre", "1 gousse de vanille", "Cassonade"],
    instructions: [
      "Préchauffer le four à 150°C.",
      "Faire chauffer la crème avec la vanille.",
      "Battre les jaunes d'oeufs avec le sucre.",
      "Verser la crème chaude sur les oeufs en mélangeant.",
      "Répartir dans des ramequins et cuire au bain-marie 40 minutes.",
      "Réfrigérer 2h puis caraméliser la cassonade au chalumeau."
    ]
  },
  {
    id: 8,
    nom: "Saumon en papillote",
    categorie: "Poisson",
    temps: 30,
    tempsCuisson: 20,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
    ingredients: ["2 pavés de saumon", "1 citron", "Aneth", "Sel", "Poivre", "Huile d'olive"],
    instructions: [
      "Préchauffer le four à 180°C.",
      "Poser chaque pavé sur une feuille de papier alu.",
      "Arroser d'huile d'olive et de jus de citron.",
      "Ajouter l'aneth, le sel et le poivre.",
      "Fermer les papillotes et enfourner 20 minutes.",
      "Servir directement dans la papillote."
    ]
  },
  {
    id: 9,
    nom: "Quiche Lorraine",
    categorie: "Plat",
    temps: 55,
    tempsCuisson: 40,
    tempsPrep: 15,
    difficulte: "Facile",
    portions: 6,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    ingredients: ["1 pâte brisée", "200g de lardons", "3 oeufs", "20cl de crème fraîche", "20cl de lait", "Sel", "Poivre", "Noix de muscade"],
    instructions: [
      "Préchauffer le four à 180°C.",
      "Étaler la pâte dans un moule et la piquer avec une fourchette.",
      "Faire revenir les lardons à la poêle.",
      "Battre les oeufs avec la crème, le lait, sel, poivre et muscade.",
      "Répartir les lardons sur la pâte et verser l'appareil.",
      "Cuire au four pendant 40 minutes jusqu'à dorure."
    ]
  },
  {
    id: 10,
    nom: "Mousse au chocolat",
    categorie: "Dessert",
    temps: 20,
    tempsCuisson: 5,
    tempsPrep: 15,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400",
    ingredients: ["200g de chocolat noir", "4 oeufs", "30g de sucre", "1 pincée de sel"],
    instructions: [
      "Faire fondre le chocolat au bain-marie.",
      "Séparer les blancs des jaunes d'oeufs.",
      "Mélanger les jaunes avec le chocolat fondu.",
      "Monter les blancs en neige ferme avec le sel.",
      "Incorporer délicatement les blancs au mélange chocolat.",
      "Réfrigérer au moins 2 heures avant de servir."
    ]
  }
]

export default recettes