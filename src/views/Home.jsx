// libs
import React from 'react'

// components
import Footer from '../components/atoms/Footer'
import Header from '../components/atoms/Header'
import MainBanner from '../components/atoms/MainBanner'
import TopCollections from './components/TopCollections'
import Features from './components/Features'
import { THEME_COLOR, useTheme } from '../contexts/ThemeContext'
import ToggleTheme from '../components/atoms/ToggleTheme'

const Home = () => {
	
	const { theme } = useTheme()
	return (
		<>
			<main id="main" className={`${theme == THEME_COLOR.LIGHT ? "light-class bg-light" : "dark-class bg-dark"} `}	>
				<ToggleTheme />
				<div className={`w-100 mx-auto  banner`} >
					<Header />
					<MainBanner />
				</div>
				<TopCollections />
				<Features />
				<Footer />
			</main>
		</>
	)
}

export default Home