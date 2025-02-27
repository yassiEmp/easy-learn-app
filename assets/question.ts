export type Question ={
  question: string;
  options: string[];
  answer: number;
}
export type QuestionArray = Question[];

const questionTheme1: QuestionArray =[
  {
    question:
      "Quels sont les trois éléments principaux encadrés par le droit du travail ?",
    options: [
      "L'embauche, l'exécution et la rupture du contrat de travail",
      "La gestion des salaires, les congés et la formation professionnelle",
      "La relation entre les employeurs et les partenaires sociaux",
      "La protection des biens matériels dans une entreprise",
    ],
    answer: 0,
  },
  {
    question:
      "Pourquoi le droit du travail est-il considéré comme instable ou dynamique ?",
    options: [
      "Parce qu'il est constamment modifié sous la pression des travailleurs et des évolutions sociales",
      "Parce qu'il dépend uniquement des décisions des employeurs",
      "Parce qu'il est rarement appliqué dans les entreprises",
      "Parce qu'il ne s'applique qu'aux contrats à durée indéterminée (CDI)",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est la principale raison pour laquelle le droit du travail est impératif ou obligatoire ?",
    options: [
      "Pour permettre aux employeurs de négocier librement avec leurs salariés",
      "Pour offrir aux travailleurs un minimum d'avantages intangibles",
      "Pour assurer un contrôle total des activités des entreprises",
      "Pour encourager les employeurs à augmenter les salaires",
    ],
    answer: 1,
  },
  {
    question:
      "Quelles relations sont concernées par le domaine d'application du droit du travail ?",
    options: [
      "Les relations entre les employeurs uniquement",
      "Les relations entre les travailleurs indépendants",
      "Les rapports de travail entre employeurs et salariés",
      "Les relations entre les actionnaires d'une entreprise",
    ],
    answer: 2,
  },
  {
    question: "Quelles sont les sources internationales du droit du travail ?",
    options: [
      "La constitution béninoise et les lois nationales",
      "Les traités internationaux signés par le Bénin et les décisions de l'OIT",
      "Les accords locaux entre entreprises et syndicats",
      "Les recommandations des employeurs",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle est la fonction principale de la constitution béninoise en matière de droit du travail ?",
    options: [
      "Réguler les contrats commerciaux",
      "Servir de base légale pour toutes les lois relatives aux rapports de travail",
      "Superviser la gestion des entreprises publiques",
      "Définir les règles du commerce international",
    ],
    answer: 1,
  },
  {
    question: "Pourquoi le droit du travail est-il qualifié de pacificateur ?",
    options: [
      "Parce qu'il supprime toutes les tensions dans le milieu de travail",
      "Parce qu'il favorise la résolution amiable des différends entre employeurs et salariés",
      "Parce qu'il impose des sanctions strictes aux employeurs en cas de conflit",
      "Parce qu'il limite les discussions entre les travailleurs",
    ],
    answer: 1,
  },
  {
    question:
      "Quel est l'objectif d'une politique de sécurité de l'information dans le contexte du droit du travail ?",
    options: [
      "Protéger les données personnelles des salariés",
      "Empêcher les syndicats d'avoir accès aux informations sensibles",
      "Favoriser les échanges d'informations entre employeurs",
      "Réguler les contrats à temps partiel",
    ],
    answer: 0,
  },
];

const questionTheme2: QuestionArray =[
  {
    question: "Quelle est la définition du contrat de travail ?",
    options: [
      "Un accord entre deux parties pour partager des bénéfices.",
      "Une convention où une personne s'engage à fournir une prestation sous la subordination d'un employeur en contrepartie d'une rémunération.",
      "Un contrat conclu pour la réalisation d'un ouvrage en toute indépendance.",
      "Un accord pour déléguer une tâche à un mandataire.",
    ],
    answer: 1,
  },
  {
    question:
      "Quels sont les trois éléments constitutifs du contrat de travail ?",
    options: [
      "La prestation de travail, la rémunération, le lien de subordination.",
      "L'affectation d'apports, la rémunération, le partage des bénéfices.",
      "La dépendance juridique, la prestation, le partage des pertes.",
      "La réalisation d'un ouvrage, la rémunération, l'indépendance.",
    ],
    answer: 0,
  },
  {
    question:
      "Que signifie le caractère intuitu personae du contrat de travail ?",
    options: [
      "Le contrat repose sur la personnalité et les qualités personnelles du travailleur.",
      "Le contrat est conclu uniquement pour une durée indéterminée.",
      "Le contrat est basé sur la réalisation d'un ouvrage indépendant.",
      "Le contrat implique le partage des risques financiers.",
    ],
    answer: 0,
  },
  {
    question:
      "Quel est le rôle de la rémunération dans un contrat de travail ?",
    options: [
      "Une somme d'argent versée pour partager les pertes.",
      "Une somme d'argent versée en contrepartie du travail effectué.",
      "Un pourcentage des bénéfices réalisés par l'entreprise.",
      "Une obligation morale sans contrepartie.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle est la différence principale entre le contrat de société et le contrat de travail ?",
    options: [
      "L'absence de prestation de travail dans le contrat de société.",
      "L'absence de rémunération dans le contrat de travail.",
      "La présence d'un lien de subordination dans le contrat de société.",
      "Le partage des pertes est obligatoire dans le contrat de travail.",
    ],
    answer: 0,
  },
  {
    question: "Le contrat de travail est-il considéré comme consensuel ?",
    options: [
      "Oui, car il repose uniquement sur la volonté des parties.",
      "Non, car il nécessite l'intervention d'une autorité externe.",
      "Oui, car il impose des obligations unilatérales.",
      "Non, car il ne peut être modifié par consentement mutuel.",
    ],
    answer: 0,
  },
  {
    question: "Dans quel type de contrat trouve-t-on l'affectio societatis ?",
    options: [
      "Le contrat de travail.",
      "Le contrat d'entreprise.",
      "Le contrat de société.",
      "Le contrat de mandat.",
    ],
    answer: 2,
  },
  {
    question: "Quelle est la définition du contrat d'entreprise ?",
    options: [
      "Un accord pour fournir une prestation sous l'autorité d'un employeur.",
      "Un contrat où une personne réalise un ouvrage en toute indépendance moyennant une rémunération.",
      "Un contrat pour partager les bénéfices d'une activité commune.",
      "Une convention pour déléguer le pouvoir d'agir à une autre personne.",
    ],
    answer: 1,
  },
  {
    question: "Quels sont les caractères essentiels du contrat de travail ?",
    options: [
      "Consensuel, intuitu personae, synallagmatique, à titre onéreux, successif.",
      "Gratuit, intuitu personae, successif, consensuel.",
      "Synallagmatique, gratuit, basé sur l'indépendance, successif.",
      "Onéreux, aléatoire, successif, dépendant des risques.",
    ],
    answer: 0,
  },
  {
    question:
      "Comment le contrat de mandat se distingue-t-il du contrat de travail ?",
    options: [
      "Par l'absence de prestation de travail.",
      "Par l'absence de lien de subordination.",
      "Par l'absence de rémunération.",
      "Par l'absence d'accord écrit entre les parties.",
    ],
    answer: 1,
  },
  {
    question: "Quelle est la définition du contrat d'apprentissage ?",
    options: [
      "Une convention entre un maître d'ouvrage et un entrepreneur.",
      "Un contrat où un travailleur reçoit une formation en échange de prestations de travail.",
      "Un accord pour partager les bénéfices d'une activité commune.",
      "Une convention qui délègue le pouvoir d'agir à un mandataire.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle obligation incombe principalement à l'employeur dans un contrat de travail ?",
    options: [
      "Offrir des actions de l'entreprise au travailleur.",
      "Fournir une rémunération en contrepartie du travail effectué.",
      "Donner au travailleur une formation gratuite.",
      "Garantir au travailleur une indépendance totale.",
    ],
    answer: 1,
  },
];
//question du theme 3
const questionTheme3P1: QuestionArray =[
  {
    question: "Quelle est la définition du contrat à durée déterminée ?",
    options: [
      "Un contrat écrit comportant un thème fixé par les parties",
      "Un contrat oral subordonné à un événement passé",
      "Un contrat écrit sans durée définie",
      "Un contrat renouvelable uniquement deux fois",
    ],
    answer: 0,
  },
  {
    question:
      "Quel événement peut être associé à un contrat à durée déterminée ?",
    options: [
      "Un événement futur et certain dont la date n'est pas connue",
      "Un événement passé et aléatoire",
      "Un événement futur mais incertain",
      "Un événement sans lien avec la tâche déterminée",
    ],
    answer: 0,
  },
  {
    question: "Le contrat à durée déterminée doit être :",
    options: ["Écrit", "Oral", "Verbal ou écrit", "Non enregistré"],
    answer: 0,
  },
  {
    question:
      "Combien de fois un contrat à durée déterminée peut-il être renouvelé ?",
    options: ["Indéfiniment", "Deux fois", "Trois fois", "Une seule fois"],
    answer: 0,
  },
  {
    question:
      "Que se passe-t-il après le quatrième terme d'un contrat à durée déterminée ?",
    options: [
      "Un préavis est obligatoire avant toute décision de non-renouvellement",
      "Le contrat est automatiquement résilié",
      "Le contrat est renouvelé pour une durée indéfinie",
      "Aucune obligation n'est imposée aux parties",
    ],
    answer: 0,
  },
  {
    question:
      "Quel est le préavis pour un employé payé à l'heure avant la fin d'un contrat à durée déterminée ?",
    options: ["15 jours", "1 mois", "3 mois", "Aucun préavis n'est nécessaire"],
    answer: 0,
  },
  {
    question:
      "Quel est le préavis applicable pour un ouvrier avant la fin d'un contrat à durée déterminée ?",
    options: ["1 mois", "15 jours", "3 mois", "2 semaines"],
    answer: 0,
  },
  {
    question:
      "Pour un agent de maîtrise, quel est le préavis requis en cas de non-renouvellement du contrat ?",
    options: ["3 mois", "1 mois", "15 jours", "6 mois"],
    answer: 0,
  },
];
const contrat_a_duree_determine: QuestionArray =[
  {
    question: "Qu'est-ce qu'un contrat de travail à temps partiel ?",
    options: [
      "Un contrat dont la durée de travail est inférieure à un cinquième de la durée légale ou conventionnelle",
      "Un contrat à durée déterminée sans durée spécifiée",
      "Un contrat pour des tâches saisonnières uniquement",
      "Un contrat qui ne nécessite pas d'être écrit",
    ],
    answer: 0,
  },
  {
    question:
      "Quel est un critère obligatoire pour un contrat de travail à temps partiel ?",
    options: [
      "Il doit être écrit",
      "Il peut être oral",
      "Il doit préciser uniquement la durée mensuelle",
      "Il doit toujours être à durée indéterminée",
    ],
    answer: 0,
  },
  {
    question:
      "Que doit mentionner un contrat de travail à temps partiel concernant la rémunération ?",
    options: [
      "Les éléments de la rémunération",
      "Un salaire fixe pour toutes les durées",
      "Une prime unique pour la période de travail",
      "Aucune mention n'est nécessaire pour la rémunération",
    ],
    answer: 0,
  },
  {
    question: "Comment est rémunéré un contrat de travail à temps partiel ?",
    options: [
      "Proportionnellement au temps de travail effectué",
      "Avec un salaire identique à celui des travailleurs à temps plein",
      "En fonction de l’ancienneté uniquement",
      "Avec une prime de fin de contrat obligatoire",
    ],
    answer: 0,
  },
  {
    question:
      "Que doit inclure la répartition de la durée de travail dans un contrat à temps partiel ?",
    options: [
      "La durée hebdomadaire ou mensuelle prévue",
      "Le nombre de jours fériés travaillés",
      "Les tâches spécifiques à accomplir",
      "Une clause de mobilité géographique",
    ],
    answer: 0,
  },
];
const travail_intérimaire: QuestionArray =[
  {
    question: "Qu'est-ce que le travail intérimaire ?",
    options: [
      "Une situation où un intérimaire est prêté à une société utilisatrice pour un travail déterminé",
      "Un contrat à durée indéterminée avec une entreprise spécifique",
      "Un emploi temporaire sans lien avec une entreprise de travail intérimaire",
      "Un poste permanent dans une société utilisatrice",
    ],
    answer: 0,
  },
  {
    question: "Qui emploie le travailleur intérimaire ?",
    options: [
      "Une entreprise de travail intérimaire ou société d'intérim",
      "La société utilisatrice directement",
      "Un organisme public dédié au travail temporaire",
      "Une association de placement professionnel",
    ],
    answer: 0,
  },
  {
    question: "Comment se caractérise le travail intérimaire ?",
    options: [
      "Par deux contrats distincts",
      "Par un contrat unique entre le travailleur et la société utilisatrice",
      "Par un engagement oral entre l'intérimaire et l'employeur",
      "Par l'absence de toute formalisation contractuelle",
    ],
    answer: 0,
  },
  {
    question:
      "Qu'est-ce qu'un contrat de travail intérimaire ou contrat de mission ?",
    options: [
      "Un contrat conclu entre l'entreprise de travail intérimaire et le travailleur intérimaire",
      "Un contrat entre l'intérimaire et la société utilisatrice",
      "Un contrat à durée indéterminée avec l'entreprise intérimaire",
      "Un contrat spécifique à la société utilisatrice uniquement",
    ],
    answer: 0,
  },
  {
    question: "Qu'est-ce qu'un contrat de placement ou de mise à disposition ?",
    options: [
      "Un contrat conclu entre l'entreprise de travail intérimaire et l'entreprise utilisatrice",
      "Un contrat conclu directement entre le travailleur intérimaire et l'entreprise utilisatrice",
      "Un contrat oral entre les parties concernées",
      "Un contrat qui lie uniquement le travailleur et la société utilisatrice",
    ],
    answer: 0,
  },
];
const sous_traitance: QuestionArray =[
  {
    question: "Qu'est-ce qu'un contrat de sous-traitance ?",
    options: [
      "Une convention par laquelle une entreprise principale fait appel à une autre entreprise pour exécuter un ouvrage ou un service",
      "Un contrat entre deux employés pour partager une tâche",
      "Un accord informel entre entreprises pour échanger des services",
      "Un document interne de l'entreprise pour répartir les tâches entre ses départements",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est l'entreprise qui demande l'exécution d'un ouvrage ou d'un service ?",
    options: [
      "L'entreprise principale",
      "L'entreprise sous-traitante",
      "L'entreprise cliente",
      "L'administration publique",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est l'entreprise chargée de réaliser l'ouvrage ou le service ?",
    options: [
      "L'entreprise sous-traitante",
      "L'entreprise principale",
      "L'entreprise cliente",
      "L'entreprise contractuelle",
    ],
    answer: 0,
  },
  {
    question: "Dans quel cadre intervient la sous-traitance ?",
    options: [
      "Dans l'objet de l'activité de l'entreprise principale",
      "Pour des activités sans lien avec l'activité de l'entreprise principale",
      "Uniquement pour des tâches administratives",
      "Pour les relations commerciales avec des clients",
    ],
    answer: 0,
  },
  {
    question: "Le contrat de sous-traitance implique :",
    options: [
      "Un accord entre une entreprise principale et une entreprise sous-traitante",
      "Un partenariat égalitaire entre deux entreprises concurrentes",
      "Un échange direct entre un employé et un sous-traitant",
      "Un accord tacite sans formalisation",
    ],
    answer: 0,
  },
];
const engagement_a_lessai: QuestionArray =[
  {
    question: "Qu'est-ce que l'engagement à l'essai ?",
    options: [
      "Une phase préalable au contrat définitif permettant une appréciation mutuelle",
      "Un contrat définitif sans possibilité de rupture",
      "Une convention entre employeur et salarié pour une période illimitée",
      "Une formalité administrative pour débuter un emploi",
    ],
    answer: 0,
  },
  {
    question: "Que permet à l'employeur l'engagement à l'essai ?",
    options: [
      "Vérifier l'aptitude professionnelle et le rendement du salarié",
      "Modifier les conditions de travail sans préavis",
      "Établir un contrat définitif sans rémunération",
      "Imposer des heures supplémentaires obligatoires",
    ],
    answer: 0,
  },
  {
    question: "Que peut apprécier le salarié pendant l'engagement à l'essai ?",
    options: [
      "Les conditions de travail, de vie, de rémunération, d'hygiène et de sécurité",
      "Uniquement le montant de la rémunération",
      "La hiérarchie au sein de l'entreprise",
      "La possibilité de congés sans solde",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle condition légale doit être respectée pour une période d'essai ?",
    options: [
      "Elle doit être expressément prévue par écrit dans une clause du contrat",
      "Elle doit être tacitement comprise dans tout contrat",
      "Elle ne peut dépasser une semaine",
      "Elle n'est pas rémunérée",
    ],
    answer: 0,
  },
  {
    question:
      "Comment est rémunéré le travail effectué pendant la période d'essai ?",
    options: [
      "Comme si le contrat était déjà définitif",
      "À un taux réduit par rapport au salaire définitif",
      "Uniquement en cas de réussite de l'essai",
      "Il n'est pas rémunéré",
    ],
    answer: 0,
  },
  {
    question: "De quoi dépend la durée de la période d'essai ?",
    options: [
      "De la technicité et des usages de la profession",
      "De la volonté exclusive de l'employeur",
      "De l'ancienneté du salarié",
      "Du type de contrat précédent",
    ],
    answer: 0,
  },
];
const CDI: QuestionArray =[
  {
    question: "Qu'est-ce qu'un contrat à durée indéterminée (CDI) ?",
    options: [
      "Un contrat sans terme fixé à l'avance",
      "Un contrat dont la durée est prédéterminée",
      "Un contrat réservé aux missions spécifiques",
      "Un contrat renouvelable uniquement après six mois",
    ],
    answer: 0,
  },
  {
    question: "Quelle est une caractéristique principale du CDI ?",
    options: [
      "Il peut cesser à tout moment par la volonté d'une des parties sous réserve du préavis",
      "Il est obligatoirement renouvelé chaque année",
      "Il ne peut être conclu qu'à temps plein",
      "Il est limité à une durée maximale de deux ans",
    ],
    answer: 0,
  },
  {
    question: "Sous quelles formes le CDI peut-il être conclu ?",
    options: [
      "À temps plein ou à temps partiel",
      "Uniquement à temps plein",
      "À durée déterminée ou indéterminée",
      "À temps partiel uniquement",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est l'obligation en cas de cessation d'un CDI par une des parties ?",
    options: [
      "Respecter un préavis",
      "Obtenir l'autorisation de l'administration du travail",
      "Payer une pénalité financière",
      "Proposer une reconduction automatique",
    ],
    answer: 0,
  },
  {
    question:
      "Le CDI peut-il être conclu pour une mission spécifique avec un terme prévu ?",
    options: [
      "Non, il est sans terme fixé à l'avance",
      "Oui, à condition d'en informer l'administration",
      "Oui, mais seulement pour les cadres",
      "Non, sauf en cas d'accord des deux parties",
    ],
    answer: 0,
  },
];
const occasionnel: QuestionArray =[
  {
    question: "Qu'est-ce qu'un travailleur occasionnel ou journalier ?",
    options: [
      "Un travailleur engagé à l'heure ou à la journée",
      "Un travailleur ayant un contrat à durée indéterminée",
      "Un travailleur engagé uniquement pour des missions à long terme",
      "Un travailleur indépendant sans contrat",
    ],
    answer: 0,
  },
  {
    question:
      "Quel type de contrat régit les travailleurs occasionnels ou journaliers ?",
    options: [
      "Un contrat de travail à durée déterminée",
      "Un contrat de mission temporaire",
      "Un contrat à durée indéterminée",
      "Un contrat de sous-traitance",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est la durée minimale d'un contrat pour les travailleurs occasionnels ou journaliers ?",
    options: [
      "6 mois ou plus",
      "3 mois",
      "12 mois",
      "Indéfinie, selon les besoins de l'employeur",
    ],
    answer: 0,
  },
  {
    question:
      "Les contrats des travailleurs occasionnels ou journaliers peuvent-ils être renouvelés ?",
    options: [
      "Oui, ils sont renouvelables",
      "Non, ils ne peuvent pas être renouvelés",
      "Oui, mais uniquement une fois",
      "Non, sauf en cas d'accord syndical",
    ],
    answer: 0,
  },
  {
    question: "Les travailleurs journaliers peuvent être engagés :",
    options: [
      "À l'heure ou à la journée",
      "À la semaine ou au mois",
      "Uniquement pour des missions longues",
      "Exclusivement sur des projets à court terme",
    ],
    answer: 0,
  },
];

const questionTheme3: QuestionArray =[
  ...questionTheme3P1,
  ...contrat_a_duree_determine,
  ...travail_intérimaire,
  ...sous_traitance,
  ...engagement_a_lessai,
  ...CDI,
  ...occasionnel,
];

//question du theme 4
const questionTheme4P1: QuestionArray =[
  {
    question:
      "Selon l'article 600 de la Loi de l'embauche, comment est décrit le contrat de travail ?",
    options: [
      "Individuel, personnel et conclu librement",
      "Collectif et imposé par l'employeur",
      "Standardisé et soumis à l'approbation de l'État",
      "Conclu uniquement sous forme écrite",
    ],
    answer: 0,
  },
  {
    question:
      "Sous quelles formes peut exister le contrat de travail selon la loi ?",
    options: [
      "Écrit, verbal ou tacite",
      "Écrit uniquement",
      "Verbal uniquement",
      "Tacite uniquement",
    ],
    answer: 0,
  },
  {
    question: "La formation du contrat de travail exige :",
    options: [
      "Des conditions de forme et de fonds",
      "Un accord syndical",
      "Un modèle standard imposé par l'employeur",
      "Une validation par l'administration du travail",
    ],
    answer: 0,
  },
  {
    question:
      "Quel est le caractère du contrat de travail décrit dans l'article 600 de la Loi de l'embauche ?",
    options: [
      "Il est librement conclu entre les parties",
      "Il est obligatoirement imposé par l'employeur",
      "Il est uniquement collectif",
      "Il est soumis à des restrictions strictes par l'État",
    ],
    answer: 0,
  },
  {
    question: "Le contrat de travail est constaté :",
    options: [
      "Dans les formats choisis par les parties contractantes",
      "Exclusivement par un contrat standardisé",
      "Par un modèle imposé par l'État",
      "Uniquement via un accord verbal",
    ],
    answer: 0,
  },
];
const capaciteJuridique: QuestionArray =[
  {
    question:
      "Qui peut conclure un contrat de travail en vertu de la capacité juridique ?",
    options: [
      "a) Un mineur de moins de 16 ans.",
      "b) Un mineur émancipé.",
      "c) Un adulte ayant des restrictions mentales.",
      "d) Un mineur non émancipé.",
    ],
    answer: 1,
  },
  {
    question: "Qu’est-ce que l’émancipation d’un mineur ?",
    options: [
      "a) L’acte juridique par lequel un mineur acquiert la pleine capacité d'exercice.",
      "b) Un acte administratif validé par l'employeur.",
      "c) L’acte par lequel un mineur devient majeur dès 16 ans.",
      "d) L’acte par lequel un mineur perd sa capacité juridique.",
    ],
    answer: 0,
  },
];
const consentement: QuestionArray =[
  {
    question: "Le consentement est valable lorsqu’il est donné :",
    options: [
      "a) Sous la contrainte.",
      "b) Librement, sans erreur, violence ni dol.",
      "c) Sous influence d’un tiers.",
      "d) Après plusieurs révisions du contrat.",
    ],
    answer: 1,
  },
  {
    question: "Le dol dans le consentement se définit par :",
    options: [
      "a) L'erreur sur la nature de l’acte.",
      "b) L’intention de tromper une partie sur un élément essentiel.",
      "c) Le silence d’une des parties.",
      "d) La modification du contrat à la signature.",
    ],
    answer: 1,
  },
];
const objet: QuestionArray =[
  {
    question:
      "Quelles sont les conséquences si l'objet du contrat de travail est illicite ?",
    options: [
      "a) Le contrat est nul et non avenu.",
      "b) Le contrat est valide avec des modifications.",
      "c) Le contrat peut être validé par un tribunal.",
      "d) Le contrat est valide uniquement si les parties sont d'accord.",
    ],
    answer: 0,
  },
  {
    question: "L'objet du contrat de travail doit être :",
    options: [
      "a) Licite et moral, mais peut être flou.",
      "b) Un service en échange d’un salaire.",
      "c) Licite, moral et conforme aux bonnes mœurs.",
      "d) Tout service payé à l’employeur.",
    ],
    answer: 2,
  },
];
const cause: QuestionArray =[
  {
    question: "La cause d’un contrat de travail doit être :",
    options: [
      "a) Un but immédiat et licite.",
      "b) Une cause illégale pour valider le contrat.",
      "c) Un objectif vague.",
      "d) Une cause d’intérêt personnel.",
    ],
    answer: 0,
  },
  {
    question: "Dans quel cas la cause du contrat est-elle non valide ?",
    options: [
      "a) Si elle est contraire à l’ordre public ou illicite.",
      "b) Si elle est non précisée dans le contrat.",
      "c) Si elle est uniquement liée aux bénéfices financiers.",
      "d) Si elle est modifiable après signature.",
    ],
    answer: 0,
  },
];

const questionTheme4: QuestionArray =[
  ...questionTheme4P1,
  ...capaciteJuridique,
  ...consentement,
  ...objet,
  ...cause,
];

//question du theme 5
const droitTravailleur: QuestionArray =[
  {
    question: "Quel est le droit d’un salarié concernant son poste d'emploi ?",
    options: [
      "a) De choisir n’importe quel poste.",
      "b) De recevoir le salaire prévu pour le poste occupé.",
      "c) D'occuper le poste pour lequel il a été recruté.",
      "d) De changer son poste à tout moment.",
    ],
    answer: 2,
  },
  {
    question: "Quel est le droit d'un salarié concernant son salaire ?",
    options: [
      "a) Recevoir un salaire fixé par l’employeur.",
      "b) Recevoir le salaire prévu dans le contrat.",
      "c) Négocier son salaire à chaque mois.",
      "d) Accepter un salaire inférieur à celui prévu.",
    ],
    answer: 1,
  },
  {
    question: "Le salarié a-t-il le droit de choisir son syndicat ?",
    options: [
      "a) Oui, il peut choisir librement son syndicat.",
      "b) Non, il doit rejoindre le syndicat de l’employeur.",
      "c) Oui, mais seulement un syndicat dans son secteur.",
      "d) Non, il n’a pas le droit de choisir.",
    ],
    answer: 0,
  },
  {
    question: "Un salarié a-t-il le droit d’aller en grève ?",
    options: [
      "a) Oui, tant que la grève est légale.",
      "b) Non, il est interdit de faire grève.",
      "c) Oui, mais il doit en informer son employeur.",
      "d) Non, sauf si c’est une grève nationale.",
    ],
    answer: 0,
  },
  {
    question:
      "Quel droit le salarié a-t-il concernant le repos hebdomadaire et les congés payés ?",
    options: [
      "a) Aucun droit spécifique.",
      "b) Droit au repos hebdomadaire et aux congés payés.",
      "c) Seulement droit au repos hebdomadaire.",
      "d) Seulement droit aux congés payés.",
    ],
    answer: 1,
  },
  {
    question:
      "Le salarié doit-il être traité de manière équitable par rapport à ses collègues ?",
    options: [
      "a) Oui, il doit être traité humainement et de manière égale.",
      "b) Non, il peut être traité différemment selon ses aptitudes.",
      "c) Oui, mais seulement si les performances sont égales.",
      "d) Non, selon l'ancienneté de chacun.",
    ],
    answer: 0,
  },
];
const devoirTravailleur: QuestionArray =[
  {
    question:
      "Quelles sont les obligations d’un travailleur concernant le salaire ?",
    options: [
      "a) Le salarié doit accepter de travailler pour un salaire inférieur à celui prévu.",
      "b) Le salarié doit accepter les salaires prévus par les usages et la convention collective.",
      "c) Le salarié peut renégocier son salaire à tout moment.",
      "d) Le salarié n’a aucune obligation concernant le salaire.",
    ],
    answer: 1,
  },
  {
    question: "Comment un salarié doit-il exécuter son travail ?",
    options: [
      "a) Avec bonne foi, diligence et loyauté.",
      "b) Seulement de manière rapide, peu importe la qualité.",
      "c) Avec le minimum d’effort pour recevoir son salaire.",
      "d) Il n’a aucune obligation sur la manière d’exécuter son travail.",
    ],
    answer: 0,
  },
  {
    question:
      "Le salarié doit-il respecter les règlements intérieurs et conventions collectives ?",
    options: [
      "a) Oui, il doit respecter les règles internes et les conventions collectives.",
      "b) Non, il n’est pas obligé de suivre les règlements.",
      "c) Oui, mais seulement si cela lui convient.",
      "d) Non, il peut ignorer ces règlements.",
    ],
    answer: 0,
  },
  {
    question:
      "Le salarié est-il responsable de l’entretien du matériel qui lui est confié ?",
    options: [
      "a) Non, l'employeur en est responsable.",
      "b) Oui, il doit en prendre soin.",
      "c) Non, c'est un droit et non une obligation.",
      "d) Oui, mais uniquement pour du matériel de valeur.",
    ],
    answer: 1,
  },
  {
    question: "Le salarié doit-il respecter le secret professionnel ?",
    options: [
      "a) Oui, il est tenu au secret professionnel.",
      "b) Non, il peut partager des informations au besoin.",
      "c) Oui, mais seulement pour les informations sensibles.",
      "d) Non, sauf en cas d’urgence.",
    ],
    answer: 0,
  },
];
const pouvoirEmployeur: QuestionArray =[
  {
    question:
      "Quel pouvoir l'employeur possède-t-il concernant l'organisation du travail ?",
    options: [
      "a) Le pouvoir directionnel.",
      "b) Le pouvoir disciplinaire.",
      "c) Le pouvoir réglementaire.",
      "d) Aucun pouvoir sur l'organisation du travail.",
    ],
    answer: 0,
  },
  {
    question:
      "Quel pouvoir l'employeur utilise pour infliger des sanctions à ses employés ?",
    options: [
      "a) Le pouvoir directionnel.",
      "b) Le pouvoir disciplinaire.",
      "c) Le pouvoir réglementaire.",
      "d) Le pouvoir de décision.",
    ],
    answer: 1,
  },
  {
    question:
      "Quel pouvoir permet à l'employeur de créer des règlements intérieurs ?",
    options: [
      "a) Le pouvoir directionnel.",
      "b) Le pouvoir disciplinaire.",
      "c) Le pouvoir réglementaire.",
      "d) Le pouvoir de surveillance.",
    ],
    answer: 2,
  },
];
const devoirEmployeur: QuestionArray =[
  {
    question:
      "Quelle obligation incombe à l'employeur concernant le travail du salarié ?",
    options: [
      "a) Fournir uniquement le salaire.",
      "b) Fournir le travail convenu et les moyens de son exécution.",
      "c) Assurer la formation continue de ses employés.",
      "d) Fournir des vacances au salarié.",
    ],
    answer: 1,
  },
  {
    question:
      "Que doit faire l'employeur en ce qui concerne la rémunération du salarié ?",
    options: [
      "a) Payer régulièrement le salaire dû.",
      "b) Négocier le salaire à chaque mois.",
      "c) Payer les salaires une fois par an.",
      "d) Seulement payer une prime de performance.",
    ],
    answer: 0,
  },
  {
    question:
      "Que doit verser l'employeur pour la sécurité sociale des employés ?",
    options: [
      "a) Des primes exceptionnelles.",
      "b) Les cotisations légales à la CNSS.",
      "c) Des remboursements pour soins médicaux.",
      "d) Aucune contribution sociale n'est requise.",
    ],
    answer: 1,
  },
  {
    question:
      "Quel aspect de la sécurité de travail l'employeur doit-il respecter ?",
    options: [
      "a) Respecter les règles d'hygiène et de sécurité au travail.",
      "b) Assurer des loisirs pour ses employés.",
      "c) Ne rien imposer concernant la sécurité.",
      "d) Offrir une formation au bien-être.",
    ],
    answer: 0,
  },
  {
    question:
      "Que doit respecter l'employeur concernant la vie privée des employés ?",
    options: [
      "a) Respecter les libertés publiques et la vie privée du travailleur.",
      "b) Aucun respect n'est nécessaire.",
      "c) Respecter uniquement les libertés publiques.",
      "d) Observer les employés en dehors du lieu de travail.",
    ],
    answer: 0,
  },
];

const questionTheme5 = [
  ...droitTravailleur,
  ...devoirTravailleur,
  ...pouvoirEmployeur,
  ...devoirEmployeur,
];

//question du theme 6
const cessationContratTravail: QuestionArray =[
  {
    question: "Qu'est-ce que la suspension du contrat de travail ?",
    options: [
      "a) La cessation définitive du contrat.",
      "b) La cessation momentanée du contrat en raison d'un événement lié ou non aux parties.",
      "c) La résiliation immédiate du contrat.",
      "d) L'interruption volontaire du contrat par l'employeur.",
    ],
    answer: 1,
  },
  {
    question:
      "Quels événements peuvent entraîner la suspension du contrat de travail ?",
    options: [
      "a) Le départ en retraite de l'employé.",
      "b) La fermeture de l'établissement pour le service militaire de l'employeur.",
      "c) L'absence volontaire de l'employé pour des vacances.",
      "d) Aucune de ces réponses.",
    ],
    answer: 1,
  },
  {
    question:
      "Pendant combien de temps le contrat de travail peut-il être suspendu en raison d'un accident du travail ?",
    options: [
      "a) Jusqu'à la guérison de la maladie ou la consolidation de la blessure.",
      "b) Jusqu'à la fin du contrat.",
      "c) Jusqu'à la fin de l'année.",
      "d) Le contrat est suspendu définitivement.",
    ],
    answer: 0,
  },
  {
    question:
      "Le contrat de travail est-il suspendu pendant la période de grève ?",
    options: [
      "a) Oui, si la grève est déclenchée conformément à la procédure légale.",
      "b) Non, le contrat continue normalement.",
      "c) Oui, mais seulement si la grève est nationale.",
      "d) Non, le travailleur doit poursuivre ses activités pendant la grève.",
    ],
    answer: 0,
  },
  {
    question: "Quels sont les effets de la suspension du contrat de travail ?",
    options: [
      "a) Le salarié n'est plus payé pendant la suspension.",
      "b) Le salarié conserve ses droits liés au contrat, comme le salaire.",
      "c) Le salarié perd son droit à la sécurité sociale.",
      "d) Aucune de ces réponses.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelles sont les autres causes qui peuvent entraîner la suspension du contrat de travail ?",
    options: [
      "a) L'absence pour maladie constatée par un médecin agréé.",
      "b) Le refus d'accepter un autre poste dans l'entreprise.",
      "c) La non-présentation à une réunion d'équipe.",
      "d) Aucune de ces réponses.",
    ],
    answer: 0,
  },
];
const ruptureContratTravail: QuestionArray =[
  {
    question: "Qu'est-ce que la rupture du contrat de travail ?",
    options: [
      "a) La suspension temporaire des effets du contrat.",
      "b) La modification des conditions de travail.",
      "c) La cessation définitive des effets du contrat.",
      "d) La réorganisation interne de l'entreprise.",
    ],
    answer: 2,
  },
  {
    question: "Quelle est la cause de rupture d'un CDD avant son terme ?",
    options: [
      "a) Un accord des parties constaté par écrit.",
      "b) Un licenciement pour faute lourde.",
      "c) Un événement de force majeure.",
      "d) Toutes les réponses précédentes.",
    ],
    answer: 3,
  },
  {
    question: "Qu'est-ce qu'une faute lourde ?",
    options: [
      "a) Un retard dans l'exécution des tâches quotidiennes.",
      "b) Une malversation ou une violation grave du contrat de travail.",
      "c) Un oubli d'un document administratif.",
      "d) Une petite négligence dans les tâches assignées.",
    ],
    answer: 1,
  },
  {
    question: "Quelles actions peuvent constituer une faute lourde ?",
    options: [
      "a) Le refus d'exécuter un travail.",
      "b) La violation du secret professionnel.",
      "c) L'état d'ivresse au travail.",
      "d) Toutes les réponses précédentes.",
    ],
    answer: 3,
  },
  {
    question:
      "Qu'est-ce qu'un événement de force majeure dans le cadre d'un CDD ?",
    options: [
      "a) Un changement de direction dans l'entreprise.",
      "b) Un événement imprévisible, extérieur à l'entreprise et rendant impossible la poursuite des relations contractuelles.",
      "c) Une grève nationale.",
      "d) La modification des horaires de travail.",
    ],
    answer: 1,
  },
  {
    question: "Quelles sont les conséquences d'une faute lourde d'un salarié ?",
    options: [
      "a) Une rupture immédiate et sans indemnité du contrat.",
      "b) Une suspension temporaire du contrat avec une perte de salaire.",
      "c) Un avertissement écrit.",
      "d) Une réorganisation des tâches du salarié.",
    ],
    answer: 0,
  },
];
const causesRuptureCDI: QuestionArray =[
  {
    question:
      "Quelles sont les causes de la rupture d'un contrat à durée indéterminée (CDI) ?",
    options: [
      "a) Le licenciement, la démission, le départ à la retraite, le décès.",
      "b) Le licenciement et la démission uniquement.",
      "c) Le licenciement et le décès uniquement.",
      "d) Le départ à la retraite uniquement.",
    ],
    answer: 0,
  },
  {
    question: "Qu'est-ce que le licenciement ?",
    options: [
      "a) La résiliation du contrat de travail à durée indéterminée à l'initiative du salarié.",
      "b) La résiliation du contrat de travail à durée déterminée à l'initiative de l'employeur.",
      "c) La résiliation du contrat de travail à durée indéterminée à l'initiative de l'employeur.",
      "d) La résiliation du contrat de travail à durée déterminée à l'initiative du salarié.",
    ],
    answer: 2,
  },
  {
    question: "Quelle est la procédure de licenciement individuel ?",
    options: [
      "a) Convocation du salarié pour un entretien, notification de la lettre de licenciement et information sur le motif.",
      "b) Convocation du salarié pour un entretien, information du motif du licenciement et renvoi immédiat.",
      "c) Convocation d'un représentant syndical, notification d'une amende et réduction du salaire.",
      "d) Aucune des réponses ci-dessus.",
    ],
    answer: 0,
  },
  {
    question:
      "Le licenciement, s'il n'est pas pour faute grave ou lourde, nécessite-t-il un préavis ?",
    options: [
      "a) Oui, et il commence au lendemain de la notification du licenciement.",
      "b) Non, il n'y a pas de préavis dans ce cas.",
      "c) Oui, mais il commence 3 jours avant la notification du licenciement.",
      "d) Oui, mais le délai commence à courir 15 jours après la notification du licenciement.",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est la durée du préavis pour un salarié payé à l'heure ou à la journée en cas de licenciement ?",
    options: ["a) 1 mois.", "b) 3 mois.", "c) 15 jours.", "d) 2 mois."],
    answer: 2,
  },
  {
    question:
      "Quel est le préavis pour un cadre ou agent de maîtrise licencié ?",
    options: ["a) 15 jours.", "b) 1 mois.", "c) 2 mois.", "d) 3 mois."],
    answer: 3,
  },
];
const licenciementProcedures: QuestionArray =[
  {
    question: "Quelle est la différence entre licenciement et démission ?",
    options: [
      "a) Le licenciement est à l'initiative du salarié, la démission à l'initiative de l'employeur.",
      "b) Le licenciement est à l'initiative de l'employeur, la démission à l'initiative du salarié.",
      "c) Le licenciement et la démission sont à l'initiative de l'employeur.",
      "d) Le licenciement et la démission sont à l'initiative du salarié.",
    ],
    answer: 1,
  },
  {
    question: "Qu'est-ce que le licenciement individuel ?",
    options: [
      "a) La rupture d'un contrat de travail à durée indéterminée de plusieurs employés.",
      "b) La rupture d'un contrat de travail à durée déterminée d'un seul salarié.",
      "c) La rupture d'un contrat de travail à durée indéterminée d'un seul salarié.",
      "d) La rupture d'un contrat de travail à durée déterminée de plusieurs salariés.",
    ],
    answer: 2,
  },
  {
    question:
      "Que doit faire l'employeur avant de procéder à un licenciement individuel ?",
    options: [
      "a) Informer l'inspecteur du travail.",
      "b) Organiser un entretien avec le salarié concerné.",
      "c) Informer les délégués du personnel.",
      "d) Envoyer immédiatement la lettre de licenciement.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle est la durée du préavis pour un salarié licencié payé au mois ?",
    options: ["a) 15 jours.", "b) 1 mois.", "c) 3 mois.", "d) Aucun préavis."],
    answer: 1,
  },
  {
    question:
      "En cas de licenciement collectif, quelle est l'une des démarches obligatoires de l'employeur ?",
    options: [
      "a) Convocation des délégués syndicaux uniquement.",
      "b) Informer l'inspecteur du travail du projet de licenciement.",
      "c) Ne pas notifier les salariés avant 2 semaines.",
      "d) Aucune démarche n'est obligatoire.",
    ],
    answer: 1,
  },
  {
    question:
      "Quel est le montant de l'indemnité de licenciement en cas de faute lourde ?",
    options: [
      "a) Aucun montant n'est versé.",
      "b) 30% du SMM par année d'ancienneté.",
      "c) 35% du SMM par année d'ancienneté.",
      "d) 40% du SMM par année d'ancienneté.",
    ],
    answer: 0,
  },
  {
    question:
      "Quel document l'employeur doit-il remettre au salarié licencié ?",
    options: [
      "a) Le reçu pour solde de tout compte et le certificat de travail.",
      "b) Le certificat de travail uniquement.",
      "c) Le reçu pour solde de tout compte uniquement.",
      "d) Aucun document n'est requis.",
    ],
    answer: 0,
  },
  {
    question:
      "Le montant de l'indemnité de licenciement peut-il être supérieur à 9 mois de salaire brut ?",
    options: [
      "a) Oui, mais seulement en cas de licenciement individuel.",
      "b) Non, il ne peut excéder 9 mois de salaire brut.",
      "c) Oui, il peut être fixé à la discrétion de l'employeur.",
      "d) Oui, si le salarié est un cadre supérieur.",
    ],
    answer: 1,
  },
  {
    question:
      "Quel est le barème pour calculer l'indemnité de licenciement en cas de licenciement individuel ?",
    options: [
      "a) 30% du SMM pour les 5 premières années, 35% pour les 5 années suivantes, 40% pour le reste.",
      "b) 20% du SMM pour chaque année d'ancienneté.",
      "c) 30% du SMM pour chaque année d'ancienneté.",
      "d) 35% du SMM pour chaque année d'ancienneté.",
    ],
    answer: 0,
  },
  {
    question: "Qu'est-ce qu'une indemnité de licenciement abusif ?",
    options: [
      "a) Une indemnité versée à tout salarié licencié sans faute.",
      "b) Une indemnité fixée par les juges en fonction du préjudice subi par le salarié.",
      "c) Une indemnité versée uniquement en cas de licenciement économique.",
      "d) Une indemnité égale à 30% du salaire mensuel.",
    ],
    answer: 1,
  },
];

const questionTheme6: QuestionArray =[
  ...cessationContratTravail,
  ...ruptureContratTravail,
  ...causesRuptureCDI,
  ...licenciementProcedures,
];

//question du theme 7
const dureeTravail: QuestionArray =[
  {
    question: "Quelle est la durée légale de travail par semaine ?",
    options: [
      "a) 35 heures par semaine.",
      "b) 40 heures par semaine.",
      "c) 45 heures par semaine.",
      "d) 50 heures par semaine.",
    ],
    answer: 1,
  },
  {
    question:
      "Quels sont les aménagements qui permettent de dépasser la durée légale de travail ?",
    options: [
      "a) Les heures supplémentaires et la récupération des heures perdues.",
      "b) La modulation et la récupération des heures perdues.",
      "c) Les équivalences, les heures supplémentaires et la modulation.",
      "d) Les heures supplémentaires et la flexibilité des horaires.",
    ],
    answer: 2,
  },
  {
    question: "Que sont les heures supplémentaires ?",
    options: [
      "a) Les heures effectuées pendant les pauses.",
      "b) Les heures de travail effectuées au-delà de la durée légale de travail.",
      "c) Les heures de travail effectuées uniquement le week-end.",
      "d) Les heures de travail supplémentaires imposées par l'employeur sans compensation.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle est la rémunération des heures supplémentaires jusqu'à 48 heures ?",
    options: [
      "a) 10% du taux horaire.",
      "b) 12% du taux horaire.",
      "c) 15% du taux horaire.",
      "d) 35% du taux horaire.",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle est la rémunération des heures supplémentaires effectuées entre 21 heures et 5 heures ?",
    options: [
      "a) 35% du taux horaire.",
      "b) 50% du taux horaire les jours ouvrables.",
      "c) 50% du taux horaire tous les jours.",
      "d) 100% du taux horaire tous les jours.",
    ],
    answer: 1,
  },
  {
    question:
      "Quel est le taux de rémunération des heures supplémentaires effectuées les dimanches et jours fériés ?",
    options: [
      "a) 50% du taux horaire.",
      "b) 35% du taux horaire.",
      "c) 100% du taux horaire.",
      "d) 120% du taux horaire.",
    ],
    answer: 2,
  },
  {
    question:
      "Combien d'heures supplémentaires peuvent être effectuées par jour ?",
    options: [
      "a) 2 heures par jour.",
      "b) 4 heures par jour.",
      "c) 6 heures par jour.",
      "d) 8 heures par jour.",
    ],
    answer: 1,
  },
  {
    question:
      "Combien d'heures supplémentaires peuvent être effectuées par semaine ?",
    options: [
      "a) 10 heures par semaine.",
      "b) 15 heures par semaine.",
      "c) 20 heures par semaine.",
      "d) 25 heures par semaine.",
    ],
    answer: 2,
  },
];

const heuresEquivalence: QuestionArray =[
  {
    question: "Que sont les heures d'équivalence ?",
    options: [
      "a) Les heures effectuées au-delà de la durée légale de travail.",
      "b) Les heures de travail effectuées pendant les temps morts dans certains secteurs.",
      "c) Les heures de travail imposées par l'employeur pendant les pauses.",
      "d) Les heures supplémentaires rémunérées à un taux plus élevé.",
    ],
    answer: 1,
  },
  {
    question:
      "Dans quels secteurs les heures d'équivalence sont-elles couramment utilisées ?",
    options: [
      "a) Hôtellerie et restauration.",
      "b) Secteur public.",
      "c) Industrie manufacturière.",
      "d) Secteur informatique.",
    ],
    answer: 0,
  },
  {
    question:
      "Pourquoi les heures d'équivalence sont-elles appliquées dans certains secteurs ?",
    options: [
      "a) Parce que les travailleurs doivent effectuer des heures supplémentaires.",
      "b) Parce qu'il y a des temps morts pendant lesquels les employés ne travaillent pas réellement.",
      "c) Parce que les travailleurs bénéficient d'une prime pour les heures supplémentaires.",
      "d) Parce que les heures de travail sont divisées en périodes distinctes.",
    ],
    answer: 1,
  },
];

const heuresRecuperation: QuestionArray =[
  {
    question: "Que sont les heures de récupération ?",
    options: [
      "a) Des heures de travail effectuées au-delà de la durée légale.",
      "b) Des heures qui permettent de compenser le temps perdu à cause d'un cas de force majeure.",
      "c) Des heures supplémentaires rémunérées à un taux plus élevé.",
      "d) Des heures de travail pendant les périodes de pause.",
    ],
    answer: 1,
  },
  {
    question:
      "Les heures de récupération ouvrent-elles droit à une rémunération complémentaire ?",
    options: [
      "a) Oui, elles sont rémunérées à un taux supérieur.",
      "b) Non, elles ne donnent pas droit à une rémunération complémentaire.",
      "c) Oui, mais seulement si elles sont effectuées pendant la nuit.",
      "d) Non, mais elles sont compensées par un congé supplémentaire.",
    ],
    answer: 1,
  },
  {
    question: "Pourquoi les heures de récupération sont-elles utilisées ?",
    options: [
      "a) Pour compenser le travail supplémentaire effectué pendant les heures supplémentaires.",
      "b) Pour récupérer les heures perdues en raison d'un cas de force majeure.",
      "c) Pour permettre aux employés de prendre des pauses plus longues.",
      "d) Pour offrir une rémunération supplémentaire aux travailleurs.",
    ],
    answer: 1,
  },
];

const modulationRepos: QuestionArray =[
  {
    question: "Qu'est-ce que la modulation du temps de travail ?",
    options: [
      "a) Une réduction des heures de travail pendant les périodes de moindre activité.",
      "b) Un accord d'entreprise permettant de répartir inégalement les heures de travail.",
      "c) Un dispositif de rémunération pour les heures supplémentaires.",
      "d) Un mécanisme permettant de récupérer les heures de travail perdues.",
    ],
    answer: 1,
  },
  {
    question: "Que sont les heures de dérogation ?",
    options: [
      "a) Les heures effectuées pendant les jours fériés.",
      "b) Les heures supplémentaires effectuées pendant les périodes de grande activité.",
      "c) Les heures non rémunérées pendant le repos hebdomadaire.",
      "d) Les heures de travail effectuées par les travailleurs à temps partiel.",
    ],
    answer: 1,
  },
  {
    question: "Quel est le repos hebdomadaire légal ?",
    options: [
      "a) 48 heures consécutives.",
      "b) 24 heures consécutives, généralement le dimanche.",
      "c) 36 heures consécutives, avec des heures supplémentaires.",
      "d) Un jour de repos par semaine, au choix de l'employeur.",
    ],
    answer: 1,
  },
  {
    question: "Quels jours sont considérés comme jours fériés au Bénin ?",
    options: [
      "a) 1er janvier, 1er août, 25 décembre.",
      "b) 1er janvier, 15 août, 25 décembre.",
      "c) 1er janvier, 10 janvier, Lundi de Pâques.",
      "d) 1er janvier, 10 janvier, Jour de Ramadan.",
    ],
    answer: 0,
  },
  {
    question:
      "Les heures supplémentaires effectuées pendant le repos légal hebdomadaire sont-elles rémunérées à un taux majoré ?",
    options: [
      "a) Oui, elles sont majorées de 50% et de 100% pour les heures de nuit.",
      "b) Non, elles sont rémunérées au taux horaire normal.",
      "c) Oui, elles sont majorées de 25% seulement.",
      "d) Non, les heures supplémentaires effectuées pendant le repos légal sont interdites.",
    ],
    answer: 0,
  },
];

const congésTravailleurs: QuestionArray =[
  {
    question: "Qu'est-ce qu'un congé dû à une maladie ?",
    options: [
      "a) Un congé payé pour des raisons personnelles.",
      "b) Un congé dû à une maladie dûment constatée par un médecin agréé.",
      "c) Un congé donné pour des vacances.",
      "d) Un congé sans rémunération pendant une longue maladie.",
    ],
    answer: 1,
  },
  {
    question: "Que se passe-t-il si une maladie dépasse 6 mois ?",
    options: [
      "a) Le travailleur continue de bénéficier de son traitement intégral.",
      "b) Le travailleur ne bénéficie plus de congé maladie.",
      "c) Le travailleur bénéficie de la moitié de son traitement.",
      "d) Le travailleur est réaffecté à un autre poste.",
    ],
    answer: 2,
  },
  {
    question: "Combien de semaines dure un congé de maternité ?",
    options: [
      "a) 10 semaines.",
      "b) 14 semaines.",
      "c) 16 semaines.",
      "d) 18 semaines.",
    ],
    answer: 1,
  },
  {
    question:
      "Combien de jours de congé le travailleur bénéficie-t-il pour le mariage ?",
    options: ["a) 1 jour.", "b) 3 jours.", "c) 5 jours.", "d) 7 jours."],
    answer: 1,
  },
  {
    question:
      "Quel est le nombre maximum de jours de permissions exceptionnelles qu'un travailleur peut obtenir par an ?",
    options: ["a) 5 jours.", "b) 10 jours.", "c) 15 jours.", "d) 20 jours."],
    answer: 1,
  },
  {
    question:
      "Combien de jours d'autorisation d'absence un travailleur peut-il obtenir par an ?",
    options: ["a) 10 jours.", "b) 12 jours.", "c) 15 jours.", "d) 20 jours."],
    answer: 2,
  },
];

const questionTheme7: QuestionArray =[
  ...dureeTravail,
  ...heuresEquivalence,
  ...heuresRecuperation,
  ...modulationRepos,
  ...congésTravailleurs,
];

const formules: QuestionArray =[
  {
    question:
      "Quelle est la formule pour calculer les heures supplémentaires (HS) ?",
    options: [
      "a) HS = Heures légales - Heures travaillées",
      "b) HS = Heures travaillées - Heures légales",
      "c) HS = (Heures travaillées + Heures légales) ÷ 2",
      "d) HS = Heures travaillées × Heures légales",
    ],
    answer: 1,
  },
  {
    question:
      "Si un employé a travaillé 50 heures en une semaine, combien d'heures supplémentaires a-t-il effectuées si la durée légale est de 40 heures ?",
    options: ["a) 8 heures", "b) 10 heures", "c) 12 heures", "d) 15 heures"],
    answer: 1,
  },
  {
    question:
      "Quelle est la formule pour calculer la rémunération des heures supplémentaires majorées à 50 % ?",
    options: [
      "a) Rémunération = Heures supplémentaires × Taux horaire",
      "b) Rémunération = Heures supplémentaires × Taux horaire × 1.5",
      "c) Rémunération = Heures supplémentaires × Taux horaire × 2",
      "d) Rémunération = Heures supplémentaires × Taux horaire × 0.5",
    ],
    answer: 1,
  },
  {
    question:
      "Un employé travaille 45 heures dans une semaine. Si son taux horaire est de 10 €, combien gagne-t-il pour 5 heures supplémentaires à 12 % de majoration ?",
    options: ["a) 50 €", "b) 56 €", "c) 60 €", "d) 70 €"],
    answer: 1,
  },
  {
    question:
      "Comment calcule-t-on la rémunération pour les heures de nuit à 50 % de majoration ?",
    options: [
      "a) Rémunération = Heures de nuit × Taux horaire × 1.5",
      "b) Rémunération = Heures de nuit × Taux horaire × 0.5",
      "c) Rémunération = Heures de nuit × Taux horaire × 2",
      "d) Rémunération = Heures de nuit × Taux horaire",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle est la durée hebdomadaire maximale de travail autorisée sans heures supplémentaires ?",
    options: ["a) 35 heures", "b) 40 heures", "c) 45 heures", "d) 48 heures"],
    answer: 1,
  },
  {
    question:
      "Quelle est la formule pour calculer les heures équivalentes dans un secteur avec des temps morts ?",
    options: [
      "a) Heures équivalentes = Heures travaillées - Temps morts",
      "b) Heures équivalentes = Heures travaillées + Temps morts",
      "c) Heures équivalentes = (Heures travaillées × 2) - Temps morts",
      "d) Heures équivalentes = Heures légales ÷ Temps morts",
    ],
    answer: 1,
  },
  {
    question:
      "Un employé a travaillé 6 heures un dimanche et 4 heures de nuit ce jour-là. Si le taux horaire est de 12 €, quelle est la rémunération totale avec une majoration de 50 % pour le jour et 100 % pour la nuit ?",
    options: ["a) 108 €", "b) 144 €", "c) 204 €", "d) 192 €"],
    answer: 2,
  },
  {
    question:
      "Quelle est la limite annuelle des heures supplémentaires au-delà de laquelle une majoration de 35 % s'applique ?",
    options: [
      "a) 400 heures",
      "b) 420 heures",
      "c) 480 heures",
      "d) 500 heures",
    ],
    answer: 2,
  },
  {
    question:
      "Si un employé effectue 20 heures supplémentaires sur un mois avec un taux horaire de 15 €, combien gagnera-t-il si la majoration est de 12 % ?",
    options: ["a) 300 €", "b) 320 €", "c) 336 €", "d) 340 €"],
    answer: 2,
  },
  {
    question:
      "Comment calcule-t-on le temps de récupération pour un travailleur en cas de force majeure ?",
    options: [
      "a) Temps récupéré = Heures perdues - Heures travaillées",
      "b) Temps récupéré = Heures perdues × Taux horaire",
      "c) Temps récupéré = Heures perdues",
      "d) Temps récupéré = Heures perdues + Heures supplémentaires",
    ],
    answer: 2,
  },
  {
    question:
      "Un employé a travaillé 10 heures de nuit sur un jour férié. Si son taux horaire est de 20 €, combien gagne-t-il avec une majoration de 100 % ?",
    options: ["a) 200 €", "b) 300 €", "c) 400 €", "d) 500 €"],
    answer: 2,
  },
];

const mathQuestions: QuestionArray =[
  // Fonction définie
  {
    question: "Qu'est-ce qu'une fonction ?",
    options: [
      "Un ensemble de points aléatoires.",
      "Une relation qui associe à chaque élément d'un ensemble un unique élément d'un autre ensemble.",
      "Un tableau de valeurs numériques.",
      "Un graphe représentant une droite.",
    ],
    answer: 1,
  },

  // Limite d'une fonction
  {
    question: "La limite de f(x) lorsque x tend vers a existe si :",
    options: [
      "Les limites à gauche et à droite sont égales.",
      "La fonction est périodique.",
      "La fonction est constante.",
      "Il n'y a pas de valeurs interdites pour x.",
    ],
    answer: 0,
  },

  // Continuité en un point
  {
    question: "Une fonction est continue en x = a si :",
    options: [
      "f(a) n'est pas défini.",
      "f(a) est défini, sa limite existe, et elles sont égales.",
      "La dérivée de f(x) existe en a.",
      "La fonction est croissante en a.",
    ],
    answer: 1,
  },

  // Asymptote verticale
  {
    question: "Une asymptote verticale existe en x = a si :",
    options: [
      "La fonction tend vers une constante lorsque x tend vers a.",
      "La fonction tend vers l'infini ou moins l'infini lorsque x tend vers a.",
      "La fonction est périodique.",
      "La dérivée seconde de la fonction est nulle.",
    ],
    answer: 1,
  },

  // Asymptote horizontale
  {
    question:
      "Si la limite de f(x) lorsque x \\to \\infty est une constante L, alors :",
    options: [
      "La fonction a une asymptote verticale.",
      "La fonction a une asymptote horizontale.",
      "La fonction n'a pas d'asymptote.",
      "La fonction est linéaire.",
    ],
    answer: 1,
  },

  // Asymptote oblique
  {
    question: "Une asymptote oblique existe si :",
    options: [
      "La limite de la fonction est infinie.",
      "La limite de la fonction est finie.",
      "Le rapport f(x)/x tend vers une constante non nulle lorsque x \\to \\infty.",
      "La fonction est définie par morceaux.",
    ],
    answer: 2,
  },

  // Limites infinies
  {
    question: "Une limite infinie indique que :",
    options: [
      "La fonction tend vers une constante infiniment grande.",
      "La fonction devient arbitrairement grande en valeur absolue.",
      "La fonction a une asymptote horizontale.",
      "La fonction est croissante strictement.",
    ],
    answer: 1,
  },

  // Dérivabilité et continuité
  {
    question: "Si une fonction est dérivable en x = a, alors :",
    options: [
      "Elle est toujours continue en x = a.",
      "Elle n'est pas continue en x = a.",
      "Elle a une asymptote verticale en x = a.",
      "Elle est croissante en x = a.",
    ],
    answer: 0,
  },

  // Fonction définie par morceaux
  {
    question: "Pour une fonction définie par morceaux, elle est continue si :",
    options: [
      "Les limites à gauche et à droite sont égales à chaque point de raccord.",
      "Les limites à gauche et à droite existent mais ne sont pas égales.",
      "Elle n'a pas de point de raccord.",
      "Elle est périodique.",
    ],
    answer: 0,
  },

  // Fonction constante
  {
    question:
      "Quelle est une propriété caractéristique d'une fonction constante ?",
    options: [
      "Sa pente est nulle en tout point.",
      "Elle a une asymptote oblique.",
      "Elle est toujours discontinue.",
      "Elle est dérivable uniquement en un point.",
    ],
    answer: 0,
  },
];

const OSI: QuestionArray =[
  {
    question: "Qu'est-ce que le modèle OSI ?",
    options: [
      "Un protocole réseau spécifique",
      "Un modèle de référence en sept couches pour les communications réseau",
      "Un système d'exploitation",
      "Un logiciel de gestion de réseaux",
    ],
    answer: 1, // Index de la réponse correcte (0-based)
  },
  {
    question:
      "Quelle est la principale fonction de la couche physique dans le modèle OSI ?",
    options: [
      "Assurer la connectivité et le transfert des données brutes entre les appareils",
      "Gérer l'adressage IP et l'acheminement des paquets",
      "Fournir des interfaces pour les applications",
      "Garantir une transmission sécurisée des données",
    ],
    answer: 0,
  },
  {
    question: "Quel est le rôle principal de la couche de liaison de données ?",
    options: [
      "Gérer les connexions entre applications",
      "Régler les erreurs de transmission et contrôler l'accès au média",
      "Acheminer les paquets sur différents réseaux",
      "Fournir des services aux utilisateurs finaux",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle couche est responsable de l'acheminement des paquets entre différents réseaux ?",
    options: [
      "Couche application",
      "Couche transport",
      "Couche réseau",
      "Couche session",
    ],
    answer: 2,
  },
  {
    question: "Quel est le rôle de la couche transport dans le modèle OSI ?",
    options: [
      "Gérer l'adressage physique",
      "Assurer un transfert de données fiable et ordonné entre les hôtes",
      "Fournir une interface utilisateur pour les données réseau",
      "Acheminer les paquets à travers les routeurs",
    ],
    answer: 1,
  },
  {
    question:
      "Quelle couche du modèle OSI est responsable de l'ouverture, la gestion et la fermeture des sessions entre deux applications ?",
    options: [
      "Couche physique",
      "Couche session",
      "Couche transport",
      "Couche présentation",
    ],
    answer: 1,
  },
  {
    question: "La couche présentation sert principalement à :",
    options: [
      "Acheminer les paquets",
      "Fournir des services applicatifs",
      "Convertir les données entre le format de l'application et le format réseau",
      "Assurer un transport fiable des données",
    ],
    answer: 2,
  },
  {
    question: "Quel est le rôle de la couche application dans le modèle OSI ?",
    options: [
      "Fournir une interface utilisateur pour accéder aux services réseau",
      "Gérer les sessions entre applications",
      "Acheminer les données entre les réseaux",
      "Contrôler les erreurs de transmission",
    ],
    answer: 0,
  },
  {
    question:
      "Quel protocole fonctionne principalement dans la couche transport ?",
    options: ["HTTP", "TCP", "Ethernet", "DNS"],
    answer: 1,
  },
  {
    question:
      "Dans quel ordre les données traversent-elles les couches du modèle OSI lorsqu'elles sont transmises ?",
    options: [
      "Application -> Physique -> Réseau -> Transport -> Présentation",
      "Physique -> Liaison de données -> Réseau -> Transport -> Session -> Présentation -> Application",
      "Application -> Présentation -> Session -> Transport -> Réseau -> Liaison de données -> Physique",
      "Session -> Transport -> Présentation -> Physique -> Liaison de données",
    ],
    answer: 2,
  },
];

export {
  questionTheme1,
  questionTheme2,
  questionTheme3,
  questionTheme4,
  questionTheme5,
  questionTheme6,
  questionTheme7,
  formules,
  mathQuestions,
  OSI,
};
