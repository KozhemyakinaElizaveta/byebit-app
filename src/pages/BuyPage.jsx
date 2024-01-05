import styles from './BuyPage.module.css';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const currencies = [
    {
    value: 'USD',
    label: '$USD',
    },
    {
        value: 'RUB',
        label: '₽RUB',
        },
    {
        value: 'EUR',
        label: '€EUR',
    },
    {
        value: 'JPY',
        label: '¥JPY',
    },
];

export function BuyPage() {
    const [isClicked, setIsClicked] = useState(false);
    const buttonChange = () => {
        setIsClicked(!isClicked);
    }

    const [isRated, setIsRated] = useState(false);
    const rateChange = () => {
        setIsRated(!isRated);
    }

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
                            defaultValue="BTC"
                        >
                            <MenuItem value={'BTC'}>BTC</MenuItem>
                            <MenuItem value={'ETH'}>ETH</MenuItem>
                            <MenuItem value={'TON'}>TON</MenuItem>
                            <MenuItem value={'USDT'}>USDT</MenuItem>
                            <MenuItem value={'XMR'}>XMR</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField sx={{ width: '12vh'}} size="small" id="outlined-basic" label="Amount" variant="outlined" />
                    <FormControl sx={{ width: '13vh'}} size="small">
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Currency"
                            sx={{ color: '#FFF'}}
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
                        >
                            <MenuItem value={'хуй1'}>хуй</MenuItem>
                            <MenuItem value={'хуй2'}>хуй</MenuItem>
                            <MenuItem value={'хуй3'}>хуй</MenuItem>
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
                    <div className={styles.result}></div>
                </div>
                {/* <div className={styles.spark}></div> */}
            </div>
        </main>
    )
}