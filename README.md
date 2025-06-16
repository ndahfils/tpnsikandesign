# TP N'SIKAN PROJET ESPOIR - Site Web

Site web moderne et raffiné pour l'entreprise de construction TP N'SIKAN PROJET ESPOIR.

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPOSITORY]
cd tp-nsikan-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🎨 Personnalisation

### Modifier les Couleurs Principales
Les couleurs sont définies dans `src/index.css` :

```css
:root {
  --primary-green: #22c55e;     /* Vert principal */
  --primary-red: #991b1b;       /* Rouge bordeaux */
  --primary-gray: #6b7280;      /* Gris principal */
}
```

**Pour changer les couleurs :**
1. Ouvrir `src/index.css`
2. Modifier les valeurs des variables CSS
3. Sauvegarder le fichier

### Remplacer les Images
**Images du slider (page d'accueil) :**
1. Ouvrir `src/components/HeroSlider.tsx`
2. Modifier le tableau `slides` (lignes 10-35)
3. Remplacer les URLs des images par vos propres images

**Logo de l'entreprise :**
1. Placer votre logo dans `public/images/`
2. Modifier le chemin dans `src/components/Header.tsx` (ligne 35)

### Modifier les Textes
**Informations de contact :**
- Ouvrir `src/components/Footer.tsx`
- Modifier les informations lignes 40-60

**Contenu des pages :**
- Page d'accueil : `src/pages/Home.tsx`
- Services : `src/pages/Services.tsx`
- Projets : `src/pages/Projects.tsx`
- À propos : `src/pages/About.tsx`
- Contact : `src/pages/Contact.tsx`

## 🔧 Administration

### Interface d'Administration
Une interface d'administration est disponible à `/admin/` après déploiement sur Netlify.

**Pour activer l'administration :**
1. Déployer le site sur Netlify
2. Activer Netlify Identity dans les paramètres
3. Inviter des utilisateurs administrateurs
4. Accéder à `[VOTRE_URL]/admin/`

### Gestion du Contenu
L'interface permet de modifier :
- Textes des pages
- Services et projets
- Informations de l'équipe
- Couleurs du site
- Informations de contact

## 📦 Déploiement

### Déploiement sur Netlify

1. **Préparer le build :**
```bash
npm run build
```

2. **Connecter à GitHub :**
   - Créer un repository GitHub
   - Pousser le code sur GitHub

3. **Déployer sur Netlify :**
   - Aller sur [netlify.com](https://netlify.com)
   - Connecter votre repository GitHub
   - Les paramètres de build sont automatiques grâce à `netlify.toml`

4. **Configuration automatique :**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Redirections configurées automatiquement

### Variables d'Environnement
Aucune variable d'environnement n'est requise pour le déploiement de base.

## 🛠️ Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # En-tête avec navigation
│   ├── Footer.tsx      # Pied de page
│   └── HeroSlider.tsx  # Slider de la page d'accueil
├── pages/              # Pages principales
│   ├── Home.tsx        # Page d'accueil
│   ├── Services.tsx    # Page des services
│   ├── Projects.tsx    # Page des projets
│   ├── About.tsx       # Page à propos
│   └── Contact.tsx     # Page de contact
├── App.tsx             # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux et variables CSS

public/
├── admin/             # Interface d'administration
│   ├── index.html     # Page d'admin
│   └── config.yml     # Configuration CMS
└── images/            # Images du site

netlify.toml           # Configuration Netlify
```

## 🎯 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation fluide entre les pages
- ✅ Slider automatique avec images de projets
- ✅ Formulaire de contact fonctionnel
- ✅ Interface d'administration
- ✅ Optimisé pour le SEO
- ✅ Animations et transitions modernes
- ✅ Couleurs personnalisables facilement

## 🔄 Maintenance

### Ajouter un Nouveau Service
1. Ouvrir `src/pages/Services.tsx`
2. Ajouter un objet dans le tableau `services`
3. Sauvegarder et tester

### Ajouter un Nouveau Projet
1. Ouvrir `src/pages/Projects.tsx`
2. Ajouter un objet dans le tableau `projects`
3. Sauvegarder et tester

### Modifier le Menu de Navigation
1. Ouvrir `src/components/Header.tsx`
2. Modifier le tableau `navigation` (ligne 12)
3. Ajouter les routes correspondantes dans `src/App.tsx`

## 📞 Support

Pour toute question ou assistance :
- Consulter la documentation dans les commentaires des fichiers
- Vérifier les variables CSS dans `src/index.css`
- Tester les modifications en local avant déploiement

## 🔒 Sécurité

- Toutes les données sensibles doivent être gérées via l'interface d'administration
- Les formulaires incluent une validation côté client
- L'authentification admin est gérée par Netlify Identity

---

**Développé pour TP N'SIKAN PROJET ESPOIR** - Site moderne et professionnel pour l'entreprise de construction leader en Côte d'Ivoire.