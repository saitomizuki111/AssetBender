import { Home, RoadMap, Team, Utilities, Disclaimer } from '../page'
import { Footer } from '../component'
import { Background, Header } from '../component'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Router = () => {

  return (
    <Background>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/utilities" element={<Utilities number={0} />} />
          <Route path="/utilities/platform" element={<Utilities number={0} />} />
          <Route path="/utilities/fund" element={<Utilities number={1} />} />
          <Route path="/utilities/lotus" element={<Utilities number={2} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Background>
  )
}

export default Router