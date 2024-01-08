import styles from './BuyPage.module.css';
import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import BuyResult from '../components/buy-result/BuyResult';
import { getSearch } from '../services/actions';
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_RESULTS, SEARCH_PARAMETERS} from '../services/actions';


const currencies = [
    {
    value: 'USD',
    label: 'USD',
    },
    {
        value: 'RUB',
        label: 'RUB',
        },
    {
        value: 'EUR',
        label: 'EUR',
    },
    {
        value: 'JPY',
        label: 'JPY',
    },
];

export function SellPage() {
    const [currency, setCurrency] = useState('');
    const [amount, setAmount] = useState(null);
    const [transaction_type, setTrans] = useState('sell');
    const [payment_method, setPay] = useState('');
    const [crypto_type, setCrypto] = useState('');

    const { results } = useSelector(store => store.searchReducer);

    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch({
            type: CLEAR_RESULTS,
            results: [],
        })
        const options = {
            payment_method: payment_method,
            amount: amount,
            currency: currency,
            transaction_type: transaction_type,
            crypto_type: crypto_type,
            online_sort: isClicked,
        }
        dispatch(getSearch(options));
        dispatch({
            type: SEARCH_PARAMETERS,
            payment_method: payment_method,
            amount: amount,
            currency: currency,
            transaction_type: transaction_type,
            crypto_type: crypto_type,
            online_sort: isClicked,
            price_sort: isRated
        });
    };

    const [isClicked, setIsClicked] = useState(false);
    const buttonChange = () => {
        setIsClicked(!isClicked);
    }

    const [isRated, setIsRated] = useState(false);
    const rateChange = () => {
        setIsRated(!isRated);
        handleChange()
    }

    const currencyChange= (event) => {
        setCurrency(event.target.value);
        handleChange()
    }

    const amountChange= (event) => {
        setAmount(event.target.value);
        handleChange()
    }

    const cryptoChange= (event) => {
        setCrypto(event.target.value);
        handleChange()
    }

    const payChange= (event) => {
        setPay(event.target.value);
        handleChange()
    }

    useEffect(() => {
        const options = {
            crypto_type,
            payment_method,
            amount,
            currency,
            transaction_type,
            online_sort: isClicked,
            price_sort: isRated,
        };
    
        dispatch({
            type: CLEAR_RESULTS,
            results: [],
        });
    
        dispatch(getSearch(options));
        dispatch({
            type: SEARCH_PARAMETERS,
            ...options,
        });
    }, [crypto_type, payment_method, amount, currency, transaction_type, isClicked, isRated]);

    return (
        <main >
            <div className={styles.back_top}>
                <span className={styles.slogan}>Unlock Your Crypto Potential, Exchange with Ease!</span>
                <span className={styles.choice}>Choose a suitable offer and open a secure trade</span>
                <div className={styles.container}>
                    <FormControl sx={{ width: '14vh'}} size="small">
                        <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Crypto"
                            sx={{ color: '#FFF'}}
                            onChange={cryptoChange}
                            defaultValue="BTC"
                        >
                            <MenuItem value={'BTC'}>BTC</MenuItem>
                            <MenuItem value={'ETH'}>ETH</MenuItem>
                            <MenuItem value={'TON'}>TON</MenuItem>
                            <MenuItem value={'USDT'}>USDT</MenuItem>
                            <MenuItem value={'XMR'}>XMR</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField onChange={e => amountChange(e.target.value)} sx={{ width: '12vh'}} size="small" id="outlined-basic" label="Amount" variant="outlined" />
                    <FormControl sx={{ width: '13vh'}} size="small">
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Currency"
                            sx={{ color: '#FFF'}}
                            onChange={currencyChange}
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '20vh'}} size="small">
                        <InputLabel id="demo-simple-select-label">Payment method</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Currency"
                            sx={{ color: '#5BD1B7'}}
                            onChange={payChange}
                        >
                            <MenuItem value={'Sberbank'}>Sberbank</MenuItem>
                            <MenuItem value={'SBP'}>SBP</MenuItem>
                            <MenuItem value={'Tinkoff'}>Tinkoff</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <span className={styles.text}>Current market price for 1 BTC:₽4 029 156</span>
            </div>
            <div className={styles.back_middle}>
                <div className={styles.box}>
                    <div className={styles.filter}>
                        <span className={styles.text}>Filter</span>
                        <button className={styles.button_active} id="button" onClick={rateChange}>Rate {isRated ? <KeyboardDoubleArrowDownIcon/> : <KeyboardDoubleArrowUpIcon/>}</button>
                        <button className={isClicked ? `${styles.button_active}` : `${styles.button}`} id="button" onClick={buttonChange}>Online only</button>
                    </div>
                    <span className={styles.line}></span>
                    <div className={styles.result}>
                        <div className={styles.columns}>
                            <span >Seller</span>
                            <span className={styles.gap}>Rate/Limits</span>
                            <span >Payment methods</span>
                        </div>
                        {results.map((item, index) => <BuyResult key={index} item={item} btn='SELL'/>)}
                    </div>
                </div>
                {/* <div className={styles.spark}></div> */}
            </div>
        </main>
    )
}