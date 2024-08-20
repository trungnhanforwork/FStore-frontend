import iPhoneImage from "/iphone-image.png";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-2 relative flex flex-col items-center">
      <img
        src={iPhoneImage}
        alt=""
        className="object-cover rounded-t-xl w-1/3 h-auto"
      />
      <div className="p-4">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">iPhone 15 Pro Max</h3>
        </div>

        <div className="border border-gray-100 mb-5"></div>
        <div className="flex justify-center gap-4 text-gray-500 mb-4"></div>
      </div>
    </div>
  );
};

export default ProductCard;
