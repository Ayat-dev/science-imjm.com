import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';

const Legal: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const content = {
    mentions: {
      title: 'Mentions Légales',
      sections: [
        {
          heading: 'Éditeur du site',
          content: `Science IMJM
SARL au capital de 10 000 €
Siège social : 123 Rue de la Science, 75001 Paris, France
RCS Paris : 123 456 789
Numéro de TVA intracommunautaire : FR12345678901
Directeur de la publication : Jean Martin`
        },
        {
          heading: 'Hébergement',
          content: `Ce site est hébergé par :
OVH
2 rue Kellermann
59100 Roubaix, France
Téléphone : +33 9 72 10 10 07`
        },
        {
          heading: 'Propriété intellectuelle',
          content: `L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont la propriété exclusive de Science IMJM ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est strictement interdite sans l'autorisation écrite préalable de Science IMJM.`
        },
        {
          heading: 'Responsabilité',
          content: `Science IMJM s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Science IMJM ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.`
        }
      ]
    },
    privacy: {
      title: 'Politique de Confidentialité',
      sections: [
        {
          heading: 'Collecte des données personnelles',
          content: `Nous collectons les données personnelles suivantes :
- Nom et prénom
- Adresse email
- Adresse postale (pour la livraison)
- Numéro de téléphone (optionnel)

Ces données sont collectées lors de la création de compte, de l'inscription à la newsletter ou lors d'un achat.`
        },
        {
          heading: 'Utilisation des données',
          content: `Vos données personnelles sont utilisées pour :
- Traiter vos commandes et assurer la livraison
- Vous envoyer des communications marketing (avec votre consentement)
- Améliorer nos services et votre expérience utilisateur
- Respecter nos obligations légales`
        },
        {
          heading: 'Conservation des données',
          content: `Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales en vigueur. Les données liées aux commandes sont conservées pendant 10 ans à des fins comptables.`
        },
        {
          heading: 'Vos droits',
          content: `Conformément au RGPD, vous disposez des droits suivants :
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'effacement
- Droit à la limitation du traitement
- Droit à la portabilité
- Droit d'opposition

Pour exercer ces droits, contactez-nous à : contact@scienceimjm.com`
        },
        {
          heading: 'Cookies',
          content: `Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.`
        }
      ]
    },
    cgv: {
      title: 'Conditions Générales de Vente',
      sections: [
        {
          heading: 'Article 1 - Champ d\'application',
          content: `Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur le site www.scienceimjm.com. Le fait de passer commande implique l'acceptation pleine et entière des présentes conditions générales de vente.`
        },
        {
          heading: 'Article 2 - Produits et prix',
          content: `Les produits sont proposés aux prix indiqués en euros toutes taxes comprises (TTC). Science IMJM se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.`
        },
        {
          heading: 'Article 3 - Commande',
          content: `La commande est considérée comme définitive après validation du paiement et envoi d'un email de confirmation. Toute commande passée sur le site constitue la formation d'un contrat conclu à distance entre le client et Science IMJM.`
        },
        {
          heading: 'Article 4 - Paiement',
          content: `Le paiement s'effectue par carte bancaire via un système sécurisé. Les informations de paiement sont cryptées et ne sont pas conservées par Science IMJM. Les moyens de paiement acceptés sont : Carte Bancaire (CB, Visa, Mastercard), PayPal.`
        },
        {
          heading: 'Article 5 - Livraison',
          content: `Les délais de livraison annoncés sont indicatifs. Livraison gratuite pour toute commande supérieure à 100€ en France métropolitaine. Les frais de port sont calculés en fonction du poids et de la destination. En cas de retard de livraison supérieur à 30 jours, l'acheteur peut demander l'annulation de sa commande.`
        },
        {
          heading: 'Article 6 - Droit de rétractation',
          content: `Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation. Les produits doivent être retournés dans leur emballage d'origine, en parfait état, accompagnés de la facture. Les frais de retour sont à la charge du client.`
        },
        {
          heading: 'Article 7 - Garantie',
          content: `Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés, conformément aux dispositions du Code civil. La durée de garantie est de 2 ans à compter de la date de livraison.`
        },
        {
          heading: 'Article 8 - Litige',
          content: `Les présentes conditions sont régies par le droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.`
        }
      ]
    }
  };

  const currentContent = type && type in content ? content[type as keyof typeof content] : content.mentions;

  return (
    <>
      <Hero
        title={currentContent.title}
        size="small"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Dernière mise à jour : 8 décembre 2025
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Legal;
