import * as z from 'zod'

export const BlogFormSchema = z
  .object({
    title: z.string().min(2, {
      message: 'Title must be at least 2 characters.',
    }),
    image_url: z.string().url({ message: 'Invalid URL' }),
    content: z.string().min(2, {
      message: 'Content must be at least 2 characters.',
    }),
    is_published: z.boolean(),
    is_premium: z.boolean(),
  })
  .refine(
    (data) => {
      const image_url = data.image_url

      try {
        const url = new URL(image_url)

        return url.hostname === 'image.unsplash.com'
      } catch {
        return false
      }
    },
    { message: 'Currently unsupported cdn of images', path: ['image_url'] }
  )

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>