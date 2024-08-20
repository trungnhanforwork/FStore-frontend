const getAllCategories = async () => {
  try {
    // let url = `${API_URL}/categories`;
    // console.log(url);

    const response = await fetch("https://localhost:5001/api/categories", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export { getAllCategories };
