import "./Homepage.css";
import Defis from "../../components/Defis";

function Error404() {
  return (
    <main>
      <div className="header">
        <div className="leaf">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Leaf.svg`}
            alt="logo feuille"
          ></img>
          <p>0</p>
        </div>
        <div className="config">
          <button className="headerButton">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Sun.svg`}
              alt="logo soleil"
            ></img>
          </button>
          <button className="headerButton">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Ringbell.svg`}
              alt="logo cloche"
            ></img>
          </button>
        </div>
      </div>
      <div className="homePage">
        <section className="question">
          <div className="questionCategory">
            <div className="categoriePicture">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icon.svg`}
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
            <button className="showAllDefis">
              <p>Tout voir</p>
            </button>
          </div>
          <Defis defi={"Faire une partie sans faute !"} goal={1}></Defis>
          <Defis defi={"Terminer 2 quizzes"} goal={2}></Defis>
        </section>
      </div>
      <nav className="footer">
        <button className="homeLink">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Home.svg`}
            alt="logo maison"
          ></img>
        </button>
        <button className="homeLink">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Key.svg`}
            alt="logo clef"
          ></img>
        </button>
        <button className="homeLink">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Play.svg`}
            alt="logo lecture"
          ></img>
        </button>
        <button className="homeLink">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Graph.svg`}
            alt="logo graphique"
          ></img>
        </button>
        <button className="homeLink">
          <img
            src={`${process.env.PUBLIC_URL}/assets/User.svg`}
            alt="logo user"
          ></img>
        </button>
      </nav>
    </main>
  );
}

export default Error404;
