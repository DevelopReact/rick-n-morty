//config
import { RouterProvider } from './config/routeConfig';
//styles
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <RouterProvider />
    </div>
  );
}

export default App;
