// react
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
//api
import { useGetEpisodeByIdQuery } from '@/entities/episodes/api/episodeAPI';
import { useGetCharacterMultiQuery } from '@/entities/characters/api/characterAPI';
//ui
import { CharacterCard } from '@/entities/characters';
import { EpisodeCard } from '@/entities/episodes/ui';
import { Error, Loader } from '@/shared/ui';
//constants
import { jsonPlaceholderBaseURL } from '@/shared/libs/constants';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './EpisodeIdPage.module.scss';

interface EpisodeIdPageProps {}

export const EpisodeIdPage: FC<EpisodeIdPageProps> = ({}) => {
  const { episodeId } = useParams();
  const navigate = useNavigate();
  const [charactersId, setCharactersId] = useState<number[]>([]);

  const { data, isSuccess, isLoading, isError, isFetching } =
    useGetEpisodeByIdQuery(Number(episodeId));

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const characterId = data.characters?.map((character: string) => {
      const id = character.replace(`${jsonPlaceholderBaseURL}/character/`, '');

      return Number(id);
    });

    setCharactersId(characterId!);
  }, [isSuccess, data]);

  const {
    data: charactersData,
    isSuccess: charactersSuccess,
    isLoading: charactersIsLoading,
    isError: charactersIsError,
    isFetching: charactersIsFetching
  } = useGetCharacterMultiQuery(charactersId, {
    skip: charactersId.length === 0
  });

  if (isLoading || charactersIsLoading || isFetching || charactersIsFetching) {
    return <Loader />;
  }

  if (isError || charactersIsError) {
    return <Error />;
  }

  return (
    <div className={styles.EpisodeIdPage}>
      <div className={styles.titleEpisodeCard}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Episode: {data?.name}</p>
      </div>
      {isSuccess && (
        <EpisodeCard
          id={data.id}
          key={data.id}
          name={data.name}
          air_date={data.air_date}
          episode={data.episode}
        />
      )}
      <div className={styles.titleEpisodeCard}>
        <p>&nbsp;{data?.name}'s characters: </p>
      </div>
      <div className={styles.charactersList}>
        {(charactersSuccess &&
          Array.isArray(charactersData) &&
          charactersData.map((character) => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
              origin={character.origin}
              species={character.species}
              status={character.status}
              location={character.location}
            />
          ))) ||
          (charactersSuccess && (
            <CharacterCard
              id={charactersData.id}
              key={charactersData.id}
              name={charactersData.name}
              gender={charactersData.gender}
              image={charactersData.image}
              origin={charactersData.origin}
              species={charactersData.species}
              status={charactersData.status}
              location={charactersData.location}
            />
          ))}
      </div>
    </div>
  );
};
