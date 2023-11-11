# PROJET 12 - Développez un tableau de bord d'analytics avec React : SPORTSEE
## Outils Nécessaires 
Vous devez avoir au préalable NodeJs sur votre machine (https://nodejs.org/en/download/) et git (https://git-scm.com/downloads)
Ouvrer un terminal dans le dossier de votre choix
Ensuite : 
`git clone https://github.com/Litibe/React__OCR_P12-sportsee.git` pour cloner

`cd React__OCR_P12-sportsee` pour aller dans le dossier du projet

## Lancement projet React pour le frontend
` npm i ` pour installer les dépendances nécesssaires au projet

` npm start ` pour lancer react en serveur de développement sur `http://localhost:3001 `.

`npm run build` pour réaliser le serveur de production puis ` serve -s build` pour le lancer sur  `http://localhost:3001 `.

- Une page de saisie d'ID a été ajouté en attendant d'autres instruction de développement avec des données mockées (peu importe l'id saisie)
- possibilité d'utiliser le serveur Backend avec id 12 et 18 en modifiant le fichier src => pages => home.js et en mettant la variable  `const mocked = true;` à `const mocked = false;`
- possibilité d'utiliser le graphique "Score" en 2 version, soit avec PieChart soit avec RadialBarChart. En modifiant le fichier src => pages => home.js vous pouvez changer la variable  `const scoreRadialVersion = true;` pour RadialBarChart à `const scoreRadialVersion = false;` pour PieChart


## Lancement du project OCR pour le backend

`git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git` pour cloner

`cd P9-front-end-dashboard` pour aller dans le dossier du projet

` npm start ` pour lancer react en serveur de développement sur `http://localhost:3000 `.
