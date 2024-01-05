import styles from './AppHeader.module.css';
import { NavLink, Link, useMatch } from 'react-router-dom';
//import logo from '../../assets/logo3.png';

export const activePaths = {
    'home': { path: '/', exact: true },
    'buy': [{ path: '/buy', exact: false }],
    'registration': [{ path: '/registration', exact: false }],
    'login': [{ path: '/login', exact: false }],
    'sell': [{ path: '/sell', exact: false }]
}

function AppHeader() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    {/* <img src={logo} className={styles.logo} /> */}
                    <Link to='/'>
                        <span className={styles.textlogo}>B¥€COIN$</span>
                    </Link>
                </div>
                <div className={styles.center}>
                    <NavLink to='/buy' className={({isActive}) => `${styles.link} ${isActive ? styles.link_active : ""}`} >
                        <a className={styles.navigation}>Buy</a>
                    </NavLink>
                    <NavLink to='/sell' className={({isActive}) => `${styles.link} ${isActive ? styles.link_active : ""}`} >
                        <a className={styles.navigation}>Sell</a>
                    </NavLink>
                </div>
                <div className={styles.right}>
                    <NavLink to='/login' className={({isActive}) => `${styles.link} ${isActive ? styles.link_active : ""}`} >
                        <a className={styles.navigation}>Log in</a>
                    </NavLink>
                    <Link to='/registration'>
                        <button className={styles.button} role="button">Sign up</button>
                    </Link>
                </div>
            </header>
            <span className={styles.line}></span>
        </>
    );
}

export default AppHeader;