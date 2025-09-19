// import { z } from "zod";

// export const bookSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   author: z.string().min(1, "Author is required"),
//   genre: z.string().min(1, "Genre is required"),
//   year: z.number()
//          .min(1000, "Invalid year")
//          .max(new Date().getFullYear(), "Year cannot be in future"),
//   status: z.enum(["Available", "Issued"])
// });

// export type BookFormData = z.infer<typeof bookSchema>;
