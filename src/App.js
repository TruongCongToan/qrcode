import './App.css';
import QRCode from './components/QRCode';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QRCode />}>
        <Route path="/qrcode/:email" element={<QRCode />}>
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
