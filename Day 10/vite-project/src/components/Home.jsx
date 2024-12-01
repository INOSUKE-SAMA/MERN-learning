import React from 'react';

const Home = ({ darkMode }) => {
  return (
    // No need for bg-black/bg-white here; let the App.js handle it
    <div className="flex flex-col justify-center items-center px-4 py-8 h-screen">
      <img src="/naruto.jpg" alt="naruto" className="w-[600px] h-auto rounded-lg shadow-lg mb-8" />
      <div className="max-w-3xl text-center text-lg leading-relaxed">
        <p>
          <span className="font-semibold text-xl">Uzumaki Naruto</span> is a popular Japanese anime and manga series created by Masashi Kishimoto. It follows the journey of Naruto Uzumaki, a young ninja who dreams of becoming the strongest ninja and earning the title of Hokage, the leader of his village, Konohagakure. Despite being shunned by others because of the powerful demon fox, the Nine-Tails Kurama, sealed inside him, Naruto strives to gain recognition and form meaningful bonds with others.
        </p>
      </div>
    </div>
  );
};

export default Home;
