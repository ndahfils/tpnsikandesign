import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Star, Shield, Zap, Sparkles, Target, TrendingUp } from 'lucide-react';
import PageSlider from '../components/PageSlider';

const Home: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Excellence Architecturale',
      subtitle: 'Votre Vision • Notre Expertise • Votre Réussite',
      description: 'Transformons ensemble vos rêves en chefs-d\'œuvre architecturaux avec 15 ans d\'innovation'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Innovation & Modernité',
      subtitle: 'Designs Avant-Gardistes • Technologies Avancées',
      description: 'Des créations contemporaines qui redéfinissent l\'art de vivre'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Qualité Premium',
      subtitle: 'Matériaux d\'Exception • Finitions Parfaites',
      description: 'Seule l\'excellence guide nos réalisations pour des constructions éternelles'
    }
  ];

  const services = [
    {
      title: 'Construction Premium',
      description: 'Réalisation complète de projets architecturaux d\'exception',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: '🏗️',
      gradient: 'gradient-emerald'
    },
    {
      title: 'Rénovation Luxe',
      description: 'Transformation haut de gamme de vos espaces de vie',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: '✨',
      gradient: 'gradient-fire'
    },
    {
      title: 'Design d\'Intérieur',
      description: 'Conception et décoration d\'espaces contemporains uniques',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: '🎨',
      gradient: 'gradient-rainbow'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Clients Conquis', color: 'text-primary-green', bg: 'bg-primary-green/10' },
    { icon: Award, number: '15+', label: 'Années d\'Excellence', color: 'text-primary-red', bg: 'bg-primary-red/10' },
    { icon: CheckCircle, number: '1000+', label: 'Projets Réalisés', color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
    { icon: Clock, number: '24/7', label: 'Support Premium', color: 'text-primary-gray', bg: 'bg-primary-gray/10' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Garantie Décennale',
      description: 'Protection totale sur tous nos ouvrages',
      color: 'text-primary-green'
    },
    {
      icon: Star,
      title: 'Expertise Certifiée',
      description: 'Équipe qualifiée aux standards internationaux',
      color: 'text-accent-gold'
    },
    {
      icon: Zap,
      title: 'Délais Maîtrisés',
      description: 'Livraison garantie dans les temps convenus',
      color: 'text-primary-red'
    }
  ];

  return (
    <div>
      {/* Hero Slider Ultra-Moderne */}
      <PageSlider slides={heroSlides} height="h-screen" />

      {/* Services Section - Design Révolutionnaire */}
      <section className="py-24 geometric-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header avec effets */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center glass-card px-6 py-3 rounded-full mb-8 animate-slide-bounce">
              <Sparkles className="text-accent-gold mr-2 animate-pulse-glow" size={20} />
              <span className="text-primary-green font-bold text-sm uppercase tracking-wider">
                Services d'Exception
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-gradient-modern mb-8 animate-zoom-rotate">
              Nos Services Premium
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto animate-float leading-relaxed">
              Découvrez notre gamme exclusive de services haut de gamme pour tous vos projets d'exception
            </p>
          </div>

          {/* Services Grid Ultra-Moderne */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group hover-lift-strong">
                <div className="card-3d glass-card rounded-3xl overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${service.gradient} opacity-80`}></div>
                    <div className="absolute top-6 left-6 text-6xl animate-float">{service.icon}</div>
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="text-white">
                        <h3 className="text-3xl font-black mb-4 text-shadow-glow">{service.title}</h3>
                        <p className="text-lg opacity-90">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="p-8">
                    <Link 
                      to="/services" 
                      className="btn-futuristic w-full text-center block"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Central */}
          <div className="text-center">
            <Link
              to="/services"
              className="btn-futuristic text-2xl px-12 py-6 hover-lift-strong"
            >
              Tous nos Services <ArrowRight size={24} className="ml-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Ultra Futuriste */}
      <section className="py-24 gradient-dark-modern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift-strong">
                <div className="glass-dark rounded-3xl p-8 hover-glow">
                  <div className={`${stat.bg} rounded-2xl p-6 mb-6 inline-block`}>
                    <stat.icon size={64} className={`${stat.color} animate-pulse-glow`} />
                  </div>
                  <div className="text-5xl font-black text-white mb-4 animate-float">{stat.number}</div>
                  <div className="text-xl text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Design Innovant */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Content */}
            <div className="animate-slide-bounce">
              <div className="inline-flex items-center glass-card px-6 py-3 rounded-full mb-8">
                <Target className="text-primary-green mr-2 animate-pulse-glow" size={20} />
                <span className="text-primary-green font-bold text-sm uppercase tracking-wider">
                  Pourquoi Nous Choisir
                </span>
              </div>
              
              <h2 className="text-5xl font-black text-gradient-modern mb-12">
                L'Excellence TP N'SIKAN
              </h2>
              
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group hover-lift-strong">
                    <div className="gradient-rainbow p-4 rounded-2xl">
                      <feature.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link
                  to="/a-propos"
                  className="btn-futuristic hover-lift-strong"
                >
                  Notre Histoire <ArrowRight size={20} className="ml-3" />
                </Link>
              </div>
            </div>
            
            {/* Image avec effets */}
            <div className="relative animate-float">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Équipe TP N'SIKAN"
                  className="rounded-3xl shadow-2xl hover-tilt"
                />
                <div className="absolute -inset-4 gradient-rainbow rounded-3xl opacity-20 blur-xl"></div>
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-3xl text-center hover-lift-strong">
                <div className="text-5xl font-black text-gradient-modern mb-2">15+</div>
                <div className="text-lg font-bold text-gray-700">Années d'Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Impactant */}
      <section className="py-32 gradient-rainbow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Effets de particules */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center glass-dark px-8 py-4 rounded-full mb-12 animate-slide-bounce">
              <TrendingUp className="text-accent-gold mr-3 animate-pulse-glow" size={24} />
              <span className="text-white font-bold text-lg uppercase tracking-wider">
                Votre Projet Commence Ici
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 animate-zoom-rotate text-shadow-glow">
              Prêt à Concrétiser Votre Rêve ?
            </h2>
            
            <p className="text-2xl text-white/90 mb-16 max-w-4xl mx-auto animate-float leading-relaxed">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
              Notre équipe d'experts transformera vos idées en réalité exceptionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-bounce">
              <Link
                to="/contact"
                className="btn-futuristic text-2xl px-12 py-6 bg-white text-gray-900 hover:bg-gray-100"
              >
                Devis Gratuit <ArrowRight size={24} className="ml-4" />
              </Link>
              <Link
                to="/projets"
                className="glass-dark px-12 py-6 rounded-full font-bold text-white text-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover-glow"
              >
                Nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;