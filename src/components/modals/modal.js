import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = (props) => {
    const [container] = useState(document.createElement('div'));

    container.classList.add('portal');

    useEffect(() => {
        modalRoot.appendChild(container);

        return () => {
            modalRoot.removeChild(container);
        };
    }, []);

    return ReactDom.createPortal(props.children, container);
};
