import React from "react";
import styles from "./Products.module.css";
import { useFilterContext } from "../Filter_context";
import { NavLink } from "react-router-dom";
import ProductPrice from "../../helper/ProductPrice";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";
// import { FaCheck } from "react-icons/fa";

function Products() {
  const {
    all_products,
    filter_products,
    gridView,
    setListView,
    setGridView,
    sorting,
    filters: { text, category },
    updateFilterValue,
  } = useFilterContext();

  const [productsData, setProductsData] = useState(filter_products);
  console.log('InitialData', filter_products)
  console.log(productsData)

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["All", ...new Set(newVal)]);
    }
    // console.log(newVal);
  };
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  // console.log(colorsOnlyData);

  const updateCategoryValue = (e) => {
    e.preventDefault();
    let filterData = filter_products.filter((curElem) => {
      if (e.target.value === "All") {
        return curElem.category;
      } else if(e.target.value !== "All") {
        return curElem.category === e.target.value;
      } else {
        return filter_products;
      }
    });
    setProductsData(filterData);
  };

  const updateSearchValue = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    let searchItem = filter_products.filter((curElem) => {
      if (e.target.value != null) {
        return curElem.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    });
    return setProductsData(searchItem);
  };

  const filterColorData = (e) => {
    e.preventDefault();
    let colorItem = filter_products.filter((curElem) => {
      return curElem.colors.includes(e.target.value);
    });
    return setProductsData(colorItem);
  };

  const companyChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "All") {
      return setProductsData(filter_products);
    }
    let companyItem = filter_products?.filter((curElem) => {
      if (e.target.value !== "All") {
        return curElem.company === e.target.value;
      }
    });
    return setProductsData(companyItem);
  };

  // sorting by:
  const sortingBy = (e) => {
    e.preventDefault();
    let newSortData;
    if (e.target.value === "a-z") {
      newSortData = filter_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (e.target.value === "z-a") {
      newSortData = filter_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    } else if (e.target.value === "lowest") {
      const sortingProducts = (a, b) => {
        return a.price - b.price;
      };
      newSortData = filter_products.sort(sortingProducts);
    } else if (e.target.value === "highest") {
      const sortingProducts = (a, b) => {
        return b.price - a.price;
      };
      newSortData = filter_products.sort(sortingProducts);
    }
    return setProductsData(newSortData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.searchBox}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className={styles.searchInput}
              type="text"
              name="text"
              onChange={updateSearchValue}
              placeholder="SEARCH"
            />
          </form>
        </div>
        <div className={styles.categoryFilter}>
          <p className={styles.categText}>Category</p>
          {categoryOnlyData?.map((curElem, index) => {
            return (
              <div key={index}>
                <button
                  className={styles.filterBtn}
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateCategoryValue}
                >
                  {curElem}
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.companyFilter}>
          <p>Company</p>
          <div>
            <form action="#"> 
              <label htmlFor="company"></label>
              <select
                name="company"
                id="company"
                className={styles.sort}
                onChange={companyChangeHandler}
              >
                {companyOnlyData?.map((curElem, index) => {
                  return <option key={index} value={curElem}>{curElem}</option>;
                })}
              </select>
            </form>
          </div>
        </div>
        <div className={styles.colorsFilter}>
          <p>Colors</p>
          <div className={styles.btnBox}>
            {colorsOnlyData?.map((curElem, i) => {
              if (curElem === "All") {
                return (
                  <button
                    key={i}
                    value={curElem}
                    className={styles.allBtn}
                    onClick={(e) => setProductsData(filter_products)}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  value={curElem}
                  style={{ backgroundColor: curElem }}
                  className={styles.colorPicker}
                  onClick={filterColorData}
                >
                  {/* {curElem  ? <FaCheck className={styles.icon} /> : null} */}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.clearFilter}>
          <button
            onClick={(e) => setProductsData(filter_products)}
            className={styles.resetBtn}
          >
            CLEAR FILTER
          </button>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.sorting}>
          <div>
            <button
              onClick={setGridView}
              className={gridView ? styles.active : styles.sortBtn}
            >
              <BsFillGridFill />
            </button>
            <button
              onClick={setListView}
              className={!gridView ? styles.active : styles.sortBtn}
            >
              <BsList />
            </button>
          </div>
          <div className={styles.productCount} style={{ color: "gray", fontWeight: "600" }}>
            {productsData.length} Products Available
          </div>
          <div>
            <form action="#">
              <label htmlFor="sort"></label>
              <select
                name="sort"
                id="sort"
                className={styles.sort}
                onChange={sortingBy}
              >
                <option value="#" disabled></option>
                <option value="lowest">Price(lowest)</option>
                <option value="#" disabled></option>
                <option value="highest">Price(highest)</option>
                <option value="#" disabled></option>
                <option value="a-z">Price(a-z)</option>
                <option value="#" disabled></option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </form>
          </div>
        </div>
        {gridView ? (
          <div className={styles.productsCards}>
            {productsData?.map((curElem, i) => {
              return (
                <NavLink
                  className={styles.itemCard}
                  to={`/singleProduct/${curElem.id}`}
                  key={i}
                >
                  <div className={styles.card}>
                    <div className={styles.img}>
                      <img src={curElem.image} alt={curElem.name} />
                      <div className={styles.overImageText}>
                        {curElem.category}
                      </div>
                    </div>
                    <div className={styles.aboutFeature}>
                      <div>{curElem.name}</div>
                      <div>{<ProductPrice price={curElem.price} />}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <div className={styles.listCards}>
            {productsData?.map((curElem, i) => {
              return (
                <div key={i} className={styles.listCard}>
                  <div className={styles.listImgDiv}>
                    <img
                      className={styles.listImg}
                      src={curElem.image}
                      alt={curElem.name}
                    />
                  </div>
                  <div className={styles.listDetail}>
                    <p className={styles.listName}>{curElem.name}</p>
                    <div style={{ marginTop: "-16px" }}>
                      {<ProductPrice price={curElem.price} />}
                    </div>
                    <p className={styles.desc} style={{ marginTop: "3px" }}>
                      {curElem.description.slice(0, 90)}...
                    </p>
                    <NavLink to={`/singleProduct/${curElem.id}`}>
                      <button className={styles.readBtn}>READ MORE</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
