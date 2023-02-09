# But du projet 
Le projet a pour but premier de generer des devis et factures pour des entreprises dans le domaine du génie civil.  
Par la suite j'ajouterai toutes les fonctionnalités de génie civil. Il sera par exemple possible de générer des rapports de chantier.  
Il est basé sur le framework Next.js et utilise AWS Amplify pour le backend et l'hébergement.  
Pour le design j'utilise Figma pour créer des composants qui me génère un code React qui est ensuite intégré dans le projet.
Je l'utilise aussi pour créer un thème qui s'applique sur tout les composants Amplify-ui.
MUI est utilisé pour les composants que je ne trouve pas dans Amplify-ui.

# Cycle de développement 
1. Crée ton model dans amplify studio 
2. Crée ton formulaire et ta liste dans figma et lie les inputs au champs du model
3. Importe le formulaire et la liste dans le projet
4. Crée les routes dans le projet
5. Surcharge les évènements et le contenu de la liste et du formulaire

# Deadline
- 20 avril 2023 : version alpha (MVP) --> à faire tester par assiya et yanis
  - p1 : CRUD chantier
  - p2 : CRUD client
  - p3 : CRUD service
  - p4 : Génération d'un devis / facture (sans la personnalisation)
  - p5 : Menu de navigation chantier,...
- 20 juin 2023 : version 0.1.0
  - p1 : Authentification
  - p2 : Design
- 20 aout 2023 : version 0.2.0
  - p1 : Landing page (sans toutes les pages du footer)
  - p2 : Gestion de l'abonnement
- 20 aout 2023 : version 0.3.0
  - p1 : Finir la navigation
  - p2 : Gestion de compte
- 20 septembre 2023 : version 1.0.0
  - p1 : Envoi du mail de devis / facture
  - p2 : Newsletter

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
    - remplacer les classes bootstrap et les composants MUI (sauf ceux que je ne trouve pas) par des composants Amplify-ui
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

