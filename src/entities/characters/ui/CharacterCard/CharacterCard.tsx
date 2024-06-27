// react
import { FC } from 'react';
import { Link } from 'react-router-dom';
//ui
import { IconStatus } from '@/shared/ui';
// styles
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export const CharacterCard: FC<CharacterCardProps> = ({
  id,
  name,
  gender,
  image,
  origin,
  species,
  status,
  location
}) => {
  return (
    <div className={styles.Card} key={id}>
      <figure className={styles.imgCard}>
        <img src={image} alt={name} />
      </figure>
      <div className={styles.contentCard}>
        <div className={styles.titleCard}>
          <Link to={`/character/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className={styles.statusCard}>
          <IconStatus backgroundColor={status} />
          <span>
            {species} - {status}
          </span>
        </div>
        <div className={styles.infoCard}>
          First seen in: <span>{origin?.name}</span>
        </div>
        <div className={styles.infoCard}>
          Last known location: <span>{location?.name}</span>
        </div>
        <div className={styles.infoCard}>
          Gender: <span>{gender}</span>
        </div>
      </div>
    </div>
  );
};
