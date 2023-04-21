import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CategorySelection({
  articles,
  allCategories,
  activeCategory,
  onFilterUpdate,
  onSelectedCategoriesUpdate
}) {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    console.log("Selected categories:", selectedCategories);
    filterArticles(selectedCategories);
    onSelectedCategoriesUpdate(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryChange = (e, categorySlug) => {
    if (e.target.checked) {
      setSelectedCategories(prevSelectedCategories => [
        ...prevSelectedCategories,
        categorySlug
      ]);
    } else {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.filter(slug => slug !== categorySlug)
      );
    }
  };

  const filterArticles = categorySlugs => {
    if (categorySlugs.length === 0 || categorySlugs.includes("all")) {
      onFilterUpdate(articles);
    } else {
      const filtered = articles.filter(article =>
        article.categories.some(category =>
          categorySlugs.includes(category.slug.current)
        )
      );
      onFilterUpdate(filtered);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const getFilterButtonText = () => {
    if (selectedCategories.length === 0) {
      return "Filter Categories";
    }
    const selectedCategoryNames = allCategories
      .filter(category =>
        selectedCategories.includes(category.slug.current)
      )
      .map(category => category.title)
      .join(", ");
    return `Filter: ${selectedCategoryNames}`;
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="absolute top-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {getFilterButtonText()}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {dropdownVisible && (
          <div
            className="z-10 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            style={{ top: "100%", left: 0, marginTop: "4.0rem" }}>
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton">
              {/* dropdown items */}
              {allCategories.map(category => (
                <li key={category.slug.current}>
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${category.slug.current}`}
                      type="checkbox"
                      value={category.slug.current}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={e =>
                        handleCategoryChange(e, category.slug.current)
                      }
                      checked={selectedCategories.includes(
                        category.slug.current
                      )}
                    />
                    <label
                      htmlFor={`checkbox-${category.slug.current}`}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {category.title}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
