import CategoryBox from "./CategoryBox";

const CategoryBoxes = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const fetchedCategories = await getAllCategories();
  //       setCategories(fetchedCategories);
  //     } catch (err) {
  //       console.log(err);
  //       setCategories([]);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  const categories = [
    {
      id: "99088952-c2e3-4783-0cbf-08dcafa605fe",
      name: "Headphone",
    },
    {
      id: "52fd3dbe-05e7-4f5e-bb81-933c446e8c1b",
      name: "iPad",
    },
    {
      id: "6acfe04f-9309-413a-3fbd-08dcafdc921e",
      name: "iPhone",
    },
    {
      id: "f17a42bf-782a-451b-1b89-08dcb56bb3de",
      name: "Keyboard",
    },
    {
      id: "59313fdc-07e5-4bc2-94b0-5c244fd63311",
      name: "Macbook",
    },
    {
      id: "c6a0c487-a8fd-4095-0cc0-08dcafa605fe",
      name: "Mouse",
    },
    {
      id: "141b62eb-3a8a-4f35-51fe-08dcafa3de9f",
      name: "Watch",
    },
  ];

  const gridClass = `grid grid-cols-7 gap-4`; // Limits columns to 4 for better layout
  console.log(gridClass);
  return (
    <section className="px-3 py-6">
      <div className="container-md md:container m-auto">
        <div className={gridClass}>
          {categories.map((category) => (
            <CategoryBox key={category.id} title={category.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBoxes;
