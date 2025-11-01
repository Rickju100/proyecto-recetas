export default function CardCategory({ category }) {
  // Provide default values if categoryType is undefined or null
  const { strCategoryThumb, strCategoryDescription } = category ;

  return (
    <div className="card w-75 m-2" >
       <div className="card-body d-flex flex-column align-items-center">
        <img src={strCategoryThumb} className="card-img-top" alt="Category" />
      
        <p className="card-text">{strCategoryDescription}</p>
      
      </div>
    </div>
  );
}
