import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

// Definisikan tipe untuk properti komponen
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk mengelola visibilitas popup

  // Fungsi untuk membuka dan menutup popup
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <motion.div
      className="w-full max-w-screen-sm rounded overflow-hidden shadow-lg bg-stone-900 mx-auto"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 0.5 }} // Animation duration
    >
      <img className="w-full h-58 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        {/* Judul */}
        <div className="font-bold text-5xl mb-2">{title}</div>
        {/* Deskripsi */}
        <p className="text-stone-400 text-2xl">{description}</p>
        {/* Dana yang dibutuhkan */}
        <div className="mt-5">
          <p className="text-stone-200 text-sm">DANA YANG DI BUTUHKAN :</p>
          <p className="text-stone-200 text-lg mt-2 font-bold">Rp. 9.000.000,-</p>
          <p className="text-stone-200 text-sm">UNTUK 2 UNIT AC</p>
        </div>

        {/* Informasi terkumpul dan donatur */}
        <div className="grid grid-cols-2 pt-10">
          <div className="text-left font-bold">Terkumpul</div>
          <div className="text-right font-bold">Donatur</div>
          <div className="text-left text-stone-400">Rp. 9.000.000,-</div>
          <div className="text-right text-stone-400">21</div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%%' }}></div>
        </div>

        {/* Tombol Donasi */}
        <button
          className="justify-center rounded-3xl w-full bg-green-500 p-5 text-black font-bold mt-5"
          // onClick={togglePopup} 
          // Menambahkan event klik untuk membuka popup
        >
          Donasi Terpenuhi
        </button>

        {/* Popup Modal */}
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }} // Initial state of the popup
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 0.3 }} // Duration of the fade-in
          >
            <motion.div
              className="bg-stone-900 p-6 rounded-lg shadow-lg max-w-sm w-full"
              initial={{ scale: 0.8 }} // Start small
              animate={{ scale: 1 }} // Animate to normal size
              transition={{ duration: 0.3 }} // Duration of the scale-up
            >
              <h2 className="text-xl font-bold mb-4">Informasi Transfer</h2>
              <p className="text-gray-400 mb-4">Anda dapat transfer melalui Rekening BSI atau menghubungi pengurus Musholla:</p>
              <p className="mt-2 text-yellow-300 font-bold text-lg">BSI : 7295647315</p>
              <p className="mt-2 text-yellow-300 font-bold text-lg">A.N. DANNY ERRY PRIANDHIKA</p>
              <p className="mt-6">KONFIRMASI & NARAHUBUNG :</p>
              <ul className="list-disc pl-5 mt-2">
                <li>085708209551 Ega Leo Candra</li>
                <li>085746202009 Muhammad Miftahudin</li>
              </ul>
              <button
                className="w-full bg-red-500 text-white py-2 rounded-full mt-5"
                onClick={togglePopup} // Menutup popup ketika tombol "Tutup" ditekan
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
