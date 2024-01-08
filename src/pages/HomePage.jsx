import styles from './HomePage.module.css';
import coins from '../assets/coins.png';
import lock from '../assets/lock.png';
import box from '../assets/box.png';
import phone from '../assets/phone.png';


export function HomePage() {
    return (
        <main className={styles.back}>
            <div className={styles.introduction}>
                <span className={styles.main_text}>What is B¥€COIN$?</span>
                <span className={styles.text}>B¥€COIN$ is a global P2P marketplace where you can buy or sell cryptocurrencies. The trades are carried out between two peers, while Bitpapa guarantees the trade execution by holding the seller's coins in an escrow account until the trade has been completed</span>
            </div>
            <div className={styles.info}>
                <div className={styles.box}>
                    <img src={coins}/>
                    <span className={styles.title}>Over 100 payment methods</span>
                    <span className={styles.info_text}>To buy or sell cryptocurrency, pick up the payment method available in your area</span>
                </div>
                <div className={styles.box}>
                    <img src={lock}/>
                    <span className={styles.title}>Every trade is protected</span>
                    <span className={styles.info_text}>All trades are carried out with a special escrow account</span>
                </div>
                <div className={styles.box}>
                    <img src={box}/>
                    <span className={styles.title}>Safe and secure wallet</span>
                    <span className={styles.info_text}>A way to store, send and receive Bitcoin, Ethereum, USDT etc.</span>
                </div>
                <div className={styles.box}>
                    <img src={phone}/>
                    <span className={styles.title}>Convenient Telegram bot</span>
                    <span className={styles.info_text}>Bot delivers the whole package from within a user-friendly interface, specifically tailored for instant and secure trades</span>
                </div>
            </div>
        </main>
    )
}