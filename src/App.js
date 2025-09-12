import './App.css';
import Main from './Main';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <section className="container">
      <section className="heading">
        <header className="header"><Header/></header>
        <nav className="nav"><Nav/></nav>
      </section>
      <main className="main"><Main/></main>
      <footer className="footer"><Footer/></footer>
    </section>
  );
}

export default App;
