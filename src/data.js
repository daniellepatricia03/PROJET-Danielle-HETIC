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
    nom: "Pizza Margherita",
    categorie: "Italien",
    temps: 40,
    tempsCuisson: 15,
    tempsPrep: 25,
    difficulte: "Moyen",
    portions: 4,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    ingredients: ["1 pâte à pizza", "200g de sauce tomate", "200g de mozzarella", "Basilic frais", "Huile d'olive"],
    instructions: [
      "Préchauffer le four à 250°C.",
      "Étaler la pâte à pizza sur une plaque.",
      "Étaler la sauce tomate en laissant les bords libres.",
      "Répartir la mozzarella en tranches.",
      "Enfourner 15 minutes jusqu'à dorure.",
      "Ajouter le basilic frais et un filet d'huile d'olive avant de servir."
    ]
  },
  {
    id: 3,
    nom: "Risotto aux champignons",
    categorie: "Italien",
    temps: 35,
    tempsCuisson: 25,
    tempsPrep: 10,
    difficulte: "Moyen",
    portions: 4,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
    ingredients: ["300g de riz arborio", "300g de champignons", "1L de bouillon", "1 oignon", "50g de parmesan", "Beurre", "Vin blanc"],
    instructions: [
      "Faire revenir l'oignon dans le beurre.",
      "Ajouter le riz et le faire nacrer 2 minutes.",
      "Verser le vin blanc et laisser absorber.",
      "Ajouter le bouillon louche par louche en remuant.",
      "Incorporer les champignons à mi-cuisson.",
      "Terminer avec le parmesan et le beurre."
    ]
  },
  {
    id: 4,
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
    id: 5,
    nom: "Salade Niçoise",
    categorie: "Salade",
    temps: 20,
    tempsCuisson: 10,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    ingredients: ["2 oeufs", "1 boîte de thon", "Haricots verts", "Tomates cerises", "Olives noires", "Anchois", "Vinaigrette"],
    instructions: [
      "Cuire les oeufs durs pendant 10 minutes.",
      "Cuire les haricots verts à la vapeur.",
      "Disposer tous les ingrédients dans un saladier.",
      "Couper les oeufs en quartiers.",
      "Arroser de vinaigrette et servir frais."
    ]
  },
  {
    id: 6,
    nom: "Salade de quinoa",
    categorie: "Salade",
    temps: 25,
    tempsCuisson: 15,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400",
    ingredients: ["200g de quinoa", "1 concombre", "Tomates cerises", "Feta", "Menthe fraîche", "Citron", "Huile d'olive"],
    instructions: [
      "Cuire le quinoa selon les instructions du paquet.",
      "Laisser refroidir complètement.",
      "Couper le concombre et les tomates en dés.",
      "Mélanger tous les ingrédients.",
      "Assaisonner avec citron, huile d'olive et menthe."
    ]
  },
  {
    id: 7,
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
    id: 8,
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
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
    nom: "Velouté de butternut",
    categorie: "Soupe",
    temps: 40,
    tempsCuisson: 30,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400",
    ingredients: ["1 courge butternut", "1 oignon", "50cl de bouillon", "20cl de crème", "Noix de muscade", "Sel", "Poivre"],
    instructions: [
      "Éplucher et couper la butternut en cubes.",
      "Faire revenir l'oignon dans un peu de beurre.",
      "Ajouter les cubes de butternut et le bouillon.",
      "Cuire 25 minutes à feu moyen.",
      "Mixer jusqu'à obtenir un velouté lisse.",
      "Ajouter la crème, la muscade, sel et poivre."
    ]
  },
  {
    id: 12,
    nom: "Soupe de tomates",
    categorie: "Soupe",
    temps: 35,
    tempsCuisson: 25,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    ingredients: ["1kg de tomates", "1 oignon", "2 gousses d'ail", "Basilic", "50cl de bouillon", "Huile d'olive"],
    instructions: [
      "Faire revenir l'oignon et l'ail dans l'huile d'olive.",
      "Ajouter les tomates coupées en quartiers.",
      "Verser le bouillon et laisser mijoter 25 minutes.",
      "Mixer la soupe et passer au tamis.",
      "Rectifier l'assaisonnement et servir avec le basilic."
    ]
  },
  {
    id: 13,
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
    id: 14,
    nom: "Curry de légumes",
    categorie: "Végétarien",
    temps: 35,
    tempsCuisson: 25,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
    ingredients: ["2 pommes de terre", "1 poivron", "1 courgette", "400ml de lait de coco", "2 cuil. de curry", "1 oignon", "Riz basmati"],
    instructions: [
      "Faire revenir l'oignon avec le curry.",
      "Ajouter les légumes coupés en dés.",
      "Verser le lait de coco et laisser mijoter 25 minutes.",
      "Rectifier l'assaisonnement.",
      "Servir avec le riz basmati cuit."
    ]
  },
  {
    id: 15,
    nom: "Gratin de courgettes",
    categorie: "Végétarien",
    temps: 45,
    tempsCuisson: 30,
    tempsPrep: 15,
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400",
    ingredients: ["4 courgettes", "200g de gruyère râpé", "20cl de crème fraîche", "2 oeufs", "Sel", "Poivre", "Noix de muscade"],
    instructions: [
      "Préchauffer le four à 180°C.",
      "Couper les courgettes en rondelles et les faire revenir.",
      "Mélanger la crème, les oeufs, sel, poivre et muscade.",
      "Disposer les courgettes dans un plat à gratin.",
      "Verser l'appareil et couvrir de gruyère.",
      "Cuire 30 minutes jusqu'à dorure."
    ]
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
    nom: "Boeuf bourguignon",
    categorie: "Plat",
    temps: 150,
    tempsCuisson: 120,
    tempsPrep: 30,
    difficulte: "Difficile",
    portions: 6,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400",
    ingredients: ["1kg de boeuf", "1 bouteille de vin rouge", "200g de lardons", "Carottes", "Champignons", "Oignons", "Thym", "Laurier"],
    instructions: [
      "Faire mariner le boeuf dans le vin rouge une nuit.",
      "Faire dorer les morceaux de boeuf dans une cocotte.",
      "Ajouter les lardons, carottes et oignons.",
      "Verser la marinade et les herbes.",
      "Laisser mijoter 2 heures à feu doux.",
      "Ajouter les champignons 30 minutes avant la fin."
    ]
  },
  {
    id: 19,
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
    id: 20,
    nom: "Moules marinières",
    categorie: "Poisson",
    temps: 25,
    tempsCuisson: 15,
    tempsPrep: 10,
    difficulte: "Facile",
    portions: 2,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    ingredients: ["2kg de moules", "1 verre de vin blanc", "2 échalotes", "Persil", "Beurre", "Poivre"],
    instructions: [
      "Nettoyer et gratter les moules.",
      "Faire revenir les échalotes dans le beurre.",
      "Ajouter le vin blanc et porter à ébullition.",
      "Ajouter les moules et couvrir.",
      "Cuire 5 minutes en remuant jusqu'à ouverture.",
      "Parsemer de persil et servir immédiatement."
    ]
  }
]

export default recettes