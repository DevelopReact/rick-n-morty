import { createStore } from '@/app/config/store/createStore';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode;
}

const store = createStore();

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
