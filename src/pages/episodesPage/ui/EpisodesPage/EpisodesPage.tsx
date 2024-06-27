// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
//api
import { useGetEpisodesQuery } from '@/entities/episodes/api/episodeAPI';
//ui
import { EpisodeCard } from '@/entities/episodes/ui';
import { CustomPagination, Error, Loader, Pagination } from '@/shared/ui';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './EpisodesPage.module.scss';

interface EpisodesPageProps {}

export const EpisodesPage: FC<EpisodesPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetEpisodesQuery(pageNumber);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.EpisodePage}>
      <div className={styles.titleEpisodePage}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Episodes</p>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPages={data! && data.info.pages}
      />
      <div className={styles.contentEpisodePage}>
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
      <CustomPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPages={data! && data.info.pages}
      />
    </div>
  );
};
