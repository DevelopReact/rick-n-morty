// react
import { FC } from 'react';
//ui
import { LocationCard } from '@/entities/locations/ui';
//types
import { ILocation } from '@/entities/locations/model/types/locationType';
// styles
import styles from './LocationCardList.module.scss';

interface LocationCardListProps {
  data: ILocation;
}

export const LocationCardList: FC<LocationCardListProps> = ({ data }) => {
  return (
    <div className={styles.LocationCardList}>
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
  );
};
