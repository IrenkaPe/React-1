import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/Container/Container'
import NavBar from './components/UI/NavBar/NavBar'
import Home from './components/Pages/Home/Home'
import Favorite from './components/Pages/Favorite/Favorite'
import About from './components/Pages/About/About'
import List from './components/UI/List/List'
import NotFound from './components/Pages/NotFound/NotFound'

const App = () => {
	return (
		<Router>
			<main>
				<NavBar />
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/favorite' element={<Favorite />} />
						<Route path='/about' element={<About />} />
						<Route path='/list/:listId' element={<List />}/>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Container>
			</main>
		</Router>
	)
}

export default App
