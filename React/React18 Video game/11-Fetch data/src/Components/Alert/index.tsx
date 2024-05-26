import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
  // another approach
  // show: boolean;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <>
      <div
        className={`alert alert-warning alert-dismissible fade show`}
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;


// another approach
//         className={`alert alert-warning alert-dismissible fade ${
//           show && "show"
//         }`}

