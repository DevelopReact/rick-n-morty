// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
//selectors
import { getCharacterFilterState } from '@/entities/characters/model/selector/getCharacterFilterState';
//api
import {
  useGetCharactersQuery,
  useGetFilterCharacterByStatusQuery
} from '@/entities/characters/api/characterAPI';
//ui
import { CharacterCard } from '@/entities/characters';
import {
  CustomPagination,
  Error,
  FilterToggle,
  Loader,
  Pagination
} from '@/shared/ui';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './CharactersPage.module.scss';

interface CharactersPageProps {}

export const CharactersPage: FC<CharactersPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetCharactersQuery(pageNumber, {
    skip: pageNumber === undefined
  });

  const { isFiltered, status, gender } = useSelector(getCharacterFilterState);

  const {
    data: filteredData,
    isLoading: filteredIsLoading,
    isError: filteredIsError
  } = useGetFilterCharacterByStatusQuery(
    { status, gender },
    {
      skip: status === undefined || gender === undefined
    }
  );

  if (isLoading || filteredIsLoading) {
    return <Loader />;
  }

  if (isError || filteredIsError) {
    return <Error />;
  }

  const currentData = isFiltered ? filteredData : data;

  return (
    <div className={styles.CharactersPage}>
      <div className={styles.titleCharacterPage}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Characters</p>
      </div>
      <Pagination
        countPages={currentData! && currentData.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <FilterToggle isFiltered={isFiltered} />
      <div className={styles.contentCharacterPage}>
        {currentData?.results.map(
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
        countPages={currentData! && currentData.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
