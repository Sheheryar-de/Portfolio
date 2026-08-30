import Wrapper from "./UI/Wrapper";
import SkillItem from "./UI/SkillItem";

function Skills() {
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
      title: "Tailwind CSS",
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
      title: "NextJS",
      skillDesc: "1 Year Experience",
    },
    {
      id: 8,
      title: "Firebase",
      skillDesc: "1 Year Experience",
    },
    {
      id: 9,
      title: "SQL Server",
      skillDesc: "1 Year Experience",
    },
    {
      id: 10,
      title: "Git",
      skillDesc: "1 Year Experience",
    },
    {
      id: 11,
      title: "GitHub",
      skillDesc: "1 Year Experience",
    },
  ];

  return (
    <section
      className="skills wrapper bottom-border"
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h2 className="projects__headline header-xl skills__headline">Skills</h2>

      <p className="skills__intro">
        Technologies and tools I use to build modern, responsive web
        applications.
      </p>

      <Wrapper className="skills__wrapper">
        {data.map((record) => (
          <SkillItem
            key={record.id}
            title={record.title}
            skillDesc={record.skillDesc}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Skills;
