export async function getCategoryData(categiry) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${categiry}`
  );
  return response.json();
}
