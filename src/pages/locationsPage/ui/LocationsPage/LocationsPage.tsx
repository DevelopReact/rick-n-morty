// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
//api
import { useGetLocationsQuery } from '@/entities/locations/api/locationAPI';
//ui
import { CustomPagination, Error, Loader, Pagination } from '@/shared/ui';
import { LocationCardList } from '../LocationCardList';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './LocationsPage.module.scss';

interface LocationsPageProps {}

export const LocationsPage: FC<LocationsPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, isFetching } =
    useGetLocationsQuery(pageNumber);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.LocationPage}>
      <div className={styles.titleLocationPage}>
        <ArrowLeft onClick={() => navigate(-1)} />
        <p>&nbsp;Locations</p>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPages={data! && data.info.pages}
      />
      <LocationCardList data={data!} />
      <CustomPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPages={data! && data.info.pages}
      />
    </div>
  );
};
