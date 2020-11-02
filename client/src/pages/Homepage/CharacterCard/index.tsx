import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterData } from '../../../@types';

import { Container, Content, LinkIcon, LikeIcon } from './styles';

interface Props {
  data: CharacterData[];
  handleFave: (isFave: boolean, charData: CharacterData, index: number) => void;
}

const CharacterCard: React.FC<Props> = ({ data, handleFave }) => {
  return (
    <Container>
      {data.map((character, index) => {
        return (
          <Content key={character.id}>
            <div className="left">
              <Link to={`/info/4005-${character?.id}`}>
                <img src={character?.image?.icon_url} alt={character?.name} key={character?.id} />
              </Link>

              <div className="info">
                <p>
                  <Link to={`/info/4005-${character?.id}`} className="navigation-links">
                    <strong>{character?.name}</strong>
                  </Link>
                </p>
                {character?.publisher?.name && <p className="publisher">{character?.publisher?.name}</p>}
              </div>
            </div>

            <div className="right">
              <span className="link-button" onClick={() => handleFave(Boolean(character.is_fave), character, index)} data-testid={`favorite-button-${index}`}>
                <LikeIcon
                  fillcolor={character.is_fave ? 'red' : 'white'}
                  strokecolor={character.is_fave ? 'red' : 'var(--color-primary)'}
                  data-testid={`heart-svg-${index}-${Boolean(character.is_fave)}`}
                />
              </span>

              <Link to={`/info/4005-${character?.id}`}>
                <LinkIcon />
              </Link>
            </div>
          </Content>
        );
      })}
    </Container>
  );
};

export default CharacterCard;
