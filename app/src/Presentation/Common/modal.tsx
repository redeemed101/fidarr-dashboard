import { useState } from "react";
import ReactModal from "react-modal";
import Modal from 'react-modal';

if(ReactModal.defaultStyles.overlay !== undefined)
 ReactModal.defaultStyles.overlay.backgroundColor = '#B3904845' ;
 if(ReactModal.defaultStyles.content !== undefined)
    ReactModal.defaultStyles.content.backgroundColor = '#000000'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
type FidarrModalProps = {
  title: string,
  isOpen: boolean,
  children: React.ReactNode,
  height: number,
  width: number,
  //open: () => void,
  close: () => void,
  afterOpen: () => void
}
const FidarrModal = (props: FidarrModalProps) => {
    if(ReactModal.defaultStyles.content !== undefined){
       ReactModal.defaultStyles.content.height = props.height
       ReactModal.defaultStyles.content.width = props.width
    }
    return (
        <Modal
            isOpen={props.isOpen}
            onAfterOpen={props.afterOpen}
            onRequestClose={props.close}
            style={customStyles}
            //className="bg-blue-600 h-full"
           // overlayClassName="bg-blue-600"
            contentLabel={props.title}
        >
         {props.children}
      </Modal>
    )
}

export default FidarrModal