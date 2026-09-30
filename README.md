# Mon carnet de dépenses

Carnet personnel en français pour les charges fixes, les abonnements, les achats quotidiens et les revenus, avec un bilan mensuel et un historique du reste du salaire. Interface sombre adaptée au mobile et à l’ordinateur.

Site en service : https://mon-carnet-depenses.xelisa44.chatgpt.site

## Sauvegarde

Les données sont conservées dans une base Cloudflare D1. Ce dépôt contient uniquement le code et les migrations, sans données financières personnelles ni clés secrètes.

## Environnement

Application React / Vinext, exécutée sur Cloudflare Workers. Installation avec pnpm, puis `pnpm build`. La liaison de base de données s’appelle `DB`. Le schéma et les migrations sont dans `db/` et `drizzle/`.

GitHub Pages seul ne peut pas exécuter l’API et la base de données de ce projet. La copie du code sur GitHub ne déplace pas les données ni l’hébergement actuel.
