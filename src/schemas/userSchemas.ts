import { z } from "zod"

export interface iUser {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export const updateUserFormSchema = z
    .object({
        firstName: z
            .string()
            .min(2, "Este campo deve conter no mínimo 2 caracteres")
            .nullish(),
        name: z
            .string()
            .min(2, "Este campo deve conter no mínimo 2 caracteres")
            .nullish(),
        lastName: z
            .string()
            .min(2, "Este campo deve conter no mínimo 2 caracteres")
            .nullish(),
        phone: z.string().length(11),
        email: z.string().email("Formato de e-mail inválido").nullish(),
        password: z
            .string()
            .min(6, "Este campo deve conter no mínimo 6 caracteres")
            .nullish(),
        confirmPassword: z
            .string()
            .min(6, "Este campo deve conter no mínimo 6 caracteres")
            .nullish(),
    })
    .partial()
    .refine(
        (data) => {
            if (data.password) return data.password === data.confirmPassword;
        },
        {
            message: "As senhas não coincidem",
        }
    );

export type iUpdateForm = z.infer<typeof updateUserFormSchema>;

