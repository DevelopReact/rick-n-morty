// react
import { FC } from 'react';
//ui
import { CharacterCard } from '@/entities/characters';
//types
import { ICharacter } from '@/entities/characters/model/types/characterType';
// styles
import styles from './CharacterCardList.module.scss';

interface CharacterCardListProps {
  currentData: ICharacter;
}

export const CharacterCardList: FC<CharacterCardListProps> = ({
  currentData
}) => {
  return (
    <div className={styles.CharacterCardList}>
      {currentData?.results.map(
        ({ id, name, gender, image, origin, species, status, location }) => (
          <CharacterCard
            key={id}
            id={id}
            name={name}
            gender={gender}
            image={image}
            origin={origin}
            species={species}
            status={status}
            location={location}
          />
        )
      )}
    </div>
  );
};
