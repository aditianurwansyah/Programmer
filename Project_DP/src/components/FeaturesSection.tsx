import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Deteksi AI Budaya",
      description:
        "Teknologi AI canggih untuk mengenali dan menganalisis berbagai elemen budaya Indonesia",
      icon: "🤖",
      color: "from-gold-400 to-gold-600",
    },
    {
      title: "Cerita Budaya",
      description:
        "Koleksi lengkap cerita, legenda, dan tradisi dari seluruh nusantara",
      icon: "📚",
      color: "from-brown-400 to-brown-600",
    },
    {
      title: "Forum Komunitas",
      description:
        "Diskusi dan berbagi pengalaman dengan sesama pecinta budaya Indonesia",
      icon: "💬",
      color: "from-gold-500 to-brown-500",
    },
    {
      title: "Kuis Interaktif",
      description:
        "Uji pengetahuan budaya Indonesia dengan kuis yang menarik dan edukatif",
      icon: "🎯",
      color: "from-brown-500 to-gold-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">
            Fitur Unggulan Platform
          </h2>
          <p className="text-brown-600 text-lg max-w-2xl mx-auto">
            Jelajahi berbagai fitur menarik yang akan membantu Anda memahami dan
            melestarikan budaya Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-brown-200 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-brown-800 text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brown-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
