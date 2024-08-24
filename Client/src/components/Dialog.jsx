import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";

const Dialog = ({ isOpen, onClose, project, message, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <dialog open={isOpen} className="dialog-container">
        <div className="close-btn" onClick={onClose}>
          <IoIosCloseCircleOutline size={24} />
        </div>
        <div className="dialog-desc">
          {!project && icon && <div className="icon-container">{icon}</div>}
          <h2>{message}</h2>
          {project && (
            <>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="languages">
                <p>Tech-Stack: &nbsp;</p>
                <span>
                  {project.lang.map((record, index) => (
                    <span key={index}>{record}, </span>
                  ))}
                </span>
              </div>
              <div className="contact__control" style={{ marginTop: "10px" }}>
                <a
                  href={project.path}
                  target="_blank"
                  className="underline"
                  style={{
                    backgroundColor: "black",
                    padding: "6px 10px",
                    marginRight: "15px",
                  }}
                >
                  View Source
                </a>
                {/* <a
                  className="underline"
                  style={{ backgroundColor: "black", padding: "6px 10px" }}
                >
                  Visit Website
                </a> */}
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Dialog;

Dialog.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.element,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    lang: PropTypes.array,
    path: PropTypes.string,
  }),
};
