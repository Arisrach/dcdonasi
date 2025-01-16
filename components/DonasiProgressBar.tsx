import { useState, useEffect } from 'react';

interface DonasiProgressBarProps {
  initialDonasi?: number; // Donasi awal (opsional)
  targetDonasi: number; // Target donasi
}

const DonasiProgressBar: React.FC<DonasiProgressBarProps> = ({
  initialDonasi = 2000000, // Set default donasi awal 2 juta
  targetDonasi,
}) => {
  // Gunakan nilai tetap untuk donasi
  const [donasi] = useState(initialDonasi); // Tidak perlu update donasi lagi

  // Hitung persentase progress berdasarkan nilai tetap donasi
  const progress = (donasi / targetDonasi) * 100;

  return (
    <div style={progressBarContainer}>
      <div style={{ ...progressBar, width: `${progress}%` }}></div>
      <div style={infoContainer}>
        <span style={infoText}>Total Donasi: Rp{donasi.toLocaleString()}</span>
        <span style={infoText}>Target: Rp{targetDonasi.toLocaleString()}</span>
      </div>
    </div>
  );
};

// Gaya untuk komponen
const progressBarContainer: React.CSSProperties = {
  width: '80%',
  margin: '0 auto',
  backgroundColor: '#f3f3f3',
  borderRadius: '25px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '10px',
  textAlign: 'center',
};

const progressBar: React.CSSProperties = {
  height: '30px',
  backgroundColor: '#4CAF50',
  borderRadius: '25px',
  transition: 'width 0.5s ease-in-out',
};

const infoContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const infoText: React.CSSProperties = {
  fontSize: '16px',
  color: '#333',
};

export default DonasiProgressBar;
