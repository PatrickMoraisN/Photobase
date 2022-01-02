import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { DeletePhotoService } from '../../services/DeletePhotoService';
import { GetAllPhotosService } from '../../services/GetAllPhotosService';
import { PhotoProps } from '../../types/Photo';
import { ImageModal } from '../ImageModal';
import * as S from './style';

export function Gallery() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [photosList, setPhotosList] = React.useState<PhotoProps[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
  const [imageOpenUrl, setImageOpenUrl] = React.useState('');

  const getAllPhotos = async () => {
    const getAllPhotosService = new GetAllPhotosService();
    setIsLoading(true);
    const photos = await getAllPhotosService.execute();
    setPhotosList(photos);
    setIsLoading(false);
  };

  const handleDeletePhoto = async (e: React.MouseEvent<HTMLElement>) => {
    const name = e.currentTarget.getAttribute('data-nameId') as string;
    const deletePhotoService = new DeletePhotoService();
    await deletePhotoService.execute(name);
    window.location.reload();
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleOpenImageModal = (url: string) => {
    setImageOpenUrl(url);
    setIsImageModalOpen(true);
  };

  React.useEffect(() => {
    getAllPhotos();
  }, []);

  return (
    <S.GalleryContainer>
      {isLoading && <p>Loading...</p>}

      {!isLoading && photosList.length === 0 && <p>Add Photos!</p>}

      {!isLoading &&
        photosList.length > 0 &&
        photosList.map((photo) => (
          <S.PhotoContaier key={photo.name}>
            <button
              type="button"
              onClick={() => handleOpenImageModal(photo.url)}
            >
              <img src={photo.url} alt={photo.name} />
            </button>
            <button
              type="button"
              data-nameId={photo.name}
              onClick={handleDeletePhoto}
            >
              <AiFillDelete size={30} />
            </button>
          </S.PhotoContaier>
        ))}
      <ImageModal
        isOpen={isImageModalOpen}
        onRequestClose={handleCloseImageModal}
        urlImage={imageOpenUrl}
      />
    </S.GalleryContainer>
  );
}
