/**
 * Transforma uma string para o formato de inicial maiúscula
 * @param {string} str - A string de entrada.
 * @return {string} A string modificada com o primeiro caractere em maiúsculo.
 */
export default function inicialMaiuscula(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
