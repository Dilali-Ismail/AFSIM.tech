'use client';

import React, { useState } from 'react';

export function HeroAfsim() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#1a2946]/40 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-black tracking-tighter text-white">
          AFSIM<span className="text-[#1a7bec]">TECH</span>
        </div>

        <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-[#1a7bec] transition-colors duration-300">Accueil</a>
          <a href="#" className="hover:text-[#1a7bec] transition-colors duration-300">Nos Réalisations</a>
          <a href="#" className="hover:text-[#1a7bec] transition-colors duration-300">Expertise</a>
          <a href="#" className="hover:text-[#1a7bec] transition-colors duration-300">Contact</a>
        </nav>

        <button
          onClick={toggleModal}
          className="bg-[#1a7bec] hover:bg-[#1c77ea] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase transition-all duration-300 shadow-[0_0_20px_rgba(26,123,236,0.4)] hover:shadow-[0_0_30px_rgba(26,123,236,0.6)] hover:scale-105"
        >
          Audit Gratuit
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white animate-slide-in-left">
            Créez votre site web professionnel avec <span className="text-[#1a7bec] animate-glow">AfsimTech</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light italic animate-slide-in-right">
            Sites vitrines et e-commerce pour PME marocaines : <span className="font-bold text-white">+30% de leads en 3 mois</span>
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
          <button
            onClick={toggleModal}
            className="bg-white text-[#1a2946] px-10 py-5 rounded-xl text-lg font-black hover:bg-[#1a7bec] hover:text-white transition-all transform hover:scale-105 duration-300 shadow-2xl animate-bounce-slow"
          >
            DEMANDER UN AUDIT GRATUIT
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Stats - Simple Text with Bullet Points */}
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

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-[60] animate-bounce-slow">
        <button
          onClick={toggleModal}
          className="bg-[#1a7bec] hover:bg-[#1c77ea] text-white w-16 h-16 md:w-auto md:px-6 rounded-full shadow-2xl flex items-center justify-center font-bold transition-all shadow-[0_0_20px_rgba(26,123,236,0.4)] hover:shadow-[0_0_40px_rgba(26,123,236,0.6)] hover:scale-110 duration-300"
        >
          <svg className="w-6 h-6 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="hidden md:inline">AUDIT GRATUIT</span>
        </button>
      </div>

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

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(26, 123, 236, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(26, 123, 236, 0.8);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(26, 123, 236, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(26, 123, 236, 0.8);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s backwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
