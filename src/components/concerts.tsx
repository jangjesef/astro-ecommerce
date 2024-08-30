import React from 'react';
import { motion } from 'framer-motion';

const concerts = [
  { id: 1, date: '2024-09-15', venue: 'O2 Arena, Praha', status: 'upcoming' },
  { id: 2, date: '2024-08-20', venue: 'Sinobo Stadium, Praha', status: 'upcoming' },
  { id: 3, date: '2024-07-05', venue: 'DRFG Arena, Brno', status: 'upcoming' },
  { id: 4, date: '2024-06-10', venue: 'Ostravar Aréna, Ostrava', status: 'past' },
  { id: 5, date: '2024-05-01', venue: 'Home Credit Arena, Liberec', status: 'past' },
];

const ConcertsPage = () => {
  const upcomingConcerts = concerts.filter(concert => concert.status === 'upcoming');
  const pastConcerts = concerts.filter(concert => concert.status === 'past');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        YEEZUZ2020 KONCERTY
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <ConcertSection title="Nadcházející koncerty" concerts={upcomingConcerts} />
        <ConcertSection title="Minulé koncerty" concerts={pastConcerts} />
      </div>
    </div>
  );
};

const ConcertSection = ({ title, concerts }) => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4">
      {concerts.map(concert => (
        <ConcertCard key={concert.id} concert={concert} />
      ))}
    </div>
  </motion.div>
);

const ConcertCard = ({ concert }) => (
  <motion.div 
    className="bg-gray-900 p-4 rounded-lg shadow-md"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{concert.venue}</h3>
        <p className="text-gray-400">{new Date(concert.date).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      {concert.status === 'upcoming' && (
        <button className="px-4 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
          KOUPIT LÍSTKY
        </button>
      )}
    </div>
  </motion.div>
);

export default ConcertsPage;