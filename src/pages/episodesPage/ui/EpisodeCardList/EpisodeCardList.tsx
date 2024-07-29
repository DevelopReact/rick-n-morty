// react
import { FC } from 'react';
//ui
import { EpisodeCard } from '@/entities/episodes/ui';
//types
import { IEpisode } from '@/entities/episodes/model/types/episodeTypes';
// styles
import styles from './EpisodeCardList.module.scss';

interface EpisodeCardListProps {
  data: IEpisode;
}

export const EpisodeCardList: FC<EpisodeCardListProps> = ({ data }) => {
  return (
    <div className={styles.EpisodeCardList}>
      {data?.results.map(({ id, name, episode, air_date }) => {
        return (
          <EpisodeCard
            id={id}
            key={id}
            name={name}
            episode={episode}
            air_date={air_date}
          />
        );
      })}
    </div>
  );
};
