import { useState, useEffect } from 'react';
import like from "../../Assets/like.png"
import dislike from "../../Assets/dislike.png"
import { Botao, Img } from './styled';

function Like(props) {
  const [liked, setLiked] = useState(props.like);

  function handleClick() {
    setLiked(!liked);
  }

  useEffect(() => {
    if (liked) {
      const timer = setTimeout(() => {
        setLiked(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [liked]);

  return (
    <Botao
      className={`botao-like ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? <Img src={like}/> : <Img src={dislike}/>}
    </Botao>
  );
}

export default Like