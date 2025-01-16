// pages/index.tsx
import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-center bg-stone-950">
      <Card
        title="Donasi"
        description="Pembelian AC Daarul Barokah"
        imageUrl="../image/bgdbarat.jpg"
      />
    </div>
    </div>
  );
}

export default Home;
