// react
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
//api
import { useGetCharacterIdQuery } from '@/entities/characters/api/characterAPI';
import { useGetEpisodeMultipleQuery } from '@/entities/episodes/api/episodeAPI';
//ui
import { CharacterCard } from '@/entities/characters';
import { EpisodeCard } from '@/entities/episodes/ui';
import { Error, Loader } from '@/shared/ui';
//constants
import { jsonPlaceholderBaseURL } from '@/shared/libs/constants';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './CharacterIdPage.module.scss';

interface CharacterIdPageProps {}

export const CharacterIdPage: FC<CharacterIdPageProps> = ({}) => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [episodesId, setEpisodesId] = useState<number[]>([]);

  const { data, isSuccess, isLoading, isError } = useGetCharacterIdQuery(
    Number(characterId!)
  );

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const episodesId = data.episode?.map((episode: string) => {
      const id = episode.replace(`${jsonPlaceholderBaseURL}/episode/`, '');

      return Number(id);
    });

    setEpisodesId(episodesId!);
  }, [isSuccess, data]);

  const {
    data: episodesData,
    isSuccess: episodesSuccess,
    isLoading: episodesIsLoading,
    isError: episodesIsError
  } = useGetEpisodeMultipleQuery(episodesId, {
    skip: episodesId.length === 0
  });

  if (isLoading || episodesIsLoading) {
    return <Loader />;
  }

  if (isError || episodesIsError) {
    return <Error />;
  }

  return (
    <div className={styles.CharacterIdPage}>
      <div className={styles.titleCharacterCard}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Character: {data?.name}</p>
      </div>
      {isSuccess && (
        <CharacterCard
          id={data.id}
          key={data.id}
          name={data.name}
          gender={data.gender}
          image={data.image}
          origin={data.origin}
          species={data.species}
          status={data.status}
          location={data.location}
        />
      )}
      <div className={styles.titleCharacterCard}>
        <p>&nbsp;{data?.name}'s participated episodes: </p>
      </div>
      <div className={styles.episodeList}>
        {(episodesSuccess &&
          Array.isArray(episodesData) &&
          episodesData.map((episode) => (
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              episode={episode.episode}
              air_date={episode.air_date}
            />
          ))) ||
          (episodesSuccess && (
            <EpisodeCard
              key={episodesData.id}
              id={episodesData.id}
              name={episodesData.name}
              episode={episodesData.episode}
              air_date={episodesData.air_date}
            />
          ))}
      </div>
    </div>
  );
};
