export async function getCategoryData(categiry) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${categiry}`
  );
  return response.json();
}

export async function getLimitedData(limit, skip) {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return response.json();
}

export async function getProductData(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}
