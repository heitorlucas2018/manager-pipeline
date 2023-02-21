import logo from './logo.svg';
import './App.css';
import Content from './component/content';
import Checkbox from './component/checkbox';
import List from './component/list';

function App() {
  const datateste = ['Teste', 'Teste 2'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Manager service pipeline - Teste </p>
      </header>
      <Content contentPage='gdshajgdshj'>
        Lista de servicos
        <List data={datateste.map((value, index) => (<Checkbox label={value} />))}/>
      </Content>
    </div>
  );
}

export default App;
