const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const mobssie = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(mobssie)
  }
  return array;
}