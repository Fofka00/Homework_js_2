function getUniqueSortedNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
  
    const sortedUniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
  
    return sortedUniqueNumbers;
  }
  
  const numbers = [5, 2, 8, 5, 1, 9, 2, 4, 1];
  const uniqueSorted = getUniqueSortedNumbers(numbers);
  console.log(uniqueSorted);