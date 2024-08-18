import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./src/router/Login";  // Ajusta la ruta según tu estructura de carpetas

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Aquí puedes agregar otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
