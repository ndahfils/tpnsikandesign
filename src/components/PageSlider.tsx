import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Zap } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface PageSliderProps {
  slides: Slide[];
  height?: string;
  autoPlay?: boolean;
  interval?: number;
}

const PageSlider: React.FC<PageSliderProps> = ({ 
  slides, 
  height = 'h-96', 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative ${height} overflow-hidden parallax-slider`}>
      {/* Slides avec effets parallax */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat parallax-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay ultra-moderne avec gradient dynamique */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-green/80 via-primary-green/60 to-primary-red/70"></div>
              
              {/* Effets géométriques */}
              <div className="absolute inset-0 geometric-bg"></div>
              
              {/* Content avec animations avancées - Optimisé Mobile */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="text-center text-white max-w-6xl mx-auto">
                  
                  {/* Badge moderne - Responsive */}
                  <div className="inline-flex items-center glass-card px-3 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-8 animate-slide-bounce">
                    <Zap className="text-accent-gold mr-1 sm:mr-2 animate-pulse-glow" size={16} />
                    <span className="text-accent-gold font-bold text-xs sm:text-sm uppercase tracking-wider">
                      <span className="hidden sm:inline">Excellence • Innovation • Qualité</span>
                      <span className="sm:hidden">Excellence</span>
                    </span>
                  </div>

                  {/* Titre principal - Responsive */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 animate-zoom-rotate text-shadow-glow leading-tight">
                    {slide.title}
                  </h1>
                  
                  {/* Sous-titre - Responsive */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-4 sm:mb-8 text-accent-gold animate-slide-bounce leading-relaxed">
                    {slide.subtitle}
                  </h2>
                  
                  {/* Description - Responsive */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 animate-float max-w-4xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Boutons ultra-modernes - Stack sur mobile */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-bounce">
                    <button className="btn-futuristic hover-lift-strong w-full sm:w-auto">
                      <span className="hidden sm:inline">Découvrir nos Projets</span>
                      <span className="sm:hidden">Nos Projets</span>
                    </button>
                    <button className="glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover-glow w-full sm:w-auto">
                      <span className="hidden sm:inline">Consultation Gratuite</span>
                      <span className="sm:hidden">Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls ultra-modernes - Responsive */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
        <button
          onClick={togglePlayPause}
          className="glass-dark p-2 sm:p-3 rounded-full hover:bg-white/20 text-white transition-all duration-300 hover-lift-strong touch-manipulation"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Navigation Arrows - Plus grands sur mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 glass-dark p-3 sm:p-4 rounded-full text-white transition-all duration-300 hover-lift-strong hover:scale-110 touch-manipulation"
        aria-label="Slide précédent"
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={28} className="hidden sm:block" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 glass-dark p-3 sm:p-4 rounded-full text-white transition-all duration-300 hover-lift-strong hover:scale-110 touch-manipulation"
        aria-label="Slide suivant"
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={28} className="hidden sm:block" />
      </button>

      {/* Dots Indicator - Plus grands sur mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full touch-manipulation ${
              index === currentSlide 
                ? 'w-8 sm:w-12 h-2 sm:h-3 bg-accent-gold animate-pulse-glow' 
                : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/50 hover:bg-white/70 hover:scale-125'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar futuriste */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full gradient-rainbow transition-all duration-300 animate-pulse-glow"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Particles flottantes - Réduites sur mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-accent-gold rounded-full animate-float opacity-30 hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageSlider;