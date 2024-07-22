import { z } from "zod";

const productListDataReviewObj = z.object({
    comment: z.string(),
    date: z.string(),
    rating: z.number(),
    reviewerEmail: z.string(),
    reviewerName: z.string()
})

const productListObject = z.object({
  availabilityStatus: z.string(),
  brand:z.string().optional(),
  category: z.string(),
  description: z.string(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number()
  }),
  discountPercentage: z.number(),
  id: z.number(),
  images: z.array(z.string()),
  meta: z.object({
    barcode: z.string(),
    createdAt: z.string(),
    qrCode: z.string(),
    updatedAt: z.string()
  }),
  minimumOrderQuantity: z.number(),
  price: z.number(),
  rating: z.number(),
  returnPolicy: z.string(),
  reviews: z.array(productListDataReviewObj),
  shippingInformation: z.string(),
  sku: z.string(),
  stock: z.number(),
  tags: z.array(z.string()),
  thumbnail: z.string(),
  title: z.string(),
  warrantyInformation: z.string(),
  weight: z.number()
})



export const productListDataSchema = z.object({
  limit: z.number({ required_error: "There needs to be a number value for limit" }),
  skip: z.number({ required_error: "There needs to be a number value for skip" }),
  total: z.number({ required_error: "There needs to be a number value for total" }),
  products: z.array(productListObject)
});


export type ProductListDataSchemaType = z.infer<typeof productListDataSchema>