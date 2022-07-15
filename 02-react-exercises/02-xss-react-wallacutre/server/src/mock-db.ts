interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

let mockProductList: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Product 1 description",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Product 2 description",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    description: "Product 3 description",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    description: "Product 4 description",
    image: "https://via.placeholder.com/150",
  },
];

export const getProductList = async () => mockProductList;

export const getProduct = async (id: number) => {
  const product = mockProductList.filter((product) => product.id === id);
  return product[0];
};

export const insertProduct = async (newProduct: Product) => {
  mockProductList = [...mockProductList, newProduct];
};

export const deleteProduct = async (id: number) => {
  mockProductList = mockProductList.filter((product) => product.id !== id);
  true;
};
