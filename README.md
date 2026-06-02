# hlp27 — site HLP saison 2026-27

Site Docusaurus de la spécialité **Humanités, Littérature, Philosophie** (Première + Terminale), miroir de `phil27`. Prendra la suite de `hlp25` / `hlpt.profauda.fr`.

## Structure (plugins docs)

| Section | URL | Source | Dans le menu |
|---|---|---|---|
| Première | `/premiere/` | `premiere/` | oui |
| Terminale | `/terminale/` | `terminale/` | oui |
| Méthode | `/methode/intro` | `methode/` | oui |
| Axes | `/axes/` | `axes/` | non (masqué) |
| Auteurs | `/auteurs/` | `auteurs/` | non (masqué) |

> **Axes** et **Auteurs** existent (pages générées, accessibles par URL) mais sont retirés de la navbar. Pour les réafficher : remettre les deux lignes correspondantes dans `themeConfig.navbar.items` de `docusaurus.config.js`.

> Chaque section est un plugin docs avec son propre `routeBasePath`. Le `slug` dans `intro.md` est **relatif** au routeBasePath → `slug: /` (et `slug: /intro` pour `methode/`), sinon la route est doublée (`/premiere/premiere`) et les liens du menu cassent.

Les leçons sont publiées par `/hlp-publier-lecon` depuis le coffre IPCRA (`1 PROJETS/Lycee/prepa-hlp/`).

## Développement

```bash
npm install      # première fois (deps non versionnées)
npm start        # serveur local
npm run build    # build de production
```

> **Réglages de version (sinon le build échoue après un `npm install` neuf)** :
> - Tous les paquets `@docusaurus/*` sont épinglés à la **même** version exacte (`3.7.0`, sans `^`). Sinon `theme-mermaid` part en 3.10.x et casse la vérification de version.
> - `package.json` contient `"overrides": { "webpack": "5.95.0" }` : les webpack récents (5.107+) durcissent le schéma de `ProgressPlugin` et font planter `webpackbar@6`.

## Publier une mise à jour

Le déploiement est **automatique** : tout push sur `main` déclenche le workflow `deploy.yml` (build + publication sur GitHub Pages). Il suffit donc de committer et pousser.

```bash
git add -A                       # ou git add <fichiers> pour un commit ciblé
git commit -m "Décris la modif"  # ex. "Publie la leçon 03 (Terminale)"
git push                         # déclenche le build + déploiement
```

Suivi et vérification :

```bash
gh run watch          # suit le déploiement en cours jusqu'à la fin
gh run list --limit 5 # historique des derniers déploiements
```

Le site est en ligne ~1 à 2 min après la fin du workflow. En cas d'échec, `gh run view --log-failed` montre l'erreur.

> Première fois sur une nouvelle machine : `git clone https://github.com/rollauda/hlp27.git` puis `npm install`.

## Statut du déploiement

- ✅ Dépôt `rollauda/hlp27` (public), `main` poussée, CI `deploy.yml` opérationnelle.
- ✅ GitHub Pages activé depuis la branche `gh-pages`, CNAME `hlp27.profauda.fr`.
- URL par défaut en attendant le DNS : https://rollauda.github.io/hlp27/

## Étapes restantes

1. **DNS** : faire pointer `hlp27.profauda.fr` vers GitHub Pages (CNAME `hlp27` → `rollauda.github.io`, ou les 4 A records d'apex `185.199.108–111.153`). Puis cocher **Enforce HTTPS** dans Settings → Pages une fois le certificat émis. Basculer `hlp.profauda.fr` à la rentrée ; figer `hlp25` en lecture seule.
2. **Script de publication** : adapter `publier-lecon.py` de phil27 pour les deux niveaux (`premiere/` + `terminale/`) — voir `/hlp-publier-lecon`.
3. Affiner branding (favicon, logo, couleurs `src/css/custom.css`) si souhaité.
4. **Maintenance CI** : les actions du workflow tournent sur Node 20 (déprécié, retrait des runners prévu sept. 2026). Bumper `actions/checkout`, `actions/setup-node` et `peaceiris/actions-gh-pages` quand l'occasion se présente.

> Scaffold créé le 2026-06-02 depuis phil27, mis en production le même jour (palette verte reprise de hlp25, menu réduit à Première · Terminale · Méthode).
