import { z } from "zod";

export interface iClient {
    name: string;
    email: string;
    phone: string;
    id: string;
  }
  
  export const createClientSchema = z.object({
      name: z.string().min(5).max(50),
    email: z.string().min(5).max(100),
    phone: z.string().length(11),
    
})

export const createClientSchemaResponse = createClientSchema.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),    
    contact: z.array(
        z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string()
        })).nullish()
    })
    
    
    export const listClientSchemaResponse = z.array(createClientSchemaResponse)
    
    export const updateClientSchema = createClientSchema.partial().refine(
        (data) => Object.keys(data).length > 0, 
        {message: `At least one field is required: name, email, phone`})
        
export type iCreateClient = z.infer<typeof createClientSchema>
export type iCreateClientResponse = z.infer<typeof createClientSchemaResponse>
export type iListClientResponse = z.infer<typeof listClientSchemaResponse>
export type iUpdateClient = z.infer<typeof updateClientSchema>

