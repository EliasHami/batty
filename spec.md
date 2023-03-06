# But du projet

Le projet a pour but premier de generer des devis et factures pour des entreprises dans le domaine du génie civil.  
Par la suite j'ajouterai toutes les fonctionnalités de génie civil. Il sera par exemple possible de générer des rapports de chantier.  
Il est basé sur le framework Next.js et utilise AWS Amplify pour le backend et l'hébergement.  
Pour le css j'utilise Material-UI.
Pour le formulaire j'utilise React-hook-form et Yup.

# Deadline

- 20 avril 2023 : version alpha (MVP) --> à faire tester par assiya et yanis
  objectif : avoir tout les CRUD pour pouvoir générer un devis / facture
  - p1 : CRUD chantier
  - p2 : CRUD devis / facture (sans la personnalisation)
  - p3 : CRUD client
  - p4 : CRUD service
  - p5 : CRUD Gestion de compte
- 20 juin 2023 : version 0.1.0
  - p1 : Envoi du mail de devis / facture
  - p1 : Landing page
  - p2 : Gestion de l'abonnement
- 20 aout 2023 : version 0.2.0
  - p1 : Refaire la Navigation
  - p3 : Newsletter
- 20 aout 2023 : version 0.3.0
  - p1 : Authentification --> Migrer vers NextAuth + Prisma
  - p2 : Design --> Miger vers MUI
  - p3 : API --> Migrer vers Prisma

# Specs

- Gestion de l'abonnement
  - Créer un plan d'abonnement et afficher sous forme de modale
  - bloquer certaines pages quand la periode d'essai est finie
- Landing page
  - Créer la page pour le domaine batty.xxx et lier à l'application (app.batty.xxx)
    - quand on va dans l'application pour créer un compte : afficher que c'est version d'essai
  - Afficher les fonctionnalités de l'application
  - Afficher les tarifs
  - Afficher les témoignages
  - Footer (générer avec chatgpt)
    À propos
      Contactez-nous
      Mentions légales
      CGU
      Données personnelles
      Cookies
      © 2023 batty
- Newsletter
  - personnaliser les emails de confirmation d'inscription, d'accueil et de réinitialisation de mot de passe
  - créer une newsletter lié au blog et aux mises à jour de l'application
- Design
  - Créer un thème de base pour l'application
    - remplacer les classes bootstrap
  - Créer un logo
- Navigation
  - Créer un menu de navigation pour les chantiers, les clients, les services, les devis et les factures
  - Créer un menu de navigation pour la gestion de compte
  - Afficher des squellettes pendant le chargement des pages
  - Gérer les erreurs de chargement des pages
- Authentification
  - Inscription
    - Il faut pouvoir s'inscrire avec un email et un mot de passe et ajouter sont entreprise via le SIRET et pouvoir ajouter les informations de l'entreprise si pas trouvé via le SIRET
      - Modifier le formulaire d'aws pour ajouter les champs de l'entreprise
  - Connexion
  - Déconnexion
- Gestion de compte
  - Modification du mot de passe
  - Modification des informations de l'entreprise
  - Modification des informations personnelles
- CRUD chantier
  - Créer les champs de configuration
  - Créer les lots du chantier
- CRUD client
  - Créer les champs de configuration
  - associer un client à un chantier
  - pouvoir créer un client depuis un chantier
- CRUD service
  - Créer les champs de configuration
  - associer un service à un lot du chantier
  - pouvoir créer un service depuis un chantier
- Generation d'un devis / facture
  - Pouvoir générer depuis la liste des chantiers
  - Pouvoir visualiser le dernier devis généré
  - Pouvoir visualiser tout les devis généré
  - Pouvoir personnaliser le devis / facture
- Envoie du mail de devis / facture
  - Pouvoir envoyer le devis / facture par mail depuis la liste des chantiers
  - Pouvoir personaliser le mail
