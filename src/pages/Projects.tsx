import React, { useState } from 'react';
import { Calendar, MapPin, User, Eye, Heart } from 'lucide-react';
import PageSlider from '../components/PageSlider';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [likedProjects, setLikedProjects] = useState<number[]>([]);

  const projectsSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Nos Réalisations',
      subtitle: '1000+ Projets • 500+ Clients Satisfaits',
      description: 'Découvrez nos créations qui marquent les esprits'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Excellence Architecturale',
      subtitle: 'Designs Contemporains • Finitions Premium',
      description: 'Chaque projet reflète notre passion pour l\'excellence'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Innovation & Créativité',
      subtitle: 'Concepts Uniques • Solutions Sur-Mesure',
      description: 'Transformons vos rêves en réalité architecturale'
    }
  ];

  const categories = [
    { id: 'tous', name: 'Tous les projets', count: 12 },
    { id: 'construction', name: 'Construction Neuve', count: 6 },
    { id: 'renovation', name: 'Rénovation', count: 4 },
    { id: 'amenagement', name: 'Aménagement', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Villa Moderne Cocody',
      category: 'construction',
      location: 'Cocody, Abidjan',
      date: '2024',
      client: 'Famille Kouassi',
      description: 'Construction d\'une villa moderne de 300m² avec piscine infinity et jardin paysager contemporain',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      budget: '45M FCFA',
      duration: '8 mois',
      views: 1250
    },
    {
      id: 2,
      title: 'Rénovation Appartement Plateau',
      category: 'renovation',
      location: 'Plateau, Abidjan',
      date: '2024',
      client: 'M. Diabaté',
      description: 'Rénovation complète d\'un appartement de 150m² avec cuisine ouverte design et domotique intégrée',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      budget: '18M FCFA',
      duration: '4 mois',
      views: 890
    },
    {
      id: 3,
      title: 'Showroom Design Marcory',
      category: 'amenagement',
      location: 'Marcory, Abidjan',
      date: '2024',
      client: 'Boutique Luxury',
      description: 'Aménagement d\'un showroom haut de gamme de 400m² avec éclairage LED et mobilier sur mesure',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      budget: '25M FCFA',
      duration: '3 mois',
      views: 2100
    },
    {
      id: 4,
      title: 'Résidence Haut Standing Riviera',
      category: 'construction',
      location: 'Riviera, Abidjan',
      date: '2023',
      client: 'Promoteur Immobilier XYZ',
      description: 'Construction d\'une résidence de 12 appartements haut standing avec piscine commune et parking souterrain',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      budget: '120M FCFA',
      duration: '12 mois',
      views: 3200
    }
  ];

  const filteredProjects = activeCategory === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleLike = (projectId: number) => {
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <div>
      {/* Projects Slider - PLUS DE PADDING TOP */}
      <PageSlider slides={projectsSlides} height="h-96" />

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-primary-green text-white'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group hover-lift">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </div>
                    
                    {/* Like Button */}
                    <button
                      onClick={() => toggleLike(project.id)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Heart 
                        size={20} 
                        className={`${
                          likedProjects.includes(project.id) 
                            ? 'text-red-500 fill-current' 
                            : 'text-white'
                        }`} 
                      />
                    </button>

                    {/* View Count */}
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Eye size={14} className="mr-1" />
                      {project.views}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2 text-primary-green" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2 text-primary-green" />
                        {project.date} • {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={16} className="mr-2 text-primary-green" />
                        {project.client}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-primary-green">{project.budget}</span>
                      <span className="text-sm text-gray-500">Budget total</span>
                    </div>

                    {/* Mini Gallery */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>

                    <button className="w-full btn-modern bg-gradient-primary text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      Voir le Projet Complet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nos <span className="text-accent-gold">Performances</span>
            </h2>
            <p className="text-xl text-gray-200">Des résultats qui témoignent de notre excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Projets Réalisés', icon: '🏗️' },
              { number: '500+', label: 'Clients Satisfaits', icon: '😊' },
              { number: '15+', label: 'Années d\'Excellence', icon: '⭐' },
              { number: '98%', label: 'Taux de Satisfaction', icon: '💯' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-accent-gold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Votre projet sera notre <span className="text-gradient">prochaine réussite</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Rejoignez nos nombreux clients satisfaits et confiez-nous la réalisation de votre projet de rêve.
          </p>
          <button className="btn-modern bg-gradient-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover-lift">
            Commencer mon Projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;