import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ clickedImage, setClickedImage }) {
  const CloseModal = (e) => {
    setClickedImage(null);
  };
  return (
    <>
      <div className="modal-overlay dismiss" onClick={CloseModal}>
        <img src={clickedImage} alt="modal image" />
        <span className="dismiss">
          <AiOutlineClose onClick={CloseModal} />
        </span>
      </div>
    </>
  );
}
