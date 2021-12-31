import React from 'react';
import { GetAllPhotosService } from '../../services/GetAllPhotosService';
import { PhotoProps } from '../../types/Photo';
import * as S from './style';

export function Gallery() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [photosList, setPhotosList] = React.useState<PhotoProps[]>([]);

  const getAllPhotos = async () => {
    const getAllPhotosService = new GetAllPhotosService();
    setIsLoading(true);
    const photos = await getAllPhotosService.execute();
    setPhotosList(photos);
    setIsLoading(false);
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
            <img src={photo.url} alt={photo.name} />
          </S.PhotoContaier>
        ))}
    </S.GalleryContainer>
  );
}
