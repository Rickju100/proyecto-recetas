export default function CardCategory({ category }) {
  // Provide default values if categoryType is undefined or null
  const { strCategoryThumb, strCategoryDescription } = category ;

  return (
    <div className="card" >
      <img src={strCategoryThumb} className="card-img-top" alt="Category" />
      <div className="card-body">
        <p className="card-text">{strCategoryDescription}</p>
      </div>
    </div>
  );
}
