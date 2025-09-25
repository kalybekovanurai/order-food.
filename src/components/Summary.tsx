import bigImg from "../assets/images/big-img.png";

function Summary() {
  return (
    <div
      className="min-h-[400px] bg-center bg-no-repeat bg-cover relative  flex items-center justify-center pt-70"
      style={{ backgroundImage: `url(${bigImg})` }}
    >
      <div className="bg-[#383838] text-white max-w-[853px] m-auto text-center px-[54px]  py-[36px] rounded-3xl  ">
        <h3 className="text-4xl font-bold mt-[28px]">
          Delicious Food, Delivered To You
        </h3>
        <p className="text-[20px] font-weight-[500]">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="text-[20px] font-weight-[500] ] mt-[20px]">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
}

export default Summary;
