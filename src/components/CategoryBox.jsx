import PropTypes from "prop-types";
import iPadCategoryImage from "/category-ipad.png";
const CategoryBox = ({ title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col items-center">
      <img
        src={iPadCategoryImage}
        alt=""
        className="object-cover rounded-t-xl w-2/4 h-auto"
      />
      <div className="pb-4 w-full">
        <div className="bg-white">
          <h3 className="text-md font-medium text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};
CategoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
export default CategoryBox;
