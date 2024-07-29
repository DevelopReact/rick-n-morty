// react
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
//api
import { useGetLocationIdQuery } from '@/entities/locations/api/locationAPI';
import { useGetCharacterMultiQuery } from '@/entities/characters/api/characterAPI';
//ui
import { LocationCard } from '@/entities/locations/ui';
import { CharacterCard } from '@/entities/characters';
import { Error, Loader } from '@/shared/ui';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
//constants
import { jsonPlaceholderBaseURL } from '@/shared/libs/constants';
// styles
import styles from './LocationIdPage.module.scss';

interface LocationIdPageProps {}

export const LocationIdPage: FC<LocationIdPageProps> = ({}) => {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const [residentsId, setResidentsId] = useState<number[]>([]);

  const { data, isSuccess, isLoading, isError, isFetching } =
    useGetLocationIdQuery(Number(locationId));

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const residentId = data.residents?.map((resident: string) => {
      const id = resident.replace(`${jsonPlaceholderBaseURL}/character/`, '');

      return Number(id);
    });

    setResidentsId(residentId!);
  }, [isSuccess, data]);

  const {
    data: residentsData,
    isSuccess: residentsSuccess,
    isLoading: residentsIsLoading,
    isError: residentsIsError,
    isFetching: residentsIsFetching
  } = useGetCharacterMultiQuery(residentsId, {
    skip: residentsId.length === 0
  });

  if (isLoading || residentsIsLoading || isFetching || residentsIsFetching) {
    return <Loader />;
  }

  if (isError || residentsIsError) {
    return <Error />;
  }

  return (
    <div className={styles.LocationIdPage}>
      <div className={styles.titleLocationCard}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Location: {data?.name}</p>
      </div>
      {isSuccess && (
        <LocationCard
          id={data.id}
          key={data.id}
          dimension={data.dimension}
          name={data.name}
          type={data.type}
        />
      )}
      <div className={styles.titleLocationCard}>
        <p>&nbsp;{data?.name}'s residents: </p>
      </div>
      <div className={styles.residentList}>
        {(residentsSuccess &&
          Array.isArray(residentsData) &&
          residentsData.map((resident) => (
            <CharacterCard
              id={resident.id}
              key={resident.id}
              name={resident.name}
              gender={resident.gender}
              image={resident.image}
              origin={resident.origin}
              species={resident.species}
              status={resident.status}
              location={resident.location}
            />
          ))) ||
          (residentsSuccess && (
            <CharacterCard
              id={residentsData.id}
              key={residentsData.id}
              name={residentsData.name}
              gender={residentsData.gender}
              image={residentsData.image}
              origin={residentsData.origin}
              species={residentsData.species}
              status={residentsData.status}
              location={residentsData.location}
            />
          ))}
      </div>
    </div>
  );
};
