import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
// import Song from "./pages/Song"; // Add the Song page if it exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album-details" element={<AlbumDetails />} />
        {/* <Route path="/song" element={<Song />} />  */}
      </Routes>
    </Router>
  );
};

export default App;
