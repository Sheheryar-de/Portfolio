import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Dialog = ({ isOpen, onClose, project, message, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog" onClick={onClose}>
      <dialog
        open={isOpen}
        className="dialog-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <IoIosCloseCircleOutline size={28} />
        </button>

        <div className="dialog-desc">
          {!project && icon && <div className="icon-container">{icon}</div>}

          {!project && <h2>{message}</h2>}

          {project && (
            <>
              <p className="dialog-label">PROJECT</p>

              <h2>{project.title}</h2>

              <p>{project.desc}</p>

              <div className="languages">
                <p>Tech Stack:</p>

                <div>
                  {project.lang.map((technology) => (
                    <span key={technology}>{technology} </span>
                  ))}
                </div>
              </div>

              <div className="dialog-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  View Source
                </a>

                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

Dialog.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.element,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    lang: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    path: PropTypes.string,
  }),
};

export default Dialog;
