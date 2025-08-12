import "./styles.css";
const skills = [
  { name: "html", color: "orange", level: "advanced" },
  { name: "css", color: "red", level: "advanced" },
  { name: "javascript", color: "yellow", level: "advanced" },
  { name: "react", color: "green", level: "beginer" },
  { name: "tailwind ", color: "orange", level: "intermediate" },
]
const Skill = ({ skill }) => {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }} >
      <span>{skill.name}</span>
      <span> {skill.level == "advanced" ? "😎" : skill.level == "intermediate" ? '😃' : '🤫'}</span>
    </div>
  )
}
const Avatar = () => {
  return <img src="https://tse3.mm.bing.net/th/id/OIP.sDGudWbPLYyfB9reTqQ6kgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="userImage" />

}
const Intro = () => {
  return <div>
    <h1 className=" card--body--title">Hazem hamdy </h1>
    <p className="card--body--description">
      hi iam front end developer has ecpreince in vue and react for build websites
    </p>
  </div>
}

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="card--body">
          <Intro />
          <div className="skillMenu">
            {skills.map(skill => {
              return <Skill skill={skill} />
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
