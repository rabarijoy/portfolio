# 🚀 Guide de démarrage rapide

## Installation rapide

```bash
# 1. Installer les dépendances
lando npm install

# 2. Copier le fichier d'environnement
cp env.template .env

# 3. Éditer .env et configurer vos variables (voir README.md)

# 4. Initialiser la base de données
lando npm run db:generate
lando npm run db:migrate
lando npm run db:seed

# 5. Démarrer l'environnement
lando start
lando npm run dev
```

## Accès

- **Site** : http://localhost:3000
- **Admin** : http://localhost:3000/fr/admin (ou /en/admin)
- **Prisma Studio** : `lando prisma studio` (http://localhost:5555)

## Identifiants admin par défaut

⚠️ **Changez ces identifiants en production !**

- Email : `admin@example.com`
- Mot de passe : `admin123`

## Commandes utiles

```bash
# Développement
lando npm run dev

# Build
lando npm run build

# Base de données
lando npm run db:migrate    # Créer une migration
lando prisma studio         # Interface graphique
lando npm run db:seed       # Remplir avec des données de test

# Linter
lando npm run lint
```

## Structure des routes

- `/fr` ou `/en` : Page d'accueil
- `/fr/admin` : Back-office (protégé)
- `/fr/admin/login` : Connexion admin
- `/api/contact` : Formulaire de contact
- `/api/projects` : API publique projets
- `/api/prices` : API publique tarifs
- `/api/admin/*` : API admin (protégée)

## Prochaines étapes

1. Configurez votre clé API Resend dans `.env`
2. Changez le mot de passe admin
3. Personnalisez les traductions dans `messages/`
4. Ajoutez vos projets via le back-office
5. Personnalisez le design selon votre maquette Figma

Pour plus de détails, consultez le [README.md](README.md).

