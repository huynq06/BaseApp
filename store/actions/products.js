export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const deleteProduct = prodId =>{
    return{
        type:DELETE_PRODUCT,pid:prodId
    }
}
export const fetchProducts = () => {
    return async dispatch => {
      // any async code you want!
      const response = await fetch(
        'https://rn-complete-guide-6c06b-default-rtdb.firebaseio.com/products.json'
      );
  
      const resData = await response.json();
      const loadedProducts = [];
  
      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            'u1',
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
  
      }
  
      dispatch({ type: SET_PRODUCTS, products: loadedProducts });
    };
  };