import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  const orders = [
    {
      id: 'CMD-2025-001',
      date: '2025-12-01',
      status: 'Livrée',
      total: 339.98,
      items: 2,
    },
    {
      id: 'CMD-2025-002',
      date: '2025-11-15',
      status: 'En cours',
      total: 129.99,
      items: 1,
    },
  ];

  return (
    <>
      <Hero title="Mon Compte" size="small" />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-4 space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'orders'
                    ? 'bg-tech-blue text-white'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                Mes commandes
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'profile'
                    ? 'bg-tech-blue text-white'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                Informations personnelles
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'addresses'
                    ? 'bg-tech-blue text-white'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                Adresses
              </button>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Mes commandes</h2>

                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-2xl shadow-soft p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">Commande {order.id}</h3>
                        <p className="text-sm text-gray-600">
                          Passée le {new Date(order.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium inline-block ${
                          order.status === 'Livrée'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        {order.items} article{order.items > 1 ? 's' : ''} • {order.total.toFixed(2)} €
                      </div>
                      <Button variant="outline" size="sm">
                        Voir les détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations personnelles</h2>

                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          defaultValue="Jean"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          defaultValue="Dupont"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="jean.dupont@exemple.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          defaultValue="+33 6 12 34 56 78"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="primary" size="lg">
                      Enregistrer les modifications
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Mes adresses</h2>
                  <Button variant="primary" size="md">
                    Ajouter une adresse
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-soft p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-3 py-1 bg-tech-blue text-white text-xs font-medium rounded-full mb-3 inline-block">
                          Principale
                        </span>
                        <h3 className="font-bold mb-2">Domicile</h3>
                        <p className="text-gray-600">
                          Jean Dupont<br />
                          123 Rue de la Science<br />
                          75001 Paris<br />
                          France
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                      <Button variant="outline" size="sm">
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Account;
