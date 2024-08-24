import Wrapper from "./UI/Wrapper";
import SkillItem from "./UI/SkillItem";

function Skills() {
  const class1 = "wrapper";
  const class2 = "skills__wrapper";

  return (
    <>
      <Wrapper
        className="skills wrapper bottom-border "
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <h2 className="projects__headline header-xl contact__text">Skills</h2>
        <Wrapper className={`${class1} ${class2}`}>
          {data.map((record) => (
            <SkillItem
              key={record.id}
              title={record.title}
              skillDesc={record.skillDesc}
            />
          ))}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Skills;

const data = [
  {
    id: 1,
    title: "HTML5",
    skillDesc: "1.5 Year Experience",
  },
  {
    id: 2,
    title: "CSS3",
    skillDesc: "1.5 Year Experience",
  },
  {
    id: 3,
    title: "TailWind-CSS",
    skillDesc: "1.5 Year Experience",
  },
  {
    id: 4,
    title: "Bootstrap",
    skillDesc: "1 Year Experience",
  },
  {
    id: 5,
    title: "JavaScript",
    skillDesc: "1.5 Year Experience",
  },
  {
    id: 6,
    title: "ReactJS",
    skillDesc: "1 Year Experience",
  },
  {
    id: 7,
    title: "NodeJS",
    skillDesc: "1 Year Experience",
  },
  {
    id: 8,
    title: "MongoDB",
    skillDesc: "1 Year Experience",
  },
  {
    id: 9,
    title: "NextJS",
    skillDesc: "1 Year Experience",
  },
  {
    id: 10,
    title: "Firebase",
    skillDesc: "1 Year Experience",
  },
  {
    id: 11,
    title: "SQL-Server",
    skillDesc: "1 Year Experience",
  },
  {
    id: 12,
    title: "Git",
    skillDesc: "1 Year Experience",
  },
  {
    id: 13,
    title: "GitHub",
    skillDesc: "1 Year Experience",
  },
];
