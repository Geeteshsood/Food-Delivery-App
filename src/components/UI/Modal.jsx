import React,{useEffect, useRef} from 'react'
import { createPortal } from 'react-dom'

export default function Modal({children , open,className = '',onClose}) {

  const convo = useRef();

  useEffect(() => {

     const modal = convo.current;

    if (open) {
      modal.showModal();
    } 
    
    return () => modal.close();

  },[open]);

  return (
    createPortal(
    <dialog ref={convo} className={'modal ${className}'} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal'))
  );
}
