// react
import { FC } from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './EpisodeCard.module.scss';

interface EpisodeCardProps {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export const EpisodeCard: FC<EpisodeCardProps> = ({
  id,
  name,
  episode,
  air_date
}) => {
  return (
    <div className={styles.Card} key={id}>
      <div className={styles.contentCard}>
        <div className={styles.titleCard}>
          <Link to={`/episode/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className={styles.infoCard}>
          Episode: <span>{episode}</span>
        </div>
        <div className={styles.infoCard}>
          Date: <span>{air_date}</span>
        </div>
      </div>
    </div>
  );
};
