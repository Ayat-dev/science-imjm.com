import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Hero
        title="Contactez Science IMJM"
        description="Une question ? Une suggestion ? Nous sommes à votre écoute"
        size="small"
      />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>

            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Icon name="check" className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-green-700">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    placeholder="jean.dupont@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Autres moyens de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tech-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="mail" className="text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:contact@scienceimjm.com"
                      className="text-tech-blue hover:underline"
                    >
                      contact@scienceimjm.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/33123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      +227 93 76 53 75
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-neon/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Avenue de la République<br />
                      Route Principal, Niamey-Niger
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-soft rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-medium">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-medium">10h - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
