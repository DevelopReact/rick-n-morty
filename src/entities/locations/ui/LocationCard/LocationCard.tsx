// react
import { FC } from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './LocationCard.module.scss';

interface LocationCardProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const LocationCard: FC<LocationCardProps> = ({
  id,
  name,
  type,
  dimension
}) => {
  return (
    <div className={styles.Card} key={id}>
      <div className={styles.contentCard}>
        <div className={styles.titleCard}>
          <Link to={`/location/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className={styles.infoCard}>
          Type: <span>{type}</span>
        </div>
        <div className={styles.infoCard}>
          Dimension: <span>{dimension}</span>
        </div>
      </div>
    </div>
  );
};
