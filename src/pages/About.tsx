import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, Star, Shield, Zap } from 'lucide-react';
import PageSlider from '../components/PageSlider';

const About: React.FC = () => {
  const aboutSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Notre Histoire',
      subtitle: '15 Ans d\'Excellence • 1000+ Projets Réalisés',
      description: 'Une passion transmise de génération en génération'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Notre Équipe',
      subtitle: 'Experts Certifiés • Passion Partagée',
      description: 'Des professionnels dévoués à votre réussite'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Notre Vision',
      subtitle: 'Innovation • Qualité • Durabilité',
      description: 'Construire l\'avenir avec responsabilité'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque détail, utilisant les meilleures pratiques et matériaux premium.',
      color: 'text-primary-green'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour la construction nous pousse à dépasser les attentes de nos clients.',
      color: 'text-primary-red'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour réaliser leurs rêves.',
      color: 'text-accent-gold'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'La qualité est au cœur de tout ce que nous faisons, de la conception à la livraison.',
      color: 'text-primary-gray'
    }
  ];

  const team = [
    {
      name: 'Kouadio N\'SIKAN',
      role: 'Directeur Général & Fondateur',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Plus de 20 ans d\'expérience dans le BTP, visionnaire et leader',
      specialties: ['Gestion de projet', 'Stratégie d\'entreprise', 'Relations clients']
    },
    {
      name: 'Marie DIABATÉ',
      role: 'Architecte en Chef',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Spécialisée en architecture moderne et design durable',
      specialties: ['Architecture moderne', 'Design durable', 'Conception 3D']
    },
    {
      name: 'Jean KOUASSI',
      role: 'Chef de Chantier Senior',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Expert en gestion de projets complexes et coordination d\'équipes',
      specialties: ['Gestion de chantier', 'Coordination équipes', 'Sécurité']
    },
    {
      name: 'Fatou TRAORÉ',
      role: 'Responsable Qualité',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Garante de nos standards de qualité et certifications',
      specialties: ['Contrôle qualité', 'Certifications', 'Normes ISO']
    }
  ];

  const certifications = [
    { name: 'Certification ISO 9001:2015', icon: '🏆', year: '2020' },
    { name: 'Agrément BTP Côte d\'Ivoire', icon: '📋', year: '2009' },
    { name: 'Certification Sécurité Chantier', icon: '🛡️', year: '2021' },
    { name: 'Label Qualité Construction', icon: '⭐', year: '2022' }
  ];

  const achievements = [
    { number: '2009', label: 'Année de Création', icon: '🎯' },
    { number: '1000+', label: 'Projets Réalisés', icon: '🏗️' },
    { number: '500+', label: 'Clients Satisfaits', icon: '😊' },
    { number: '98%', label: 'Taux de Satisfaction', icon: '💯' }
  ];

  return (
    <div>
      {/* About Slider - PLUS DE PADDING TOP */}
      <PageSlider slides={aboutSlides} height="h-96" />

      {/* Histoire Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Notre <span className="text-gradient">Histoire</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée en 2009 par Kouadio N'SIKAN, TP N'SIKAN PROJET ESPOIR est née de la vision 
                de créer une entreprise de construction qui allie tradition ivoirienne et modernité internationale.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Depuis nos débuts modestes avec une équipe de 5 personnes, nous avons grandi pour devenir 
                l'un des acteurs les plus respectés du secteur en Côte d'Ivoire, avec plus de 50 collaborateurs 
                et des centaines de projets réalisés.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Notre engagement envers l'excellence, l'innovation et notre approche centrée sur le client 
                nous ont permis de bâtir une réputation solide et de développer des relations durables 
                avec nos partenaires et clients.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-3xl font-bold text-primary-green mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slideInRight">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Histoire TP N'SIKAN"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl text-white">
                <div className="text-4xl font-bold text-accent-gold mb-2">15+</div>
                <div className="text-lg">Années d'Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nos <span className="text-accent-gold">Valeurs</span> Fondamentales
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien et définissent notre identité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover-lift">
                  <value.icon className={`mx-auto mb-6 ${value.color}`} size={56} />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="text-gradient">Équipe</span> d'Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les professionnels passionnés qui donnent vie à vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-green font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties de qualité reconnues par les organismes officiels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-primary-green font-semibold">Depuis {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-green/20 p-6 rounded-2xl mb-6 inline-block">
                <Target className="text-primary-green mx-auto" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
              <p className="text-gray-300">
                Transformer vos rêves en réalité en construisant des espaces de vie et de travail 
                exceptionnels qui dépassent vos attentes et résistent au temps.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-gold/20 p-6 rounded-2xl mb-6 inline-block">
                <Star className="text-accent-gold mx-auto" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
              <p className="text-gray-300">
                Être la référence en matière de construction en Côte d'Ivoire et en Afrique de l'Ouest, 
                reconnue pour notre innovation, notre qualité et notre service client exceptionnel.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-red/20 p-6 rounded-2xl mb-6 inline-block">
                <CheckCircle className="text-primary-red mx-auto" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Notre Engagement</h3>
              <p className="text-gray-300">
                Livrer chaque projet dans les délais, respecter le budget convenu et maintenir 
                les plus hauts standards de qualité, sécurité et durabilité environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Rejoignez notre famille de <span className="text-gradient">clients satisfaits</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Faites confiance à notre expertise, notre passion et notre engagement pour donner vie à votre projet.
          </p>
          <button className="btn-modern bg-gradient-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover-lift">
            Commencer mon Projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;