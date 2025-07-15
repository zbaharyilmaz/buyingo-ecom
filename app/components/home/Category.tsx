"use client";
const Category = () => {
  const categoryList= [
    {name: "Electronics", icon: "📱"},
    {name: "Fashion", icon: "👗"},
    {name: "Home & Kitchen", icon: "🏠"},
    {name: "Sports", icon: "⚽"},
    {name: "Books", icon: "📚"},
  ]
  return (
    <div className="flex items-center justify-center gap-3 md:gap-10 my-5 md:my-10">
      {
        categoryList.map((category, index)=>(
          <div key={index} >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </div>
        ))
      }
    </div>
  );
};

export default Category;