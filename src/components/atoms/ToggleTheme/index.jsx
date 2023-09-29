// libs
import React from 'react'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { THEME_COLOR, useTheme } from '../../../contexts/ThemeContext'

// style
import "./style.css"

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <div className='text-end theme-class'> 
                {theme === THEME_COLOR.DARK ? (
                    <i onClick={() => toggleTheme(THEME_COLOR.LIGHT)}>
                        <FontAwesomeIcon icon={faToggleOn} size='2xl' color='white'  />
                    </i>
                ) : (
                    <i onClick={() => toggleTheme(THEME_COLOR.DARK)}>
                        <FontAwesomeIcon icon={faToggleOff} size='2xl' color='black' />
                    </i>
                )}
            </div>
        </>
    )
}

export default ToggleTheme