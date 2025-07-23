"use client";
const Category = () => {
  const categoryList = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Home & Kitchen", icon: "🏠" },
    { name: "Sports", icon: "⚽" },
    { name: "Books", icon: "📚" },
  ];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-10 overflow-x-auto py-5 md:py-8 px-3 md:px-10">
      {categoryList.map((category, index) => (
        <div
          className="border rounded-full min-w-[120px] text-center flex items-center justify-center cursor-pointer text-brand-textlogo px-4 py-2"
          key={index}>
       {category.name} 
    
        </div>
      ))}
    </div>
  );
};

export default Category;
