import { useState, useEffect } from 'react';
import darkIcon from '../../assets/images/dark.png'
import lightIcon from '../../assets/images/light.png'

const Theme = () => {

    const [themeName, setThemeName] = useState();

    useEffect(() => {

        if (localStorage.getItem('theme') === null) {
            if (window.matchMedia) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('theme', 'dark');
                    setThemeName('dark')
                } else {
                    localStorage.setItem('theme', 'light');
                    setThemeName('light');
                }
            }
        } else {
            setThemeName(localStorage.getItem('theme'))
        }
    }, [])

    useEffect(() => {
        if (themeName === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }

    }, [themeName])

    const onThemeChange = () => {
        if (themeName === 'dark') {
            setThemeName('light')
            localStorage.setItem('theme', 'light');
        } else {
            setThemeName('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <div className='theme' onClick={onThemeChange}>
            <img className='theme__icon' src={themeName === 'dark' ? darkIcon : lightIcon} alt="themeIcon" />
            <p className='theme__name'>Dark Mode {themeName === 'dark' ? 'On' : 'Off'}</p>
        </div>
    )
}

export default Theme
