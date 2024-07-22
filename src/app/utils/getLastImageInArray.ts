import { Product } from "../components/hooks/useGetData";

export const getLastItemInArray = (
  imageArr: Array<string>,
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>,
  item: Product
) => {
  if (imageArr.length <= 0 || !imageArr) return;

  // I need to grab the thumbnail string
  const thumbnail = item.thumbnail;
  // return new array of images without the thumbnail url
  const filteredImageArr = imageArr.filter((item) => item !== thumbnail);

  setLastProductSelectedImage(filteredImageArr.at(-1) || "");
};
