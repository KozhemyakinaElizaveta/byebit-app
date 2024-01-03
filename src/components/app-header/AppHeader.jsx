import styles from './AppHeader.module.css';
import { NavLink, Link, useMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../../assets/logo3.png';

// export const activePaths = {
//     'home': [{ path: '/', exact: true }, { path: '/ingredients', exact: false }],
// }

function AppHeader() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    {/* <img src={logo} className={styles.logo} /> */}
                    <span className={styles.textlogo}>B¥€COIN$</span>
                </div>
                <div className={styles.center}>
                    <span className={styles.navigation}>Buy</span>
                    <span className={styles.navigation}>Sell</span>
                </div>
                <div className={styles.right}>
                    <span className={styles.navigation}>Log in</span>
                    <button className={styles.button} role="button">Sign up</button>
                </div>
            </header>
            <span className={styles.line}></span>
        </>
    );
}

export default AppHeader;