import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "300rem",
  },
};

// Binding modal to appElement
Modal.setAppElement("body");

function ModalClass(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="modalElement">
      <img className="img-small" src={props.imgIcon} alt="logo" />

      <button className="button-noStyle" onClick={openModal}>
        {props.title}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
      >
        <form>
          <div className="div1">
            <div className="applyFlex">
              <img className="img-large" src={props.imgSrc} alt="Sorry"></img>
              <div className="b-0">
                <h3>{props.name}</h3>
                <h3>{props.region}</h3>
              </div>
            </div>
            <h2 className="align-l">Pricing</h2>

            <table>
              <tbody>
                <tr>
                  <td>1 Week -1 Month</td>
                  <td>{props.pricing}</td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1 Year</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <button className="button-main" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalClass;
