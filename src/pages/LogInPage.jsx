//import styles from './LogInPage.module.css';

import styles from './RegistrationPage.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {
        try {
        // Отправка запроса на сервер для регистрации
        const response = await axios.post('https://accounts.google.com/o/oauth2/auth/register', {
            email,
            password,
            // Другие данные, которые требуются для регистрации
        });

        // Обработка успешной регистрации, например, перенаправление на другую страницу
        return <Navigate to="/" replace />
        } catch (error) {
        console.error('Ошибка при регистрации:', error);
        }
    };

    const handleGoogleLogin = () => {
        // Замените значения client_id и redirect_uri на свои
        const clientId = '622959286144-tch44pqeua6ks9g1h3n6sf4n7v3e6bsk.apps.googleusercontent.com';
        const redirectUri = 'http://localhost:3000/account';
    
        // Перенаправление на URI авторизации Google
        window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile&prompt=consent`;
    };
    
    return (
        <div className={styles.container}>
            <h2>Welcome to B¥€COIN$!</h2>
            <form className={styles.form}>
                <TextField focused id="outlined-basic" sx={{ width: '25vw', color: '#F1F1F1'}} color='error' value={email} label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                {/* <label className={styles.label}>Email:</label>
                <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email"/> */}

                {/* <label>Пароль:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                <TextField focused id="outlined-basic" sx={{ width: '25vw', color: '#F1F1F1'}} color='error' value={password} label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />

                <Button sx={{ width: '25vw'}} onClick={handleRegister} color="error" variant="contained" size="large">LOG IN</Button>

            </form>
            <span className={styles.agreement}>Forgot password?</span>
        </div>
    );
};