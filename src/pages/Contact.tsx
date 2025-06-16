import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import PageSlider from '../components/PageSlider';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Contactez-Nous',
      subtitle: 'Devis Gratuit • Consultation Expert • Réponse 24h',
      description: 'Votre projet commence par une conversation'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Équipe Dédiée',
      subtitle: 'Conseillers Experts • Suivi Personnalisé',
      description: 'Un accompagnement sur mesure pour votre réussite'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Disponibilité 24/7',
      subtitle: 'Support Continu • Urgences Couvertes',
      description: 'Nous sommes là quand vous avez besoin de nous'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
      });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Notre Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Cocody - Riviera Palmeraie', 'Près du Centre Commercial'],
      color: 'text-primary-green'
    },
    {
      icon: Phone,
      title: 'Téléphones',
      details: ['+225 XX XX XX XX XX', '+225 YY YY YY YY YY', 'WhatsApp disponible'],
      color: 'text-primary-red'
    },
    {
      icon: Mail,
      title: 'Emails',
      details: ['contact@tpnsikan.com', 'devis@tpnsikan.com', 'urgence@tpnsikan.com'],
      color: 'text-accent-gold'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 18h00', 'Sam: 8h00 - 12h00', 'Urgences: 24h/7j'],
      color: 'text-primary-gray'
    }
  ];

  const projectTypes = [
    'Construction neuve',
    'Rénovation complète',
    'Aménagement intérieur',
    'Extension de maison',
    'Travaux de maçonnerie',
    'Maintenance et SAV',
    'Autre projet'
  ];

  const budgetRanges = [
    'Moins de 5M FCFA',
    '5M - 15M FCFA',
    '15M - 30M FCFA',
    '30M - 50M FCFA',
    'Plus de 50M FCFA',
    'À définir ensemble'
  ];

  const timelineOptions = [
    'Urgent (moins de 1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6-12 mois)',
    'Planification future',
    'Flexible'
  ];

  return (
    <div>
      {/* Contact Slider - PLUS DE PADDING TOP */}
      <PageSlider slides={contactSlides} height="h-96" />

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-lift">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demander un <span className="text-gradient">Devis Gratuit</span>
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-primary-green mx-auto mb-6" size={80} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h3>
                  <p className="text-gray-600 mb-4">
                    Merci pour votre demande. Notre équipe vous recontactera dans les 24h.
                  </p>
                  <div className="bg-gradient-primary text-white px-6 py-3 rounded-full inline-block">
                    Réponse garantie sous 24h
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez un type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez un délai</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                      placeholder="Résumé de votre demande"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Description détaillée *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300"
                      placeholder="Décrivez votre projet en détail : localisation, dimensions, spécificités, contraintes..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-modern bg-gradient-primary text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center hover-lift"
                  >
                    <Send size={20} className="mr-3" />
                    Envoyer ma Demande de Devis
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nos <span className="text-gradient">Coordonnées</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Plusieurs moyens de nous contacter pour répondre à tous vos besoins. 
                  Notre équipe est disponible et réactive pour vous accompagner.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover-lift">
                    <info.icon className={`${info.color} mb-4`} size={40} />
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 mb-1 text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-primary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Actions Rapides</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+225XXXXXXXXXX"
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center"
                  >
                    <Phone size={24} className="mr-3" />
                    <div>
                      <div className="font-semibold">Appel Direct</div>
                      <div className="text-sm opacity-90">Réponse immédiate</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/225XXXXXXXXXX"
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center"
                  >
                    <MessageSquare size={24} className="mr-3" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Chat en direct</div>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@tpnsikan.com"
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center"
                  >
                    <Mail size={24} className="mr-3" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm opacity-90">Réponse sous 24h</div>
                    </div>
                  </a>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-center">
                    <Calendar size={24} className="mr-3" />
                    <div>
                      <div className="font-semibold">RDV sur Site</div>
                      <div className="text-sm opacity-90">Visite gratuite</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center hover-lift">
                <div className="text-center">
                  <MapPin className="text-primary-green mx-auto mb-4" size={56} />
                  <p className="text-gray-600 font-semibold">Carte Interactive</p>
                  <p className="text-sm text-gray-500">Cocody - Riviera Palmeraie</p>
                  <p className="text-sm text-gray-500">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions <span className="text-accent-gold">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-200">Trouvez rapidement les réponses à vos questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Combien de temps prend un projet de construction ?',
                answer: 'La durée varie selon la complexité : villa individuelle (6-12 mois), rénovation (2-6 mois), aménagement (1-3 mois). Nous établissons un planning précis dès le début.'
              },
              {
                question: 'Vos devis sont-ils vraiment gratuits ?',
                answer: 'Oui, absolument ! Nous proposons des devis détaillés et sans engagement. La consultation initiale et la visite sur site sont également gratuites.'
              },
              {
                question: 'Quelles garanties offrez-vous ?',
                answer: 'Garantie décennale sur tous nos travaux de construction, garantie de parfait achèvement d\'un an, et service après-vente premium inclus.'
              },
              {
                question: 'Travaillez-vous avec des architectes ?',
                answer: 'Oui, nous avons une équipe d\'architectes intégrée et collaborons avec des partenaires certifiés pour tous types de projets architecturaux.'
              },
              {
                question: 'Acceptez-vous les paiements échelonnés ?',
                answer: 'Oui, nous proposons des solutions de paiement flexibles adaptées à votre budget, avec des échéanciers personnalisés selon l\'avancement des travaux.'
              },
              {
                question: 'Intervenez-vous en urgence ?',
                answer: 'Nous avons une équipe d\'intervention d\'urgence disponible 24h/7j pour les situations critiques (fuites, effondrements, sécurisation).'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à <span className="text-gradient">démarrer</span> votre projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts vous attend pour transformer vos idées en réalité. 
            Contactez-nous dès maintenant pour une consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-modern bg-gradient-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover-lift">
              Consultation Gratuite
            </button>
            <button className="btn-modern border-2 border-primary-green text-primary-green px-10 py-4 rounded-full font-semibold hover:bg-primary-green hover:text-white transition-all duration-300 hover-lift">
              Visite sur Site
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;