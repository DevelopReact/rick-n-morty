// react
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//actions
import { filterCharacterAction } from '../../model/slice/characterSlice';
//ui
import { IconStatus } from '@/shared/ui';
//constants
import {
  jsonPlaceholderBaseURL,
  scrollUpFunction
} from '@/shared/libs/constants';
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
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(true);

  const locationId = location?.url.replace(
    `${jsonPlaceholderBaseURL}/location/`,
    ''
  );

  const originId = origin?.url.replace(
    `${jsonPlaceholderBaseURL}/location/`,
    ''
  );

  const filterByStatus = () => {
    setFilter(!filter);

    dispatch(
      filterCharacterAction.filterCharacter({
        isFiltered: filter,
        status: status,
        gender: gender
      })
    );

    scrollUpFunction();
  };

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
            {species} - <a onClick={filterByStatus}>{status}</a>
          </span>
        </div>
        <div className={styles.infoCard}>
          First seen in:{' '}
          <Link to={`/location/${originId}`}>{origin?.name}</Link>
        </div>
        <div className={styles.infoCard}>
          Last known location:{' '}
          <Link to={`/location/${locationId}`}>{location?.name}</Link>
        </div>
        <div className={styles.infoCard}>
          Gender: <a onClick={filterByStatus}>{gender}</a>
        </div>
      </div>
    </div>
  );
};
