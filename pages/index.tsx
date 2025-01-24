// pages/index.tsx
import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="w-full p-5 overflow-hidden">
      <div className="flex items-center justify-center bg-stone-950">
      <Card
        title="Musholah kita sedang mengadakan penggalangan dana untuk membeli barang-barang yang sangat diperlukan guna meningkatkan kenyamanan dan fasilitas tempat ibadah."
        description="List barang yang akan di beli :"
        imageUrl="../image/bgdbarat.jpg"
      />
    </div>
    </div>
  );
}

export default Home;
