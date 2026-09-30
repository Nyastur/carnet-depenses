# Carnet de dépenses

Carnet de budget en français avec charges fixes, abonnements, dépenses quotidiennes, revenus et suivi du reste du salaire. Thème sombre et interface adaptée au mobile.

## GitHub Pages

La version prête à publier est dans `docs/`.

Dans **Settings → Pages**, choisir **Deploy from a branch**, puis **main** et **/docs**, et enregistrer. Adresse prévue : https://nyastur.github.io/carnet-depenses/

Avec GitHub Free, Pages nécessite un dépôt public. Le dépôt contient uniquement le code, sans données financières ni codes personnels.

## Sauvegarde

Le navigateur chiffre les données en AES-256-GCM avant leur sauvegarde dans Firebase (projet `carnet-films`, collection `expenseVaultsV1`). Chaque carnet possède un code aléatoire de 256 bits, présent dans son lien personnel et sur l’appareil qui l’ouvre. Conserver ce lien : aucun mécanisme de récupération du code n’est prévu. Le bouton « Mon lien personnel » permet de le copier pour un autre appareil.

Les écritures utilisent les préconditions Firestore pour éviter les écrasements lors de modifications simultanées. Les erreurs conservent le formulaire.

## Compilation

`pnpm install`, puis `pnpm build:pages`. Ajouter les fichiers générés dans `docs/` et `docs/.nojekyll` au dépôt pour actualiser le site.

Les anciens fichiers API et Cloudflare sont archivés, ils ne sont pas utilisés par GitHub Pages. Le site précédent et ses données restent disponibles pendant la migration. La migration des données n’est pas encore effectuée.
