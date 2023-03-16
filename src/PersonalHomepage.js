import Article from "./Article";
import Header from "./Header";
import Portfolio from "./Portfolio";

function PersonalHomepage() {
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
  </>);
};

export default PersonalHomepage;
