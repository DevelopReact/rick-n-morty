// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
//api
import { useGetCharactersQuery } from '@/entities/characters/api/characterAPI';
//ui
import { CharacterCard } from '@/entities/characters';
import { CustomPagination, Error, Loader, Pagination } from '@/shared/ui';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './CharactersPage.module.scss';

interface CharactersPageProps {}

export const CharactersPage: FC<CharactersPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetCharactersQuery(pageNumber);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.CharactersPage}>
      <div className={styles.titleCharacterPage}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Characters</p>
      </div>
      <Pagination
        countPages={data! && data.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className={styles.contentCharacterPage}>
        {data?.results.map(
          ({ id, name, gender, image, origin, species, status, location }) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              gender={gender}
              image={image}
              origin={origin}
              species={species}
              status={status}
              location={location}
            />
          )
        )}
      </div>
      <CustomPagination
        countPages={data! && data.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
