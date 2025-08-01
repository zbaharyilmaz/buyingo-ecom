import AdminSidebarItem from "./AdminSidebarItem";

const AdminSidebar = () => {
  const adminPanel = [{ name: "Dashboard", url: "/admin " }, { name: "Add Products", url: "/admin/create" }, { name: "Orders", url: "/admin/orders" }];
  return (
    <div className="w-1/5 border-r h-screen">
     <div>
        {adminPanel. map((admin, i)=>{
          <AdminSidebarItem key={i} admin={admin}/>
            
        })}
     </div>
    </div>
  );
};

export default AdminSidebar;
