import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { PhotoProps } from '../types/Photo';
import { storage } from '../firebase/firebase';
import { useGoogleAuthInfo } from '../hooks/useGoogleAuthInfo';

class GetAllPhotosService {
  async execute() {
    const list: PhotoProps[] = [];

    const localStorageUser = localStorage.getItem('@photobase-user');
    if (localStorageUser) {
      const { email } = JSON.parse(localStorageUser);

      const imagesFolder = ref(storage, `images/${email}`);
      const photosList = await listAll(imagesFolder);

      for (const i in photosList.items) {
        const photoUrl = await getDownloadURL(photosList.items[i]);

        list.push({
          name: photosList.items[i].name,
          url: photoUrl,
        });
      }
    }

    return list;
  }
}

export { GetAllPhotosService };
