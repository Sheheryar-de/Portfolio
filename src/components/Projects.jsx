import ProjectItem from "./UI/ProjectItem";
import thumbnail from "../assets/thumbnail-project-1-large.webp";
import Wrapper from "./UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Dialog from "./Dialog";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const class1 = "wrapper";
  const class2 = "projects__wrapper";
  const class3 = "bottom-border";

  return (
    <>
      <Wrapper className={`${class1} ${class2} ${class3}`}>
        <h2 className="projects__headline header-xl myClass" id="projects">
          Projects
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper projects"
        >
          {data.map((record) => (
            <SwiperSlide key={record.id}>
              <ProjectItem
                src={record.src}
                lang={record.lang}
                title={record.title}
                desc={record.desc}
                handleOpen={() => handleOpen(record)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Dialog
          isOpen={isOpen}
          onClose={handleClose}
          project={selectedProject}
        />
      </Wrapper>
    </>
  );
}

export default Projects;

const data = [
  {
    id: 1,
    src: thumbnail,
    title: "LINKEDIN-CLONE",
    desc: "Hello, I'm Sheheryar Ahmed, a passionate Junior Frontend Developer from Pakistan with a knack for turning design concepts into responsive and visually appealing websites. Adapt at HTML, CSS, JavaScript, ReactJS and NextJS",
    lang: ["ReactJS", "CSS3", "JSX", "HTML5", "Git", "Github", "GitFlow"],
    path: "https://github.com/Sheheryar-de/linked-in-clone",
  },
  {
    id: 2,
    src: thumbnail,
    title: "INVESTMENT CALCULATOR",
    desc: "Hello, I'm Sheheryar Ahmed, a passionate Junior Frontend Developer from Pakistan with a knack for turning design concepts into responsive and visually appealing websites. Adapt at HTML, CSS, JavaScript, ReactJS and NextJS",
    lang: ["ReactJS", "CSS3", "JSX", "HTML5", "Git", "Github", "GitFlow"],
    path: "https://github.com/Sheheryar-de/Investment-Calculator",
  },
  {
    id: 3,
    src: thumbnail,
    title: "ELEGENT CLOTHING",
    desc: "Hello, I'm Sheheryar Ahmed, a passionate Junior Frontend Developer from Pakistan with a knack for turning design concepts into responsive and visually appealing websites. Adapt at HTML, CSS, JavaScript, ReactJS and NextJS",
    lang: ["ReactJS", "CSS3", "JSX", "HTML5", "Git", "Github", "GitFlow"],
    path: "https://github.com/Sheheryar-de/Elegent-Clothing",
  },
  {
    id: 4,
    src: thumbnail,
    title: "QUIZ_APP",
    desc: "Hello, I'm Sheheryar Ahmed, a passionate Junior Frontend Developer from Pakistan with a knack for turning design concepts into responsive and visually appealing websites. Adapt at HTML, CSS, JavaScript, ReactJS and NextJS",
    lang: ["ReactJS", "CSS3", "JSX", "HTML5", "Git", "Github", "GitFlow"],
    path: "https://github.com/Sheheryar-de/Quiz-App",
  },
  {
    id: 5,
    src: thumbnail,
    title: "COUNTDOWN-GAME",
    desc: "Hello, I'm Sheheryar Ahmed, a passionate Junior Frontend Developer from Pakistan with a knack for turning design concepts into responsive and visually appealing websites. Adapt at HTML, CSS, JavaScript, ReactJS and NextJS",
    lang: ["ReactJS", "CSS3", "JSX", "HTML5", "Git", "Github", "GitFlow"],
    path: "https://github.com/Sheheryar-de/CountDown-Game",
  },
];
