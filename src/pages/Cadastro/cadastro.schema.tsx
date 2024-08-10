import { z } from 'zod';

export const esquemaCadastro = z.object({
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    senha: z.string(),
    senhaVerificada: z.string(),
    termos: z.boolean(),
});