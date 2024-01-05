import styles from './App.module.css';
import AppHeader from '../app-header/AppHeader';
import RoutesContainer from '../../pages/RoutesContainer';

function App(){
    return(
        <div className={styles.app}>
            <AppHeader/>
            <RoutesContainer/>
        </div>
    )
}

export default App;