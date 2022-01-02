import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '../firebase/firebase';
import { PhotoProps } from '../types/Photo';

class InsertPhotoService {
  async execute(file: File) {
    const localStorageUser = localStorage.getItem('@photobase-user');
    if (localStorageUser) {
      const { email } = JSON.parse(localStorageUser);
      const namePhotoId = uuid();

      const newFile = ref(storage, `images/${email}/${namePhotoId}`);

      const upload = await uploadBytes(newFile, file);

      const photoUrl = await getDownloadURL(upload.ref);

      return { name: upload.ref.name, url: photoUrl } as PhotoProps;
    }
    return new Error('Upload Fail');
  }
}

export { InsertPhotoService };
