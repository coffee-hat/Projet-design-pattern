# Projet-design-pattern
https://design-patterns-project.vercel.app/

# Presentation 
Ce projet en TypeScript est réaliser dans le cadre d'un cours sur les design Patterns.

Ce projet utilise 5 design Patterns *Abstract Factory / Adapter / Command / Observer / Singleton*.

#Utilisation
Après avoir cloner le projet faite un *npm install*  dans un terminale pour installer les modules Nodes
Vous pouvez ensuite utiliser le commande *npm start* pour compiler et démarrer le projet 

#Version dépendance
design-pattern-project : 1.0.0

NodeJS : 18.10.0
npm : 8.19.2

Nodemon : 2.0.20
ts-node : 10.9.1
typescript : latest

voire le fichier package.json

#Documentation
-Le fichier index.ts est le point de départ du code.
C'est lui qui va instancier la majorité des class du code, à l’intérieur vous trouverais aussi le « scenario »
Au début de ce fichier vous trouverez des constante pour changer la configuration du programme.

-Le fichier Data.ts contient les interface et le class des différent sensor.

-Le fichier Starship contient la class qui gère le vaisseaux spatiale, cette class est un singleton.

-Patterns Abstract Factory est utilisé pour instancier les sensors selon plusieurs manufacture.
Vous retrouverez 3 manufacture différente donc 3 Factory différent qui peut être utilisé. 

-Patterns Observer sert à gérer les événement, dans ce projet il n'y a qu'un seul événement 'add-component'
qui est levé lorsqu'un sensor est ajouté au vaisseaux.

-Patterns Adapter est utilisé pour l'envoie des messages des sensors au vaisseau, les sensors communique avec des système différent, l'adapter va donc convertir les messages qui ne corresponde pas au système du vaisseau pour les rendre compatible.

-Patterns Command permet d’exécuter les differente commande du vaisseau comme par exemple activer/désactiver les bouclier, tirer les missiles.
Ce design patterns est utiliser pour le scenario.




#Sortie attendu avec la configuration par defaut

FTL message : Initialisation ...
FTL message : Global info [ Motion Sensor of Aegis is equipped ]
FTL message : Global info [ Adapter: (TRANSLATED) Radar Sensor of Aegis is equipped ]
FTL message : decollage...
 le starship FTL est dans l'espace

MotionSensor is active
FTL message : Shields is now ON
RadarSensor is active
FTL message : real threat detected, combat mode engaging
FTL message : Shields is now OFF
FTL message : 3 missiles use, remained 7