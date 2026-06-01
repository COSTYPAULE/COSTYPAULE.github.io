#!/bin/bash
# Déploiement du portfolio sur GitHub Pages (profil COSTYPAULE)
set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="${SOURCE_DIR:-$HOME/MonPortfolio}"
REMOTE="https://github.com/COSTYPAULE/COSTYPAULE.github.io.git"

echo "→ Synchronisation depuis $SOURCE_DIR"
mkdir -p "$REPO_DIR/assets"
cp "$SOURCE_DIR/index.html" "$SOURCE_DIR/style.css" "$SOURCE_DIR/script.js" "$SOURCE_DIR/data.js" "$REPO_DIR/"
cp "$SOURCE_DIR/assets/CV_Michelle_COSTY.pdf" "$REPO_DIR/assets/" 2>/dev/null || true

cd "$REPO_DIR"

if ! gh auth status &>/dev/null; then
  echo "Connexion GitHub requise…"
  gh auth login -h github.com -p https -w
fi

# Vérifier si Git est correctement initialisé (pas seulement si le dossier .git existe)
is_git_repo() {
  git rev-parse --is-inside-work-tree &>/dev/null
}

if ! is_git_repo; then
  echo "→ Initialisation du dépôt Git local…"
  # Supprimer un éventuel .git incomplet
  if [ -e .git ]; then
    rm -rf .git
  fi
  git -c core.hooksPath=/dev/null init -b main
  git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
  # Récupérer l'historique distant si le dépôt GitHub existe déjà
  if git ls-remote origin main &>/dev/null; then
    git fetch origin main
    git reset --soft origin/main 2>/dev/null || git checkout -B main
  fi
fi

git remote set-url origin "$REMOTE"
git add -A

if git diff --staged --quiet; then
  echo "Aucun changement à publier."
  exit 0
fi

git commit -m "Mise à jour portfolio professionnel (CV, photo à gauche)"
git branch -M main
git pull origin main --rebase 2>/dev/null || true
git push -u origin main

echo ""
echo "Portfolio déployé : https://costypaule.github.io"
