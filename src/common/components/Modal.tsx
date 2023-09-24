import { ReactNode } from "react";
import "../styles/Common.css";

interface ModalProps {
  children: ReactNode;
  heading: string;
  submitText: string;
  disabledSubmit: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal = ({
  children,
  heading,
  submitText,
  disabledSubmit,
  onClose,
  onSubmit,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{heading}</h2>
        <i className="las la-times-circle" onClick={onClose} />
      </div>
      <div className="modal-content">{children}</div>
      <div className="modal-footer">
        <button onClick={onSubmit} disabled={disabledSubmit}>
          {submitText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
