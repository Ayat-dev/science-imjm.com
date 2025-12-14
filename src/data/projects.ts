import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Station Météo Connectée DIY',
    description: 'Construction d\'une station météo autonome avec capteurs multiples, transmission IoT et dashboard de visualisation en temps réel.',
    category: 'IoT',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'proj2',
    title: 'Analyse de Données COVID-19',
    description: 'Projet d\'analyse statistique et visualisation des données pandémiques avec Python, Pandas et modèles prédictifs.',
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'proj3',
    title: 'Robot Suiveur de Ligne',
    description: 'Conception et programmation d\'un robot autonome capable de suivre un tracé au sol grâce à des capteurs infrarouges.',
    category: 'Robotique',
    image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
