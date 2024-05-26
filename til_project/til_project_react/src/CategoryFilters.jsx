import CATEGORIES from "../utilities/categories";

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category"><button className="btn btn-all-categories">All</button></li>
        {CATEGORIES.map((category) => (
          <li className="category" key={category.name}>
            <button className="btn btn-category"
            style={{ backgroundColor: category.color }}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;