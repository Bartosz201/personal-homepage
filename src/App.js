import Article from "./Article";
import Header from "./Header";


function App() {
  return (<>
    <Header />
    <Article
      title={"My skillset includes 🛠️"}
      listItems={[
        "Semantic & accessible HTML",
        "Immutability",
        "React Router",
        "Markdown",
        "React",
        "Responsive Web Design",
        "CSS BEM",
        "React Hooks",
        "Git",
        "CSS FLexbox",
        "Styled-components",
        "Github",
        "CSS Grid",
        "Redux (Toolkit)",
        "Trello",
        "JavaScript ES6", 
        "Redux-Saga",
        "Teamwork"
      ]}
      // "Semantic & accessible HTML",
      //   "Markdown",
      //   "CSS BEM",
      //   "CSS FLexbox",
      //   "CSS Grid",
      //   "JavaScript ES6",
      //   "Immutability",
      //   "React",
      //   "React Hooks",
      //   "Styled-components",
      //   "Redux (Toolkit)",
      //   "Redux-Saga",
      //   "React Router",
      //   "Responsive Web Design",
      //   "Git",
      //   "Github",
      //   "Trello",
      //   "Teamwork"
    />
  </>);
};

export default App;
