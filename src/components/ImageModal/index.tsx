import React from 'react';
import ReactModal from 'react-modal';
import * as S from './style';

interface IImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  urlImage: string;
}

export function ImageModal({
  isOpen,
  onRequestClose,
  urlImage,
}: IImageModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Image src={urlImage} alt="Photobase" />
    </ReactModal>
  );
}
