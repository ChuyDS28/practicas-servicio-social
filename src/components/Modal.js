import React, { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Modal = (props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    M.Modal.init(modalRef.current, {
      onCloseEnd: function (modal, trigger) {
        props.fnCloseModal();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const { open } = props;
    if (open && open === true) {
      openModal();
    }
  }, [props]);

  const openModal = () => {
    var instance = M.Modal.getInstance(modalRef.current);
    instance.open();
  };
  return (
    <div id="modal112" className="modal" ref={modalRef}>
      {props.children}
    </div>
  );
};

export default Modal;
