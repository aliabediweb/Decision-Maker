import React from 'react';
// import 3rd party component:
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        // boolean value to open/close modal:
        isOpen={!!props.selectedOption}
        // event handler on 'esc' key or click background:
        onRequestClose={props.handleClearSelectedOption}
        // label (does not display on screen - just a name):
        contentLabel="Selected Option"
        // interval to wait before deleting modal 'div' (for transition close effect):
        closeTimeoutMS={300}
        // 'className' to style:
        className="modal"
    >
        {/* title: */}
        <h3 className="modal__title">Selected Option:</h3>
        {/* display 'selected option': */}
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        {/* button to close modal: */}
        <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
);



// default export:
export default OptionModal;


// explicit 'return' syntax:
// const OptionModal = () => {
//     return (
//         <div>
//             some text
//         </div>
//     )
// };


// implicit 'return' syntax:
// const OptionModal = () => (
//         <div>
//             some text
//         </div>
//     );