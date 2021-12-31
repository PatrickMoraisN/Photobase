import React, { FormEvent } from 'react';

export function UploadPhoto() {
  const [isUploading, setIsUploading] = React.useState<boolean>();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setIsUploading(true);

      setIsUploading(false);
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
