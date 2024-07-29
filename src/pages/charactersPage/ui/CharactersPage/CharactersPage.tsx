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
import {
  CustomPagination,
  Error,
  FilterToggle,
  Loader,
  Pagination
} from '@/shared/ui';
import { CharacterCardList } from '../CharacterCardList';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './CharactersPage.module.scss';

interface CharactersPageProps {}

export const CharactersPage: FC<CharactersPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, isFetching } = useGetCharactersQuery(
    pageNumber,
    {
      skip: pageNumber === undefined
    }
  );

  const { isFiltered, status, gender } = useSelector(getCharacterFilterState);
  {
    /* //TODO */
  }
  const {
    data: filteredData,
    isLoading: filteredIsLoading,
    isError: filteredIsError,
    isFetching: filteredIsFetching
  } = useGetFilterCharacterByStatusQuery(
    { status, gender },
    {
      skip: status === undefined || gender === undefined
    }
  );

  if (isLoading || filteredIsLoading || isFetching || filteredIsFetching) {
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
      <CharacterCardList currentData={currentData!} />
      <CustomPagination
        countPages={currentData! && currentData.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
