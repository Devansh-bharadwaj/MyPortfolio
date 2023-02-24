const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };
    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log(sort_value);
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];
      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sorting_value === "sort by") {
        const sortingProducts = () => {
          return action.payload;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      // console.log(all_products);
      let tempFilterProduct = [...all_products];
      
      // console.log(tempFilterProduct);
      const { text, category } = state.filters;
      if(text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          // console.log(curElem.name)
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if(category) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      // console.log(tempFilterProduct)
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

     

    default:
      return state;
  }
};

export default FilterReducer;
