import Button from "./UI/Button";


function Header() {
  return (
    <header>
      {/* Верхняя панель */}
      <div className="flex items-center justify-between bg-[#8A2B06] px-8 py-4">
        <h1 className="text-white text-2xl font-bold">ReactMeals</h1>
        <Button className="bg-[#5A1F08] rounded-full px-4 py-2" variant="primary" size="small">
            <div className="flex gap-2">
                <span className="text-white">🛒 Your Cart</span>
          <span className="bg-[#8A2B06] px-3 py-1 rounded-full text-white text-sm">
            7
          </span> 
            </div>
         
        </Button>
      </div>
    </header>
  );
}
export default Header;