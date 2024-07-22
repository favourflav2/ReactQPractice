import { productListDataSchema, ProductListDataSchemaType } from "../schemas/productListDataSchema";

export const useGetProductDataWithZod = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
  const data = await res.json();

  // client side validation
  const zodValidatingData = productListDataSchema.safeParse(data);

  // Not sure how to handle errors here ... I can loop through array and return and throw ... but going to ask if theres another way
  if (!zodValidatingData.success) {
    const arrayOfErrorMsg = zodValidatingData.error.issues;
    //console.log(zodValidatingData.error.issues)
    throw new Error();
  }

  const dataThatHasBeenTypeCheckedWithZod = zodValidatingData.data;

  return dataThatHasBeenTypeCheckedWithZod;
};
