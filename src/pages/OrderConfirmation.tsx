import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

const OrderConfirmation: React.FC = () => {
  const orderNumber = 'CMD-2025-' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');

  return (
    <Section background="white">
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="check" size="xl" className="text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Commande confirmée !
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Merci pour votre achat. Votre commande a été enregistrée avec succès.
        </p>

        <div className="bg-gradient-soft rounded-2xl p-8 mb-8">
          <div className="text-sm text-gray-600 mb-2">Numéro de commande</div>
          <div className="text-2xl font-bold text-tech-blue mb-6">{orderNumber}</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-sm text-gray-600 mb-1">Email de confirmation</div>
              <div className="font-medium">Envoyé</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Montant total</div>
              <div className="font-medium">339.98 €</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Livraison estimée</div>
              <div className="font-medium">3-5 jours ouvrés</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 text-left">
          <h2 className="font-bold mb-4">Prochaines étapes</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-tech-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-medium mb-1">Confirmation</div>
                <div className="text-sm text-gray-600">
                  Vous recevrez un email de confirmation avec les détails de votre commande
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-medium mb-1">Préparation</div>
                <div className="text-sm text-gray-600">
                  Votre commande sera préparée et emballée avec soin
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-medium mb-1">Expédition</div>
                <div className="text-sm text-gray-600">
                  Vous recevrez un email avec le numéro de suivi de votre colis
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-medium mb-1">Livraison</div>
                <div className="text-sm text-gray-600">
                  Votre commande sera livrée à l'adresse indiquée
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/account" variant="primary" size="lg">
            Voir mes commandes
          </Button>
          <Button href="/shop" variant="outline" size="lg">
            Continuer mes achats
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Besoin d'aide ? Contactez notre service client à{' '}
            <a href="mailto:contact@scienceimjm.com" className="text-tech-blue hover:underline">
              contact@scienceimjm.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default OrderConfirmation;
