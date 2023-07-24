import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import MainNavigation from "./components/MainNavigation";
import Contact from "./components/Contact";

function App() {
  return (
    <UserAuthContextProvider>
      <MainNavigation />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </UserAuthContextProvider>
  );
}

export default App;
