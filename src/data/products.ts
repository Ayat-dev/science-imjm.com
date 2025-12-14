import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Kit Chimie Expérimentale Pro',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kits Éducatifs',
    description: 'Kit complet pour réaliser plus de 50 expériences de chimie en toute sécurité. Idéal pour étudiants et passionnés de sciences.',
    shortDescription: 'Kit chimie avec 50+ expériences',
    specs: {
      'Nombre d\'expériences': '50+',
      'Niveau': 'Intermédiaire à Avancé',
      'Âge recommandé': '14+',
      'Contenu': 'Tubes, réactifs, lunettes, manuel illustré'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'p2',
    name: 'Microscope Numérique 4K',
    price: 249.99,
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Équipement',
    description: 'Microscope numérique haute résolution avec connectivité USB et logiciel d\'analyse d\'images inclus. Grossissement jusqu\'à 1000x.',
    shortDescription: 'Microscope 4K avec analyse d\'images',
    specs: {
      'Résolution': '4K (3840x2160)',
      'Grossissement': '40x - 1000x',
      'Connectivité': 'USB 3.0',
      'Compatibilité': 'Windows, macOS, Linux'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'p3',
    name: 'Robot Arduino Starter Pack',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Robotique',
    description: 'Kit complet pour débuter en robotique avec Arduino. Inclut carte Arduino Uno, capteurs, moteurs, et tutoriels détaillés.',
    shortDescription: 'Kit robotique Arduino complet',
    specs: {
      'Contrôleur': 'Arduino Uno R3',
      'Capteurs': 'Ultrason, infrarouge, température',
      'Moteurs': '2x servo, 2x DC',
      'Programmation': 'Arduino IDE (C++)'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'p4',
    name: 'Livre: L\'IA Expliquée Simplement',
    price: 24.99,
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Livres',
    description: 'Guide complet et accessible sur l\'intelligence artificielle, du machine learning aux réseaux de neurones. Format 300 pages.',
    shortDescription: 'Guide complet IA pour débutants',
    specs: {
      'Pages': '300',
      'Format': 'Broché',
      'Langue': 'Français',
      'Niveau': 'Débutant à Intermédiaire'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'p5',
    name: 'Set de Pipettes de Précision',
    price: 45.99,
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Équipement',
    description: 'Set de 3 pipettes de précision (10µL, 100µL, 1000µL) avec embouts jetables. Idéal pour travaux de laboratoire.',
    shortDescription: 'Set 3 pipettes professionnelles',
    specs: {
      'Volumes': '10µL, 100µL, 1000µL',
      'Précision': '±1%',
      'Matériau': 'Polypropylène autoclavable',
      'Embouts': '300 embouts inclus'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'p6',
    name: 'Poster: Tableau Périodique Moderne',
    price: 19.99,
    image: 'https://images.pexels.com/photos/9786562/pexels-photo-9786562.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Décoration',
    description: 'Poster grand format du tableau périodique des éléments avec design moderne et informations détaillées sur chaque élément.',
    shortDescription: 'Poster tableau périodique A1',
    specs: {
      'Dimensions': 'A1 (594 × 841 mm)',
      'Matériau': 'Papier couché mat 200g',
      'Impression': 'Haute qualité',
      'Cadre': 'Non inclus'
    },
    inStock: true,
    featured: false
  },
  {
    id: 'p7',
    name: 'Capteur de Qualité de l\'Air IoT',
    price: 79.99,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'IoT',
    description: 'Capteur connecté mesurant CO2, particules fines, température et humidité. Application mobile incluse avec historique et alertes.',
    shortDescription: 'Capteur air connecté multi-paramètres',
    specs: {
      'Mesures': 'CO2, PM2.5, température, humidité',
      'Connectivité': 'WiFi 2.4GHz',
      'Autonomie': 'Alimentation secteur',
      'App': 'iOS & Android'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'p8',
    name: 'Cours en Ligne: Python pour la Science',
    price: 49.99,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Formations',
    description: 'Formation complète en ligne sur Python appliqué aux sciences : NumPy, Pandas, Matplotlib, analyse de données et visualisation.',
    shortDescription: 'Formation Python scientifique 20h',
    specs: {
      'Durée': '20 heures de vidéo',
      'Modules': '12 chapitres',
      'Exercices': '50+ exercices pratiques',
      'Certificat': 'Inclus'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'p9',
    name: 'Oscilloscope USB Portable',
    price: 159.99,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Équipement',
    description: 'Oscilloscope numérique 2 canaux portable avec interface USB. Parfait pour électronique, Arduino et diagnostic de circuits.',
    shortDescription: 'Oscilloscope 2 canaux 20MHz',
    specs: {
      'Canaux': '2',
      'Bande passante': '20MHz',
      'Échantillonnage': '48MS/s',
      'Interface': 'USB 2.0, logiciel inclus'
    },
    inStock: true,
    featured: false
  }
];

export const productCategories = [
  'Tous',
  'Kits Éducatifs',
  'Équipement',
  'Robotique',
  'Livres',
  'IoT',
  'Formations',
  'Décoration'
];
