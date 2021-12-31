import React, { FormEvent } from 'react';
import { InsertPhotoService } from '../../services/InsertPhotoService';
import * as S from './style';

export function UploadPhoto() {
  const [isUploading, setIsUploading] = React.useState<boolean>();
  const [isFile, setIsFile] = React.useState(false);
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const file = formData.get('image') as File;

      if (file && file.size > 0) {
        const insertPhotoService = new InsertPhotoService();
        setIsUploading(true);
        await insertPhotoService.execute(file);
        setIsUploading(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = () => {
    setIsFile(true);
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
      {isFile && <span>File waiting for deploy..</span>}
      {isUploading ? (
        <button type="submit">Deploying...</button>
      ) : (
        <button type="submit">Deploy</button>
      )}
    </S.FormContainer>
  );
}
