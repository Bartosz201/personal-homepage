import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import ModeSwitch from "../../comon/ModeSwitch";
import Portfolio from "./Portfolio";

function PersonalHomepage() {
  return (<>
    <ModeSwitch />
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
    />
    <Article
      title={"What I want to learn next 🚀"}
      listItems={[
        "Node.js",
        "JS classes",
        "Unit testing",
      ]}
    />
    <Portfolio />
    <Footer />
  </>);
};

export default PersonalHomepage;
