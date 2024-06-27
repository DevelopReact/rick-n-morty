// react
import { FC, ReactNode } from 'react';
//lib
import classNames from 'classnames';
// styles
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  height?: 'small' | 'large';
  fontFamily?: 'RickMortyFont' | 'Courier';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  height,
  fontFamily,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.Button, {
        [styles.smallHeight]: height === 'small',
        [styles.largeHeight]: height === 'large',
        [styles.rickMortyFF]: fontFamily === 'RickMortyFont',
        [styles.courierFF]: fontFamily === 'Courier',
        [styles.disabledButton]: disabled
      })}
    >
      {children}
    </button>
  );
};
