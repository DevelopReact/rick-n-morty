// react
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
//api
import { useGetLocationsQuery } from '@/entities/locations/api/locationAPI';
//ui
import { LocationCard } from '@/entities/locations/ui';
import { CustomPagination, Error, Loader, Pagination } from '@/shared/ui';
//assets
import ArrowLeft from '@/shared/libs/assets/svg/left-finger.svg?react';
// styles
import styles from './LocationsPage.module.scss';

interface LocationsPageProps {}

export const LocationsPage: FC<LocationsPageProps> = ({}) => {
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetLocationsQuery(pageNumber);

  if (isLoading) {
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
      <div className={styles.contentLocationPage}>
        {data?.results.map(({ id, name, dimension, type }) => {
          return (
            <LocationCard
              id={id}
              key={id}
              name={name}
              type={type}
              dimension={dimension}
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
