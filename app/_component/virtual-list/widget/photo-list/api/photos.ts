export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const fetchPhotos = async (): Promise<Photo[]> => {
  try {
    console.log('Fetching Photos data');
    const list = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    ).then((res) => res.json());

    return list;
  } catch (error) {
    console.error('fetching Error:', error);
    throw new Error('Failed to fetch photos.');
  }
};
