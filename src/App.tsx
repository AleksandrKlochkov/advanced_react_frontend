import * as React from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App: React.FC = () => {
 
    const { theme, toggleTheme, nextTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => toggleTheme()}>{nextTheme}</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route 
                            path={'/about'} 
                            element={<AboutPageAsync />}
                        />
                        <Route 
                            path={'/'}
                            element={<MainPageAsync />}
                        />
                    </Routes>
                </React.Suspense>
        </div>
    );
};