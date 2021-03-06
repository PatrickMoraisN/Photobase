import React, { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { InsertPhotoService } from '../../services/InsertPhotoService';
import * as S from './style';

export function UploadPhoto() {
  const [isUploading, setIsUploading] = React.useState<boolean>();
  const [image, setImage] = React.useState<File>();
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState('');
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const file = formData.get('image') as File;

      if (
        file &&
        file.size > 0 &&
        ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)
      ) {
        const insertPhotoService = new InsertPhotoService();
        setIsUploading(true);
        await toast.promise(insertPhotoService.execute(file), {
          pending: 'Uploading image...',
          success: {
            render() {
              setTimeout(() => window.location.reload(), 3000);
              return 'Image sent successfully! Refreshing page...';
            },
          },
        });
        setIsUploading(false);
      } else {
        toast.error('Check your image! Upload error!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      toast.error('Check your image! Upload error!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentImage = event.currentTarget.files as FileList;
    const imageFile = currentImage[0];
    const imageFileUrl = URL.createObjectURL(imageFile);
    setImage(imageFile);
    setImagePreviewUrl(imageFileUrl);
  };

  return (
    <S.FormContainer onSubmit={handleFormSubmit}>
      <label htmlFor="file-upload">
        Upload Photo
        <input
          type="file"
          name="image"
          id="file-upload"
          onChange={handleFileChange}
        />
      </label>
      {image && (
        <S.PreviewContainer>
          <S.ImagePreview src={imagePreviewUrl} alt={image.name} />
          {!['image/jpeg', 'image/jpg', 'image/png'].includes(image.type) ? (
            <span>Select an image of type png / jpeg / jpg please!!!</span>
          ) : (
            <span>{image.name} waiting for deploy..</span>
          )}
        </S.PreviewContainer>
      )}
      {isUploading ? (
        <button type="submit">Deploying...</button>
      ) : (
        <button type="submit">Deploy</button>
      )}
    </S.FormContainer>
  );
}
