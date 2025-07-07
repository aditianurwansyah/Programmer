import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      {/* Footer */}
      <footer className="bg-brown-900 text-cream-100 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-cream-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-brown-900 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-cream-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">BhraGha</h3>
              </div>
              <p className="text-cream-300 leading-relaxed">
                Platform edukasi sosial budaya berbasis AI untuk melestarikan
                warisan budaya Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold-400">Menu Utama</h4>
              <ul className="space-y-2 text-cream-300">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Deteksi AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Cerita Budaya
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Forum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gold-400">Hubungi Kami</h4>
              <ul className="space-y-2 text-cream-300">
                <li>Email: info@bhragha.id</li>
                <li>Telepon: (021) 123-4567</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brown-700 mt-8 pt-8 text-center text-cream-400">
            <p>&copy; 2024 BhraGha. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
