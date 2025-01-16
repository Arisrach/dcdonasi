// components/Banner.js
export default function Banner() {
    return (
      <section style={bannerStyle}>
        <h1>Selamat datang di Website Donasi Kami</h1>
        <p>Bergabunglah dalam upaya kami untuk membantu sesama.</p>
      </section>
    )
  }
  
  const bannerStyle = {
    background: 'url("/banner.jpg") no-repeat center center',
    backgroundSize: 'cover',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
  };
  