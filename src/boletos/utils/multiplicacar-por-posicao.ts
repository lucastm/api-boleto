export const multiplicarPorPosicao = (str1: string, str2: string) => {
  if (str1.length !== str2.length) {
    return;
  }
  const results: number[] = [];
  for (let i = 0; i < str1.length; i++) {
    const num1 = parseInt(str1[i]);
    const num2 = parseInt(str2[i]);
    const res = num1 * num2;
    results.push(res);
  }
  return results;
};
