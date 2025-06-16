import React from 'react';
import { Home, Wrench, Palette, Building, Hammer, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import PageSlider from '../components/PageSlider';

const Services: React.FC = () => {
  const servicesSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Services d\'Excellence',
      subtitle: 'Construction • Rénovation • Aménagement',
      description: 'Une gamme complète de services pour tous vos projets'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Expertise Reconnue',
      subtitle: 'Matériaux Premium • Finitions Parfaites',
      description: '15 ans d\'expérience au service de la qualité'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Innovation Continue',
      subtitle: 'Techniques Modernes • Designs Contemporains',
      description: 'À la pointe des dernières tendances architecturales'
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Construction Neuve',
      description: 'Construction de maisons individuelles, villas et bâtiments commerciaux avec les dernières normes',
      features: ['Plans architecturaux sur mesure', 'Gros œuvre certifié', 'Second œuvre premium', 'Finitions haut de gamme'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'À partir de 150 000 FCFA/m²'
    },
    {
      icon: Wrench,
      title: 'Rénovation Complète',
      description: 'Transformation et modernisation de vos espaces existants avec une approche écologique',
      features: ['Rénovation intérieure design', 'Rénovation extérieure moderne', 'Mise aux normes énergétiques', 'Isolation thermique avancée'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'À partir de 80 000 FCFA/m²'
    },
    {
      icon: Palette,
      title: 'Aménagement Intérieur',
      description: 'Conception et réalisation de vos espaces de vie avec un design personnalisé',
      features: ['Design intérieur sur mesure', 'Mobilier contemporain', 'Éclairage intelligent', 'Décoration premium'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'À partir de 50 000 FCFA/m²'
    },
    {
      icon: Home,
      title: 'Extension de Maison',
      description: 'Agrandissement et extension de votre habitat avec respect de l\'architecture existante',
      features: ['Étude de faisabilité complète', 'Permis de construire inclus', 'Extension horizontale', 'Surélévation moderne'],
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'À partir de 120 000 FCFA/m²'
    },
    {
      icon: Hammer,
      title: 'Travaux de Maçonnerie',
      description: 'Tous types de travaux de maçonnerie générale avec matériaux de qualité supérieure',
      features: ['Fondations renforcées', 'Murs porteurs certifiés', 'Cloisons modernes', 'Dallages techniques'],
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Devis personnalisé'
    },
    {
      icon: Shield,
      title: 'Maintenance & SAV',
      description: 'Service après-vente et maintenance préventive de vos constructions',
      features: ['Garantie décennale incluse', 'Maintenance préventive', 'Réparations d\'urgence', 'Conseils d\'experts'],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'Contrat annuel disponible'
    }
  ];

  const processSteps = [
    { 
      step: '01', 
      title: 'Consultation Gratuite', 
      description: 'Analyse approfondie de vos besoins et étude de faisabilité technique',
      icon: '🤝'
    },
    { 
      step: '02', 
      title: 'Conception & Devis', 
      description: 'Élaboration des plans détaillés et devis transparent',
      icon: '📐'
    },
    { 
      step: '03', 
      title: 'Réalisation Expert', 
      description: 'Exécution des travaux avec suivi qualité quotidien',
      icon: '🔨'
    },
    { 
      step: '04', 
      title: 'Livraison & Garantie', 
      description: 'Réception des travaux et service après-vente premium',
      icon: '✅'
    }
  ];

  return (
    <div>
      {/* Services Slider - PLUS DE PADDING TOP */}
      <PageSlider slides={servicesSlides} height="h-96" />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-gradient">Services</span> Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue et des services haut de gamme pour tous vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-primary-red/20"></div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                          <service.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="text-primary-green mr-3 flex-shrink-0" size={16} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="text-primary-green font-bold text-lg">{service.price}</div>
                        <button className="btn-modern bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                          Devis Gratuit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Notre <span className="text-accent-gold">Processus</span> d'Excellence
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Une méthode éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent-gold text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-200">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Besoin d'un <span className="text-gradient">devis personnalisé</span> ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet. Nous vous proposons un devis gratuit, 
            détaillé et sans engagement sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-modern bg-gradient-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center hover-lift">
              Devis Gratuit <ArrowRight size={20} className="ml-3" />
            </button>
            <button className="btn-modern border-2 border-primary-green text-primary-green px-10 py-4 rounded-full font-semibold hover:bg-primary-green hover:text-white transition-all duration-300 hover-lift">
              Nos Réalisations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;