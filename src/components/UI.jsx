import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const pictures = ['01', '02', '03', '04', '05', '06', '07', '08'];

export const pageAtom = atom(0);
export const pages = [
  {
    front: 'book-cover',
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: 'book-back',
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    let audio;

    // Function to play the audio after user interaction
    const playAudio = () => {
      if (!audio) {
        audio = new Audio('/assets/book/audios/page-flip-01a.mp3');
      }
      audio.play();
    };

    // Event listener to wait for user interaction
    const handleUserInteraction = () => {
      playAudio();
      // Remove event listeners after the first interaction
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };

    // Add event listeners for user interaction
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      // Clean up event listeners on component unmount
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [page]);

  return <></>;
};
