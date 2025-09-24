import bigImg from "../assets/images/big-img.png";

function Summary() {
  return (
    <div className="relative w-full h-72 overflow-hidden">
      <img
        src={bigImg}
        alt="big img of food"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-11/12  bg-[#383838] text-white text-center p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3">
          Delicious food, delivered to you
        </h2>
        <p className="mb-2">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
}

export default Summary;
