import { deleteObject, ref } from '@firebase/storage';
import React from 'react';
import { storage } from '../firebase/firebase';

class DeletePhotoService {
  async execute(name: string) {
    const localStorageUser = localStorage.getItem('@photobase-user');

    if (localStorageUser) {
      const { email } = JSON.parse(localStorageUser);
      const imageRef = ref(storage, `images/${email}/${name}`);
      const deletedPhoto = await deleteObject(imageRef);
      return deletedPhoto;
    }
    throw new Error('Invalid action');
  }
}

export { DeletePhotoService };
