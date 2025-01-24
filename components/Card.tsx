import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
const cardData = [
  { title: "Karpet",
     imagedUrl: "/image/adornment.png" ,
     subtext: "Rp. 7 jt",
     bgColor: "bg-yellow-400", // Warna latar
    },
  { title: "Jam Digital",
     imagedUrl: "/image/digital-clock.png",
     subtext: "Rp. 2 jt",
     bgColor: "bg-red-500", // Warna latar
     },
];

export default function Card({ title, description, imageUrl }: CardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <motion.div
      className="w-full max-w-screen-sm rounded overflow-hidden shadow-lg bg-stone-900 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
{/* Header */}
<div className="flex items-center bg-stone-800 p-4 rounded-lg mb-6 shadow-lg">
        {/* Logo */}
        <img
          src="/image/logo-baru.png"
          alt="Logo"
          className="w-10 h-10 rounded-full mr-5"
        />
        {/* Nama Aplikasi */}
        <div>
            {/* Nama Aplikasi */}
            <h1 className="text-white text-xl font-bold">Daarul Barokah</h1>
            {/* Subteks */}
            <p className="text-stone-400 text-sm">Discovery Barat</p>
          </div>
      </div>
{/* descrtiption */}
        <div className=' px-4'>
      <p className="mb-3 text-left text-stone-200">{title}</p>
              <p className="text-stone-400 text-base mb-5 text-left">{description}</p>
        </div>


      <div className="w-full max-w-screen-sm mx-auto px-4">
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`flex items-center p-4 rounded-lg shadow-lg ${card.bgColor}`}
            // Animasi Bounce dan Rotasi
            animate={{
              y: [0, -10, 0], // Gerakan naik turun
              rotate: [0, 2, -2, 0], // Rotasi bolak-balik
            }}
            transition={{
              duration: 2, // Durasi animasi
              repeat: Infinity, // Mengulang animasi terus-menerus
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
             {/* Gambar */}
            <img
              src={card.imagedUrl}
              alt={card.title}
              className="w-15 h-16 object-cover rounded-lg mr-4"
            />
            {/* Title dan Subtext */}
            <div>
              {/* Title */}
              <p className="text-black font-bold text-sm">{card.title}</p>
              {/* Subtext */}
              <p className="text-black text-xs mt-1 ">{card.subtext}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>



      <div className="px-4 py-6">
        
        {/* <div className="bg-gray-800 p-4 rounded-lg mb-5">
          <p className="text-stone-300 text-sm text-left">Dana yang Dibutuhkan</p>
          <p className="text-yellow-400 text-lg text-left font-bold">Rp. 9.000.000,-</p>
          <p className="text-stone-300 text-sm text-left mt-1">Untuk 2 Unit AC</p>
        </div> */}

        <div className="grid grid-cols-4 gap-4 text-left mb-5">
          <div className='col-span-3'>
            <p className="text-stone-300 text-sm">Terkumpul</p>
            <p><span  className="text-yellow-400 font-bold text-lg">Rp.0</span> Dari Rp 9.000.000</p>
          </div>
          <div>
            <p className="text-stone-300 text-sm text-right">Donatur</p>
            <p className="text-yellow-400 font-bold text-lg text-right">0</p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-5">
          <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '1%' }}></div>
        </div>

        <button
          className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold"
          onClick={togglePopup}
        >
          Donasi
        </button>

        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-stone-900 p-6 rounded-lg shadow-lg w-full max-w-xs"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-bold mb-4 text-center text-stone-200">Informasi Transfer</h2>
              <p className="text-gray-400 text-sm mb-4 text-center">
                Anda dapat transfer melalui Rekening BSI atau menghubungi pengurus Musholla:
              </p>
              <p className="text-yellow-300 text-lg font-bold text-center">BSI : 7295647315</p>
              <p className="text-yellow-300 text-lg font-bold text-center mb-4">A.N. Danny Erry Priandhika</p>
              <p className="text-center text-stone-300 mb-2">Konfirmasi & Narahubung:</p>
              <ul className="list-disc pl-5 text-gray-400 text-sm">
                <li>085708209551 Ega Leo Candra</li>
                <li>085746202009 Muhammad Miftahudin</li>
              </ul>
              <button
                className="w-full bg-red-500 text-white py-2 rounded-full mt-5"
                onClick={togglePopup}
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
