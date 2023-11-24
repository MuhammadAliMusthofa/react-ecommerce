import React, { useState } from 'react';

const InnerComponent = () => {
  return (
    <div className='color-old'>
  
      <h4>jual Kopi Arabika Dan Robusta untuk Bisnis</h4>
      {/* <button className='btn btn-primary'>Hapus</button> */}
      <p>Otten Coffee juga menyediakan informasi terkait bisnis kopi melalui kanal Youtube dan juga majalah online. Bahkan, kamu pun bisa berkonsultasi langsung melalui layanan konsultasi bisnis cafe yang ditawarkan. Memilih peralatan kopi dan mesin kopi yang tepat semuanya ada di Otten Coffee dan bisa disesuaikan dengan konsep bisnis cafe Anda. Biji kopi Arabika dan Robusta yang diracik oleh roastery Otten Coffee juga merupakan biji kopi segar untuk kualitas sajian kopi Anda.</p>
    
    </div>
  );
};

const TextComponent = ({ initialText, maxLength }) => {
  const [isShortened, setIsShortened] = useState(true);

  const toggleText = () => {
    setIsShortened(!isShortened);
  };

  const getDisplayedText = () => {
    return isShortened ? initialText.slice(0, maxLength) + '...' : initialText;
  };

  return (
    <>
    <div>
      <p>{getDisplayedText()}</p>

      {!isShortened && <InnerComponent />}
    </div>
      <p className='text-center' onClick={toggleText} style={{cursor:'pointer'}}>
      {isShortened ? 'Selengkapnya' : 'Sembunyikan'}
      </p>
    </>
  );
};

export default TextComponent;
