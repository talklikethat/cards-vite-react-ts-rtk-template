/**
 * Cut text by length and add '...' in end
 * @param text income string
 * @param length length for cutting
 */
export const cutTextByLength = (text: string, length: number): string => {
    return text.substr(0, length) + '...';
};
