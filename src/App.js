import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import MenuVertical from "./components/menuVertical";
import Home from "./pages/home";
import Painel from "./pages/painel"

function App() {
  return (
    <Router>
      <Container className="container-container">
        <Grid textAlign="left" columns='equal'>
          <Grid.Row>
            <Grid.Column width={4}>
              <MenuVertical />
            </Grid.Column>
            <Grid.Column >
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/home' element={<Home />} />
                  <Route exact path='/repositories' element={<Painel />} />
                </Routes>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
