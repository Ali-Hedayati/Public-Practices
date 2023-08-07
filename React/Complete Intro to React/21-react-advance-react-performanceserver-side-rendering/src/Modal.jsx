import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
/// { children } => mige childeren haye dakhelesh (be soorate <tag>) mishe vorodi
const Modal = ({ children }) => {
  ///useRef => in baes mishe hey render nakone ( toye dom hast azash estefade mikone)
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    // be in pak miknoadesh
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;