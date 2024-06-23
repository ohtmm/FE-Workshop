import { useEffect, useState } from 'react';
import { Photo, fetchPhotos } from './photos';

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>();
  useEffect(() => {
    fetchPhotos().then((res) => setPhotos(res));
  }, []);

  return photos;
};

export default usePhotos;
