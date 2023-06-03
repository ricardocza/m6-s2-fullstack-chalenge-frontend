import { z } from "zod";

const createContactSchema = z.object({
    name: z.string().min(5).max(50),
    email: z.string().min(5).max(100),
    phone: z.string().length(11),
    
})

export {
    createContactSchema
}