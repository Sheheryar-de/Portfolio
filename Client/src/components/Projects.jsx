import ProjectItem from "./UI/ProjectItem";
import Wrapper from "./UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import Dialog from "./Dialog";
import linked from "../assets/linked.png";
import workhive from "../assets/workhive.png";
import Gems from "../assets/Gems.png";
import chat from "../assets/chat.png";
import New from "../assets/NewPort.png";
import Old from "../assets/oldPort.png";

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
        <h2
          className="projects__headline header-xl myClass"
          id="projects"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Projects
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
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
    title: "LinkedIn Clone",
    desc: "A professional social networking application inspired by LinkedIn. Built with React and Firebase with authentication, profiles, posts, and social interactions.",
    src: linked,
    lang: ["React", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/Sheheryar-de/linked-in-clone",
    path: "https://linked-in-clone-ruby-six.vercel.app/",
  },
  {
    id: 2,
    title: "Workhive",
    desc: "A web application that allows users to get coWorking spaces and book them. Built with React, Node.js, Express, and MongoDB.",
    src: workhive,
    lang: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sheheryar-de/WorkHive",
    path: "https://workhive.netlify.app/",
  },
  {
    id: 3,
    title: "Gems & Jewels",
    desc: "A modern e-commerce website for a jewelry store, featuring product listings, shopping cart functionality, and a responsive design.",
    src: Gems,
    lang: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
    github: "https://github.com/Sheheryar-de/Gems-Jewel",
    path: "https://gems-jewels.netlify.app/",
  },
  {
    id: 4,
    title: "Chat App",
    desc: "A real-time chat application that allows users to communicate with each other in a seamless and intuitive interface.",
    src: chat,
    lang: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
    github: "https://github.com/Sheheryar-de/Chat-App-Frontend",
    path: "https://chat-app-frontendd.netlify.app/",
  },
  {
    id: 5,
    title: "New Portfolio",
    desc: "A modern portfolio website showcasing my skills, projects, and experience as a developer.",
    src: New,
    lang: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
    github: "https://github.com/Sheheryar-de/Portfolio-Sheri",
    path: "https://portfolio-sheri.netlify.app/",
  },
  {
    id: 6,
    title: "Old Portfolio",
    desc: "A modern portfolio website showcasing my skills, projects, and experience as a developer.",
    src: Old,
    lang: [
      "React",
      "JavaScript",
      "NodeJs",
      "Express",
      "Tailwind CSS",
      "CSS",
      "HTML",
    ],
    github: "https://github.com/Sheheryar-de/Portfolio",
    path: "https://sheheryar-portfolio.netlify.app/",
  },
];
