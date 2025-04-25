# React project

[![React Logo](src/images/react-logo.svg)](https://fr.react.dev)

## Install

```bash
cd react-project
npm install
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

## GitHub Pages

## 🌐 Définir VITE_BASE_PATH sur GitHub

Pour que le chemin des assets fonctionne en production sur GitHub Pages :

1. Aller dans **Settings > Secrets and variables > Actions**.
2. Onglet **Variables** → **New repository variable**
3. Nom : `VITE_BASE_PATH`
4. Valeur : `/react-project/`

Ensuite, dans le fichier `.github/workflows/deploy.yml`, ajouter la variable au moment du build :

```yaml
- name: Build the app
  run: npm run build
  env:
    VITE_BASE_PATH: ${{ vars.VITE_BASE_PATH }}
```

### 🔐 Autoriser GitHub Actions à déployer avec `GITHUB_TOKEN`

Pour que l'action GitHub puisse **pousser vers la branche `gh-pages`**, il faut autoriser le `GITHUB_TOKEN` à écrire dans le dépôt.

✅ Étapes à suivre

1. Ouvrir le dépôt sur **GitHub**.
2. Aller dans **Settings** → **Actions** → **General**.
3. Faire défiler jusqu’à la section **"Workflow permissions"**.
4. Sélectionner **"Read and write permissions"**.
5. Cliquer sur **Save**.

---

### 💡 Pourquoi c’est nécessaire ?

Par défaut, GitHub donne au `GITHUB_TOKEN` seulement les permissions en lecture.  
Mais pour **déployer sur GitHub Pages**, l'action a besoin de **pousser le contenu du dossier `/build`** dans la branche `gh-pages`.

Cette autorisation permet au bot `github-actions[bot]` de :

- Créer ou mettre à jour la branche `gh-pages`
- Déployer automatiquement à chaque push sur `main`

---

### 📦 Exemple d'utilisation

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```
