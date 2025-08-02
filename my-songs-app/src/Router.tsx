import { Routes, Route } from 'react-router-dom'
import HomeHeader from './pages/Home/HomeHeader'
import HomeContent from './pages/Home/HomeContent'

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomeHeader />
            <HomeContent />
          </>
        } 
      />
    </Routes>
  )
}

export default Router
