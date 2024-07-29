// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
//api
import { useGetEpisodesQuery } from '@/entities/episodes/api/episodeAPI';
//ui
import { CustomPagination, Error, Loader, Pagination } from '@/shared/ui';
import { EpisodeCardList } from '../EpisodeCardList';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './EpisodesPage.module.scss';

interface EpisodesPageProps {}

export const EpisodesPage: FC<EpisodesPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, isFetching } =
    useGetEpisodesQuery(pageNumber);

  if (isLoading || isFetching) {
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
      <EpisodeCardList data={data!} />
      <CustomPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPages={data! && data.info.pages}
      />
    </div>
  );
};
