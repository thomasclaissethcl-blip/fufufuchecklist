# Check-list d'écoute

Application statique, conçue pour une utilisation sur smartphone et pour GitHub Pages.

## Installation sur GitHub Pages

1. Crée un dépôt GitHub.
2. Dépose `index.html`, `styles.css` et `app.js` à la racine du dépôt.
3. Dans **Settings > Pages**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Ouvre l'adresse fournie par GitHub Pages.

Le site ne nécessite aucun serveur applicatif, compte ou service externe.

## Parcours

1. Choisis un système : chaîne hi-fi, voiture, écouteurs ou haut-parleur de smartphone.
2. Choisis un morceau parmi les dix titres prédéfinis.
3. Évalue les critères propres au système. Le bouton `?` précise quoi écouter, ce qu'il faut entendre et ce qu'il faut signaler. Chaque point accepte une précision facultative.
4. Enregistre l'écoute et passe au morceau suivant, ou sélectionne un autre morceau ou système.

La barre supérieure reste visible. Pendant le questionnaire, le titre du morceau et la progression restent visibles sous cette barre et se compactent automatiquement au défilement ; ils reprennent leur taille initiale en haut de page. Le bouton de retour et le menu hamburger permettent de naviguer. Toute sortie d'un questionnaire modifié affiche une invitation à enregistrer, abandonner les modifications ou rester dans la fiche. En cas de fermeture ou d'actualisation de l'onglet, le navigateur peut afficher un avertissement de changements non enregistrés.

Le menu contient l'enregistrement local, l'export JSON, l'import JSON, l'export PDF, le changement de système ou de morceau, ainsi que l'effacement des données locales.

## Sauvegarde et confidentialité

Les réponses sont enregistrées dans `localStorage` sur l'appareil et le navigateur utilisés. Le stockage local peut être supprimé par le navigateur ou en navigation privée. Il est conseillé d'exporter régulièrement le projet en JSON.

Le JSON permet de reprendre le travail sur un autre appareil ou de restaurer une session ; un import remplace les données locales existantes. Chaque couple **système + morceau** correspond à une fiche unique : si tu le sélectionnes de nouveau, tu retrouves les réponses enregistrées.

Le rapport PDF est généré directement dans le navigateur, sans connexion. Il inclut toutes les écoutes enregistrées et les commentaires facultatifs, sans note générale.

Format de sauvegarde : `version: 2`. Les exports de la version précédente de TRNSLT ne sont pas directement compatibles, car les questions et le modèle des données ont changé. Ils restent importables dans leur application d'origine.

## Fichiers

- `index.html` : structure accessible de l'interface.
- `styles.css` : interface mobile-first.
- `app.js` : questions adaptées, interactions, sauvegarde, import/export et génération PDF autonome.

Aucune dépendance ni requête externe.

Cette mise à jour conserve le format des données et la clé de stockage de la version 2 : les écoutes déjà enregistrées restent accessibles sur le même navigateur et la même origine GitHub Pages.
