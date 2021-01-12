import Carousel from "../Carousel/Carousel";

export default EvynTesting = () => {
  const testArray = [
    { text: "test 1" },
    {
      image:
        "https://dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg",
    },
    { link: "/test3", text: "test-3" },
    { text: "test 4" },
  ];

  return <Carousel source={testArray} />;
};
