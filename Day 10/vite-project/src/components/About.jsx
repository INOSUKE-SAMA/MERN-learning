import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 h-screen">
      <img src="/Sasuke.jpg" alt="sasuke" className="w-[600px] h-auto rounded-lg shadow-lg mb-8" />
      <div className="text-center text-lg max-w-3xl leading-relaxed">
        <p>
          <span className="font-semibold text-xl">Uchiha Sasuke</span> is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a Shinobi, and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills but eventually grows dissatisfied with his progress. He defects from Konoha so that he can acquire the strength needed to exact his revenge and master the Cursed Seal of Heaven.
        </p>
      </div>
    </div>
  );
};

export default About;
