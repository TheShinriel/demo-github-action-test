# Comment exécuter des tests

## Comment lancer les tests ?

Installer les dépendances :
```bash
npm install
yarn install
pnpm install
```

Exécuter les tests
```bash
npm run test
yarn run test
pnpm run test
```

Pour aller plus loin vous allez devoir faire un commit et un push.
Pour ce faire pas besoin de modifier un fichier pour forcer une mise à jour, on va simplement faire un commit vide :
```bash
git commit --allow-empty -m "Commit totalement vide !"
git push
```

Le push a du lancer votre workflow sur github

N'hésitez pas à aller lire les commentaires dans [la définition de l'action](./.github/workflows/tests.yaml)

## Script "test"

Défini dans le `package.json` via 

```json
"scripts": {
    "test": "jest"
},
```

Un script doit normalement être exécuté via 
```bash
npm run test
yarn run test
pnpm run test
```

Même si dans le cas de yarn et pnpm on peut aussi spécifier directement les scripts sans mentionner le `run` sauf s'il est en collision avec une commande existante.
```bash
yarn test
pnpm test
```

Pour ce cas précis npm l'accepte aussi, parce qu'il est standardisé, c'est un des rares cas où c'est possible, donc attention au piège !
```bash
npm test
```


## Composition du projet

Ce projet ce compose de `Typescript` et de `Jest` installé uniquement en dev, vu qu'aucune des deux n'aurais d'intérêt à être exécuter en production.

Pour Jest, il est sûr qu'on n'exécuterait pas de test sur le serveur de production. Si vous avez un doute pour Typescript, rappelez-vous que Typescript n'est qu'une surcouche et qu'à moins d'exécuter avec des moteurs Typescript comme Deno, il est sûr que vous l'exécuter en réalité du javascript après avoir transpilé, c'est à dire lors d'une phase de build en transformant votre Typescript en Javascript.

```json
{
  "devDependencies": {
    "typescript": "^5.2.2",
    "jest": "^29.6.4"
  }
}
```

## Formation sur GitHub Actions

Ce projet fait partit d'une formation sur l'utilisation de GitHub Actions et découvrir comment automatiser vos intégrations continues sur Udemy : [Automatiser tout sur vos projets avec Github Actions](https://www.udemy.com/course/automatiser-tout-sur-vos-projets-avec-github-actions/?referralCode=268A353A1CAE10611EBD).

N'hésitez pas à explorer les fonctionnalités de Chromatic et de Storybook pour améliorer la qualité et la robustesse de vos composants d'interface utilisateur. Happy coding! 🚀