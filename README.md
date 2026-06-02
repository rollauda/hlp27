# hlp27 — site HLP saison 2026-27

Site Docusaurus de la spécialité **Humanités, Littérature, Philosophie** (Première + Terminale), miroir de `phil27`. Prendra la suite de `hlp25` / `hlpt.profauda.fr`.

## Structure (plugins docs)

| Section | URL | Source |
|---|---|---|
| Première | `/premiere/` | `premiere/` |
| Terminale | `/terminale/` | `terminale/` |
| Axes | `/axes/` | `axes/` |
| Auteurs | `/auteurs/` | `auteurs/` |
| Méthode | `/methode/` | `methode/` |

Les leçons sont publiées par `/hlp-publier-lecon` depuis le coffre IPCRA (`1 PROJETS/Lycee/prepa-hlp/`).

## Développement

```bash
npm install      # première fois (deps non versionnées)
npm start        # serveur local
npm run build    # build de production
```

## Étapes restantes (scaffold local — à finaliser par Rolland)

1. **`npm install`** puis **`npm run build`** pour valider le scaffold (non testé à la création).
2. **Créer le dépôt GitHub** `rollauda/hlp27` et `git push` (le déploiement GitHub Pages est déjà câblé dans `.github/workflows/deploy.yml`).
3. **DNS** : faire pointer `hlp27.profauda.fr` (placeholder) puis basculer `hlp.profauda.fr` à la rentrée ; figer `hlp25` en lecture seule.
4. **Script de publication** : adapter `publier-lecon.py` de phil27 pour les deux niveaux (`premiere/` + `terminale/`) — voir `/hlp-publier-lecon`.
5. Affiner branding (favicon, logo, couleurs `src/css/custom.css`) si souhaité.

> Créé le 2026-06-02 par scaffold local depuis phil27. **Aucun dépôt distant créé ni push effectué** (en attente de confirmation de Rolland).
