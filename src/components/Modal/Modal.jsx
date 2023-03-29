import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';

const ModalRoot = document.querySelector('#modal-root');

export function Modal ({ LargeImage, setShowModal }) {

    const modalEventListener = useCallback((e) => {
        if (e.target.id === 'overlay') { return setShowModal(false) };
    }, [setShowModal]);

    const onKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            setShowModal(false);
        }
    }, [setShowModal]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);

    return createPortal(
        <Overlay onClick={modalEventListener} id='overlay'>
            <ModalContainer>
                <img src={LargeImage} alt="" />
            </ModalContainer>
        </Overlay>,
        ModalRoot
    );
};

Modal.propTypes = {
    LargeImage: PropTypes.string.isRequired,
    setShowModal: PropTypes.func.isRequired,
};
