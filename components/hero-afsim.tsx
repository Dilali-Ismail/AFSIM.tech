'use client';

import React, { useState } from 'react';

export function HeroAfsim() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1522071823991-b1ae5fe23506?auto=format&fit=crop&w=1920"
            className="min-w-full min-h-full object-cover opacity-30"
          >
            <source
              src="/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="max-w-5xl z-10 animate-fade-in-up">
          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-6 border border-[#1a7bec]/50 rounded-full text-[#1a7bec] text-sm font-medium bg-[#1a7bec]/10 backdrop-blur-sm animate-pulse-slow">
            Agence Web à Casablanca
          </span>

          {/* Main Heading — UPDATED TEXT */}
          <h1 className="serif text-5xl md:text-7xl mb-4 leading-tight text-white animate-slide-in-left">
            AFSIM<span className="text-[#1a7bec] animate-glow">TECH</span>
            <span className="block text-3xl md:text-4xl mt-2">
              Agence de création de sites web
            </span>
          </h1>

          {/* Subtitle — UPDATED TEXT */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light italic animate-slide-in-right">
            Transformez vos visiteurs en clients avec un site web <span className="font-bold text-white">élégant et performant</span>
          </p>

          {/* Value Proposition Card */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl max-w-3xl mx-auto mb-10 text-left flex flex-col md:flex-row items-center gap-6 border border-white/10 hover:border-[#1a7bec]/50 transition-all duration-500 animate-fade-in">
            <div className="bg-[#1a7bec] h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-glow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-white">
              Transformez vos visiteurs en clients. Équipe de <span className="text-[#1a7bec] font-bold">5 développeurs basée à Casablanca</span>, prête à booster votre présence en ligne.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-white text-[#1a2946] px-10 py-5 rounded-xl text-lg font-black hover:bg-[#1a7bec] hover:text-white transition-all transform hover:scale-105 duration-300 shadow-2xl animate-bounce-slow"
          >
            DEMANDER AUDIT GRATUIT
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-8 w-full max-w-3xl px-6 z-10 animate-fade-in-up-delay">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a7bec]"></span>
              <span className="font-semibold text-white">5 développeurs experts</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a7bec]"></span>
              <span className="font-semibold text-white">100% satisfaction client</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a7bec]"></span>
              <span className="font-semibold text-white">Projets livrés en 2-4 semaines</span>
            </span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={toggleModal}
        >
          <div
            className="bg-[#1a2946] border border-white/10 p-8 rounded-3xl max-w-md w-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-2 text-white">Prêt à décoller ?</h3>
            <p className="text-gray-400 text-sm mb-6">Laissez-nous vos coordonnées, nos 5 experts vous rappellent sous 24h.</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre Nom"
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#1a7bec] focus:ring-2 focus:ring-[#1a7bec]/50 transition-all duration-300 text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#1a7bec] focus:ring-2 focus:ring-[#1a7bec]/50 transition-all duration-300 text-white placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Téléphone (WhatsApp)"
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#1a7bec] focus:ring-2 focus:ring-[#1a7bec]/50 transition-all duration-300 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-[#1a7bec] py-3 rounded-lg font-bold hover:bg-[#1c77ea] transition-all duration-300 text-white shadow-[0_0_20px_rgba(26,123,236,0.4)] hover:shadow-[0_0_30px_rgba(26,123,236,0.6)] hover:scale-105"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
