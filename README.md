# Portfolio - Joy Rabari

Portfolio professionnel développé avec Next.js 15, TypeScript, Prisma et Tailwind CSS.

## 🚀 Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Base de données** : SQLite (via Prisma)
- **i18n** : next-intl (Français/Anglais)
- **Emails** : Resend
- **Authentification** : JWT
- **Environnement** : Lando

## 📋 Prérequis

- Node.js 20+
- Lando installé et configuré
- Compte Resend (gratuit) pour les emails

## 🛠️ Installation

### 1. Cloner le dépôt

```bash
git clone <votre-repo>
cd portfolio-joy
```

### 2. Installer les dépendances

```bash
lando npm install
```

### 3. Configuration de l'environnement

Copiez le fichier `env.template` vers `.env` :

```bash
cp env.template .env
```

Éditez le fichier `.env` et configurez les variables suivantes :

```env
# Base de données (SQLite)
DATABASE_URL="file:./prisma/dev.db"

# Secret JWT pour l'authentification admin (changez-le en production !)
JWT_SECRET="votre-secret-jwt-super-securise"

# Clé API Resend (obtenez-la sur https://resend.com/api-keys)
RESEND_API_KEY="re_votre_cle_api"

# URL du site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Email admin (où seront envoyés les messages du formulaire de contact)
ADMIN_EMAIL="rabarijaonajoy@gmail.com"
```

### 4. Initialiser la base de données

```bash
# Générer le client Prisma
lando npm run db:generate

# Créer les migrations
lando npm run db:migrate

# Remplir la base avec des données de test
lando npm run db:seed
```

**⚠️ Important** : Le seed crée un utilisateur admin par défaut :
- Email : `admin@example.com`
- Mot de passe : `admin123`

**Changez ces identifiants en production !**

### 5. Démarrer l'environnement de développement

```bash
# Démarrer Lando
lando start

# Lancer le serveur de développement
lando npm run dev
```

Le site sera accessible sur `http://localhost:3000` (ou le port configuré par Lando).

## 📁 Structure du projet

```
portfolio-joy/
├── app/                    # App Router Next.js
│   ├── [locale]/          # Routes multilingues (fr/en)
│   │   ├── admin/        # Back-office
│   │   └── page.tsx      # Page d'accueil
│   ├── api/              # API Routes
│   │   ├── admin/        # Routes admin (protégées)
│   │   ├── auth/         # Authentification
│   │   ├── contact/      # Formulaire de contact
│   │   ├── projects/     # API publique projets
│   │   └── prices/       # API publique tarifs
│   ├── layout.tsx        # Layout racine
│   ├── globals.css       # Styles globaux
│   ├── sitemap.ts        # Génération sitemap
│   └── robots.ts         # Configuration robots.txt
├── components/           # Composants React réutilisables
├── lib/                  # Utilitaires
│   ├── prisma.ts        # Client Prisma
│   ├── auth.ts          # Authentification JWT
│   ├── email.ts         # Service d'emails
│   ├── validation.ts    # Schémas Zod
│   ├── middleware-auth.ts # Middleware auth
│   └── seo.ts           # Utilitaires SEO
├── messages/            # Fichiers de traduction
│   ├── fr.json         # Français
│   └── en.json         # Anglais
├── prisma/             # Prisma
│   ├── schema.prisma   # Schéma de base de données
│   └── seed.ts         # Données de test
├── .lando.yml          # Configuration Lando
├── env.template        # Template variables d'environnement
└── package.json        # Dépendances npm
```

## 🎮 Commandes Lando

### Commandes de base

```bash
# Démarrer l'environnement
lando start

# Arrêter l'environnement
lando stop

# Reconstruire les conteneurs
lando rebuild

# Voir les informations de l'environnement
lando info
```

### Commandes npm via Lando

```bash
# Installer les dépendances
lando npm install

# Lancer le serveur de développement
lando npm run dev

# Build de production
lando npm run build

# Lancer le serveur de production
lando npm start

# Linter
lando npm run lint
```

### Commandes Prisma via Lando

```bash
# Générer le client Prisma
lando prisma generate

# Créer une migration
lando prisma migrate dev

# Appliquer les migrations
lando prisma migrate deploy

# Ouvrir Prisma Studio (interface graphique)
lando prisma studio

# Remplir la base avec des données de test
lando npm run db:seed
```

## 🔐 Back-office

### Accès

Le back-office est accessible à l'adresse : `/admin` (ou `/fr/admin`, `/en/admin`)

### Authentification

1. Connectez-vous avec les identifiants créés par le seed :
   - Email : `admin@example.com`
   - Mot de passe : `admin123`

2. **Important** : Changez le mot de passe en production !

### Fonctionnalités

- **Gestion des projets** : CRUD complet pour les projets portfolio
- **Gestion des tarifs** : CRUD complet pour les tarifs de prestations
- Interface simple et intuitive

## 📧 Formulaire de contact

Le formulaire de contact utilise Resend pour envoyer les emails.

### Configuration Resend

1. Créez un compte sur [Resend](https://resend.com) (gratuit jusqu'à 3000 emails/mois)
2. Générez une clé API
3. Ajoutez-la dans votre fichier `.env` : `RESEND_API_KEY`

### Protection anti-spam

Le formulaire inclut un champ honeypot invisible pour protéger contre les spams automatiques.

## 🌍 Internationalisation (i18n)

Le site supporte le français et l'anglais.

- Routes : `/fr/*` et `/en/*`
- Fichiers de traduction : `messages/fr.json` et `messages/en.json`
- Locale par défaut : Français

### Ajouter une traduction

1. Ajoutez la clé dans `messages/fr.json`
2. Ajoutez la même clé dans `messages/en.json`
3. Utilisez `useTranslations('namespace')` dans vos composants

## 🗄️ Base de données

### Schéma

- **User** : Utilisateurs admin
- **Project** : Projets portfolio
- **Price** : Tarifs de prestations

### Migrations

```bash
# Créer une nouvelle migration
lando prisma migrate dev --name nom_de_la_migration

# Appliquer les migrations en production
lando prisma migrate deploy
```

### Prisma Studio

Interface graphique pour visualiser et modifier les données :

```bash
lando prisma studio
```

Ouvre une interface web sur `http://localhost:5555`

## 🚀 Déploiement

### Build de production

```bash
lando npm run build
```

### Variables d'environnement en production

Assurez-vous de configurer toutes les variables d'environnement sur votre plateforme d'hébergement :

- `DATABASE_URL` : URL de votre base de données (PostgreSQL recommandé en production)
- `JWT_SECRET` : Secret JWT fort et unique
- `RESEND_API_KEY` : Clé API Resend
- `NEXT_PUBLIC_SITE_URL` : URL de votre site en production
- `ADMIN_EMAIL` : Email admin
- `NODE_ENV` : `production`

### Plateformes supportées

Le site peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- OVH
- Tout hébergeur supportant Node.js

### Migration vers PostgreSQL (production)

Pour la production, il est recommandé d'utiliser PostgreSQL :

1. Modifiez `prisma/schema.prisma` :
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. Mettez à jour `DATABASE_URL` dans `.env`

3. Exécutez les migrations :
   ```bash
   lando prisma migrate deploy
   ```

## 🔒 Sécurité

- Authentification JWT avec cookies HTTP-only
- Validation des données avec Zod
- Protection CSRF via SameSite cookies
- Protection anti-spam (honeypot) sur le formulaire de contact
- Validation côté serveur et client
- Pas de stockage de données sensibles côté client

## 📝 SEO

- Sitemap.xml généré automatiquement
- Robots.txt configuré
- Meta tags dynamiques via `lib/seo.ts`
- Structure HTML sémantique
- Optimisation des images avec `next/image`

## 🐛 Dépannage

### Problème de connexion à la base de données

```bash
# Vérifiez que la base existe
ls -la prisma/*.db

# Régénérez Prisma
lando npm run db:generate

# Recréez les migrations
lando prisma migrate reset
lando npm run db:seed
```

### Problème avec Lando

```bash
# Reconstruire complètement
lando rebuild -y

# Vérifier les logs
lando logs
```

### Erreurs TypeScript

```bash
# Vérifier les erreurs
lando npm run lint

# Régénérer les types Next.js
rm -rf .next
lando npm run dev
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Resend](https://resend.com/docs)
- [Documentation Lando](https://docs.lando.dev)

## 📄 Licence

Ce projet est privé et propriétaire.

## 👤 Auteur

**Joy Rabari**
- Email : rabarijaonajoy@gmail.com

---

Dernière mise à jour : 2024
