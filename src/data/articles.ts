import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'L\'intelligence artificielle au service de la médecine',
    excerpt: 'Comment les algorithmes de deep learning révolutionnent le diagnostic médical et permettent une détection précoce des maladies.',
    content: `L'intelligence artificielle transforme radicalement le domaine médical. Les algorithmes de deep learning permettent aujourd'hui d'analyser des images médicales avec une précision qui rivalise, voire surpasse, celle des experts humains.

## Applications concrètes

Les réseaux de neurones convolutifs (CNN) sont particulièrement efficaces pour détecter les anomalies dans les radiographies, IRM et scanners. Ces systèmes peuvent identifier des patterns subtils que l'œil humain pourrait manquer.

## Le saviez-vous ?

Des études récentes montrent que l'IA peut détecter certains cancers avec un taux de précision supérieur à 95%, permettant ainsi un traitement précoce et plus efficace.

## L'avenir de la médecine prédictive

Au-delà du diagnostic, l'IA permet également de prédire l'évolution des maladies et de personnaliser les traitements en fonction du profil génétique de chaque patient.`,
    category: 'IA',
    author: 'Dr. Marie Dubois',
    date: '2025-12-05',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Intelligence Artificielle', 'Médecine', 'Deep Learning'],
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Les nanotechnologies dans l\'électronique moderne',
    excerpt: 'Découvrez comment la miniaturisation extrême des composants électroniques ouvre de nouvelles perspectives technologiques.',
    content: `Les nanotechnologies représentent l'une des frontières les plus prometteuses de la science moderne. À l'échelle du nanomètre (un milliardième de mètre), les propriétés physiques et chimiques de la matière changent radicalement.

## Transistors à l'échelle nanométrique

Les processeurs modernes intègrent des transistors dont la taille atteint désormais 3 nanomètres. Cette miniaturisation permet d'augmenter considérablement la puissance de calcul tout en réduisant la consommation énergétique.

## Le saviez-vous ?

Un processeur moderne peut contenir plus de 50 milliards de transistors sur une surface de quelques centimètres carrés !

## Applications futures

Les nanotechnologies ouvrent la voie à des innovations révolutionnaires : ordinateurs quantiques, implants médicaux intelligents, matériaux aux propriétés sur mesure...`,
    category: 'Physique',
    author: 'Prof. Jean Martin',
    date: '2025-12-03',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Nanotechnologie', 'Électronique', 'Innovation'],
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'La chimie verte : réinventer l\'industrie chimique',
    excerpt: 'Les principes de la chimie durable pour un avenir plus écologique et des processus industriels respectueux de l\'environnement.',
    content: `La chimie verte, ou chimie durable, vise à concevoir des produits et des processus chimiques qui réduisent ou éliminent l'utilisation et la génération de substances dangereuses.

## Les 12 principes de la chimie verte

Paul Anastas et John Warner ont défini en 1998 les principes fondamentaux qui guident cette discipline : prévention des déchets, efficacité atomique, utilisation de substances moins dangereuses...

## Le saviez-vous ?

L'industrie chimique représente environ 7% des émissions mondiales de CO2. La chimie verte pourrait réduire significativement cet impact.

## Innovations récentes

De nouveaux catalyseurs biologiques permettent désormais de réaliser des synthèses complexes à température ambiante et sans solvants toxiques, révolutionnant ainsi les processus industriels.`,
    category: 'Chimie',
    author: 'Dr. Sophie Lefevre',
    date: '2025-12-01',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Chimie', 'Écologie', 'Innovation'],
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'Robotique collaborative : l\'humain et la machine ensemble',
    excerpt: 'Les cobots transforment l\'industrie en travaillant aux côtés des humains pour augmenter productivité et sécurité.',
    category: 'Robotique',
    author: 'Ing. Marc Rousseau',
    date: '2025-11-28',
    image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Robotique', 'Industrie 4.0', 'Automatisation'],
    readTime: '5 min'
  },
  {
    id: '5',
    title: 'L\'énergie de fusion nucléaire : le Soleil sur Terre',
    excerpt: 'ITER et les avancées récentes dans la maîtrise de la fusion nucléaire, source d\'énergie propre et quasi-illimitée.',
    category: 'Physique',
    author: 'Dr. Pierre Moreau',
    date: '2025-11-25',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Énergie', 'Physique nucléaire', 'Fusion'],
    readTime: '8 min'
  },
  {
    id: '6',
    title: 'CRISPR-Cas9 : révolution en édition génétique',
    excerpt: 'La technologie CRISPR permet de modifier l\'ADN avec une précision sans précédent, ouvrant des perspectives thérapeutiques majeures.',
    category: 'Vulgarisation',
    author: 'Dr. Claire Benoit',
    date: '2025-11-22',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Génétique', 'Biotechnologie', 'Médecine'],
    readTime: '6 min'
  }
];

export const categories = [
  'Tous',
  'Chimie',
  'Physique',
  'IA',
  'Robotique',
  'Vulgarisation'
];
