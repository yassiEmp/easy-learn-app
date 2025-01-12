type Question = {
  question: string;
  options: string[];
  answer: number;
}[];

const questionTheme1: Question = [
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

const questionTheme2: Question = [
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
export const questionTheme3P1: Question = [
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
export const contrat_a_duree_determine: Question = [
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
export const travail_intérimaire: Question = [
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
export const sous_traitance: Question = [
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
export const engagement_a_lessai: Question = [
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
export const CDI: Question = [
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
export const occasionnel: Question = [
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

const questionTheme3: Question = [
  ...questionTheme3P1,
  ...contrat_a_duree_determine,
  ...travail_intérimaire,
  ...sous_traitance,
  ...engagement_a_lessai,
  ...CDI,
  ...occasionnel,
];

//question du theme 4
export const questionTheme4P1: Question = [
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
export const capaciteJuridique: Question = [
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
export const consentement: Question = [
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
export const objet: Question = [
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
export const cause: Question = [
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

const questionTheme4: Question = [
  ...questionTheme4P1,
  ...capaciteJuridique,
  ...consentement,
  ...objet,
  ...cause,
];

//question du theme 5
export const droitTravailleur: Question = [
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
export const devoirTravailleur: Question = [
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
export const pouvoirEmployeur: Question = [
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
    answer:1,
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
    answer:2,
  },
];
export const devoirEmployeur: Question = [
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

export {
  questionTheme1,
  questionTheme2,
  questionTheme3,
  questionTheme4,
  questionTheme5,
};
