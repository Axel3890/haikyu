import styles from './imagenes.module.css';


const ImageGrid = () => {
  return (
<div className={`relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-auto font-['Figtree'] transition-all duration-400 ${styles.container}`}>
      <div className={`relative bg-center bg-cover flex justify-center items-center transition-all duration-400 ${styles.box}`} 
           style={{backgroundImage: `url('https://static.wikia.nocookie.net/all-worlds-alliance/images/c/c7/Haikyuu_renders_by_janoneee-d6xiy9b.png/revision/latest/scale-to-width-down/396?cb=20190208030130')`}}
           data-text="Renji"></div>
      <div className={`relative bg-center bg-cover flex justify-center items-center transition-all duration-400 ${styles.box}`} 
           style={{backgroundImage: `url('https://static.wikia.nocookie.net/haikyuu/images/f/f6/Kageyama_S4.png/revision/latest?cb=20191219004836&path-prefix=es')`}}
           data-text="Sora"></div>
      <div className={`relative bg-center bg-cover flex justify-center items-center transition-all duration-400 ${styles.box}`} 
           style={{backgroundImage: `url('https://static.wikia.nocookie.net/haikyuu/images/a/af/Tsukki_S4.png/revision/latest?cb=20191220003034&path-prefix=es')`}}
           data-text="Kaito"></div>
      <div className={`relative bg-center bg-cover flex justify-center items-center transition-all duration-400 ${styles.box}`} 
           style={{backgroundImage: `url('https://static.wikia.nocookie.net/haikyuu/images/9/94/NoyaS4.png/revision/latest/scale-to-width-down/600?cb=20191219003314&path-prefix=es')`}}
           data-text="Tsuki"></div>
      <div className={`relative bg-center bg-cover flex justify-center items-center transition-all duration-400 ${styles.box}`} 
           style={{backgroundImage: `url('https://static.wikia.nocookie.net/haikyuu/images/3/3a/TanakaS4.png/revision/latest?cb=20191219010246&path-prefix=es')`}}
           data-text="Mitsui"></div>
    </div>
  );
};

export default ImageGrid;
