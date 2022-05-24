export const quebrarPorAlgarismos = (arr: number[]) => {
  const results: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 9) {
      const dezena = Math.floor(num / 10);
      results.push(dezena);
    }
    const unidade = num % 10;
    results.push(unidade);
  }
  return results;
};
