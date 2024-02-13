## Description 
Lors d'une visite médicale de santé au travail, le médecin peut être amené à prendre différentes mesures du salarié (exemple : IMC, tension, température).

On souhaiterait développer une fonction qui définit en fonction des résultats de la mesure, si celle-ci est normale ou à surveiller.

Tu trouveras les objets par défaut dans measure.constants.js ainsi que les règles sur le statut de la mesure dans measure.rules.md

## Travail à faire
### Développement de la fonction
Tu dois développer la fonction getMeasureStatus :

Entrée :
- measure: un objet qui contient les infos de la measure
- employee: un objet qui contient les infos du salarié

Sortie : normal ou to_monitor. Il est aussi possible de renvoyer null s'il n'est pas possible de donner un résultat.

### Mise en place des tests
Tu dois rajouter des tests pertinents dans le fichier measure.test.js pour t'assurer que ton code est fonctionnel

Tu peux utiliser les objets définis dans measure.constants.js, n'hésite pas à en rajouter pour tester d'autres cas !
