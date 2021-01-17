import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {id, name, hp, sprites}}) {
  const [isFrontSprite, setIsFrontSprite] = useState(sprites.front)

  function handleImageClick() {
    setIsFrontSprite(isFrontSprite === sprites.front ? sprites.back : sprites.front)
  }  
  
  return (
    <Card>
      <div>
        <div onClick={handleImageClick} className="image">
          <img src={isFrontSprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
