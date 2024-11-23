//import "./App.css";
import "./Homepage.css";
import "./Style.css";
//import Defis from "./components/Defis";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="leaf">
          <img src="./assets/Leaf.svg" alt="logo feuille"></img>
          <p>0</p>
        </div>
        <div className="config">
          <button className="headerButton">
            <img src="./assets/Sun.svg" alt="logo soleil"></img>
          </button>
          <button className="headerButton">
            <img src="./assets/Ringbell.svg" alt="logo cloche"></img>
          </button>
        </div>
      </div>
      <div className="homePage">
        <h2>Un quizz vous attend</h2>
        <section className="question">
          <div className="questionCategory">
            <div className="categoriePicture">
              <img
                src="./assets/Icon.svg"
                alt="logo categorie de question"
              ></img>
            </div>
            <div className="categorieTitle">
              <p>Numérique</p>
            </div>
          </div>
          <div className="theQuestion">
            <h3>Quelle bonne pratique peut réduire l’empreinte carbone ?</h3>
          </div>
          <div className="progress">
            <p>5 questions</p>
            <div className="dot"></div>
            <p>30s</p>
          </div>
          <button className="launchQuiz">
            <p>Commencer le quiz</p>
          </button>
        </section>
        <section className="defis">
          <div className="headerDefis">
            <div className="defisCount">
              <h2>Les défis</h2>
              <div className="defisCounter">
                <p>16s</p>
              </div>
            </div>
            <button>
              <p className="showAllDefis">Tout voir</p>
            </button>
          </div>
          <article className="defi">
            <h3>Terminer 2 quizzes</h3>
            <div className="doneDefis">
              <p>0/2</p>
            </div>
          </article>
          <article className="defi">
            <h3>Faire une partie sans faute !</h3>
            <div className="doneDefis">
              <p>0/1</p>
            </div>
          </article>
        </section>
      </div>
      <nav className="footer">
        <section className="homeLink">
          <img src="./assets/Home.svg" alt="logo maison"></img>
        </section>
        <section className="homeLink">
          <img src="./assets/Key.svg" alt="logo clef"></img>
        </section>
        <section className="homeLink">
          <img src="./assets/Play.svg" alt="logo lecture"></img>
        </section>
        <section className="homeLink">
          <img src="./assets/Graph.svg" alt="logo graphique"></img>
        </section>
        <section className="homeLink">
          <img src="./assets/User.svg" alt="logo user"></img>
        </section>
      </nav>
    </div>
  );
}

export default App;
