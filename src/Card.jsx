import { useEffect, useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';

const Card = () => {
  const [count, setCount] = useState(0);
  const isLocked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${isLocked ? 'card-locked' : ''}`}>
      <Title isLocked={isLocked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} isLocked={isLocked} />
        <CountButton type="plus" setCount={setCount} isLocked={isLocked} />
      </ButtonContainer>
    </div>
  );
};

export default Card;
