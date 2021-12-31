import React, { FormEvent } from 'react';
import { InsertPhotoService } from '../../services/InsertPhotoService';

export function UploadPhoto() {
  const [isUploading, setIsUploading] = React.useState<boolean>();
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

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" name="image" />
      {isUploading ? (
        <button type="submit">Uploading...</button>
      ) : (
        <button type="submit">Add Photo</button>
      )}
    </form>
  );
}
