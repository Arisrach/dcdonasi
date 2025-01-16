// pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import DonasiProgressBar from '../components/DonasiProgressBar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

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
