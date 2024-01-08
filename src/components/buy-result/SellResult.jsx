import styles from './BuyResult.module.css';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ava from '../../assets/ava.jpg';
import NorthIcon from '@mui/icons-material/North';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';

function SellResult({btn, item}) {
    console.log(item)
    return(
        <>
            <div className={styles.box}>
                <div className={styles.avatar}>
                    <img src={ava}/>
                </div>
                <div className={styles.user_info}>
                    <span className={styles.user_name}>{item.user_nickname}</span>
                    {item.online_status == 0 ? (<span className={styles.user_name}>Last visit</span>) :
                    (<span className={styles.user_name}>Online</span>)}
                    <div className={styles.user_rate}>
                        <SentimentSatisfiedAltIcon/>
                        <span className={styles.rate_text}>{item.rated_good}</span>
                        <SentimentVeryDissatisfiedIcon/>
                        <span className={styles.rate_text}>{item.rated_bad}</span>
                    </div>
                </div>
                <div className={styles.change}>
                    <span >₽{item.price}</span>
                    <div className={styles.difference} alt='The difference with current market rate is 4.83%'>
                        <NorthIcon/>
                        <span >4,83%</span>
                    </div>
                    <span >₽{item.min_amount} - ₽{item.max_amount}</span>
                </div>
                <div className={styles.payment}>
                    <div className={styles.crypto_name}>
                        <LocalAtmIcon/>
                        <span>{item.crypto_type} / {item.payment_method}</span>
                    </div>
                    <span>{item.comment}</span>
                </div>
                <Button sx={{ width: '14vh', alignSelf: 'center', marginLeft: '1vw'}} color="error" variant="outlined" size="large">{btn}</Button>
            </div>
        </>
    );
}
export default SellResult;