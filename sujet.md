IUT du Limousin
Département Métiers du Multimédia et de l'Internet
BUT 3
Evaluation Next.js


Sous chacune des questions suivantes, vous prendrez soin de décrire de manière **très** synthétique ce que vous avez
ajouté et/ou modifié pour répondre à la question.


1. Ajouter une route /dashboard/credits
   Sur la page correspondante, la sidenav est conservée et vous afficherez juste sur la partie droite le messsage : 
   "Cet examen est l'oeuvre de John Doe" en remplaçant John Doe par vos prénom et nom ! Vous incluerez également
   une image en guise d'avatar. Cette image, outre le fait d'être respectable, doit être hébergée avec votre application (pas de référence externe)

Ajout d'un dossier credits et d'un fichier page.tsx dans lequel on ajoute les éléments désirés.

2. Modifier la barre latérale de navigation pour ajouter un menu 'Crédits' en plus de 'Home', 'Invoices' et 'Customers'.
   Ce nouveau menu renverra bien entendu vers /dashboard/credits 

Ajout d'un élément dans le tableau links du fichier nav-links.tsx


3. /dashboard
   Ajouter une "carte" qui indique le plus gros montant de toutes les factures déjà payées.
   Note : le composant Card a une prop 'type' pour laquelle vous utiliserez une des valeurs déjà utilisée pour les autres cartes.
   Note 2 : ce n'est pas grave si l'ajout de la carte "désorganise" un peu l'interface. Et on ne vous demande pas de modifier le cardsSkeleton en conséquence.

Modification des fichiers cards.tsx et data.ts pour ajouter une carte highest invoice et une manière de déterminer le montant de la facture la plus élevée.

4. /dashboard/customers
   Afficher sur cette page la liste des clients en présentant dans une table leur identifiant, son image de profil, leur prénom et nom, leur adresse email.
   On ne vous demande pas un affichage paginé. Vous pouvez tout afficher. Par contre merci d'utiliser <Suspense>.
   Note : basez-vous sur /dashboard/invoices. Vous pouvez reprendre des composants déjà présents ou si besoin en dupliquer/modifier 
   pour l'adapater aux données.

Modification de dashboard/customers/page.tsx en partant de dashboard/invoice/page.tsx on enlève la pagination et la recherche puis on utilise customersTable pour récuperer et afficher les clients.



5. /dashboard/customers
   Modifier votre affichage pour faire apparaître en plus pour chaque client le nombre de factures qu'il a déjà payé et le nombre
   de facture qu'il lui reste encore à payer.

j'ai modifié la fonction fetchFileredCustomers dans data.ts pour lui ajouter le nombre de factures payés et en attente, puis la table customer pour ajouter les colones correspondantes

6. /dashboard/customers
   Ajouter un bouton qui permet de saisir et enregistrer un nouveau client. Là encore, basez-vous sur /dashboard/invoices.
   Note : pour vous simplifier un peu les choses, on ne vous demande pas de gérer l'upload d'une image de profil. Vous pouvez
   directement saisir son path. Et ne perdez pas de temps à chercher des images... dupliquez et renommez celles déjà présentes.