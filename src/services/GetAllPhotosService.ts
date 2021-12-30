import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { PhotoProps } from '../types/Photo';
import { storage } from '../firebase/firebase';

class GetAllPhotosService {
  async execute() {
    const list: PhotoProps[] = [];

    const imagesFolder = ref(storage, 'images');
    const photosList = await listAll(imagesFolder);

    for (const i in photosList.items) {
      const photoUrl = await getDownloadURL(photosList.items[i]);

      list.push({
        name: photosList.items[i].name,
        url: photoUrl,
      });
    }

    return list;
  }
}

export { GetAllPhotosService };
