import React, { useState } from 'react';
import Button from './Button';
import Icon from './Icon';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
      <div className="absolute inset-0 gradient-blue-violet opacity-90"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
          <Icon name="mail" className="text-white" size="lg" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Restez connecté à la science
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Recevez nos derniers articles, projets et découvertes directement dans votre boîte mail.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <Icon name="check" className="text-white mx-auto mb-3" size="lg" />
            <p className="text-white font-medium">Merci ! Vous êtes inscrit à notre newsletter.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <Button type="submit" variant="primary" className="bg-white text-violet-neon hover:bg-white/90 shadow-soft whitespace-nowrap">
              S'inscrire
            </Button>
          </form>
        )}

        <p className="text-white/70 text-sm mt-4">
          Pas de spam. Désinscription possible à tout moment.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
