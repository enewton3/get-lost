import { Suspense, lazy } from "react";

const CarouselStyleDefault = lazy(() => import("./CarouselStyle"));
const CarouselStyleDetail = lazy(() => {
  import("./CarouselDetailStyle");
});

const CarouselStyleWrapper = (props) => {
  const type = props.type || "home";
  const defaultReturn = <CarouselStyleDefault />;
  const detailReturn = <CarouselStyleDetail />;

  const returned = type === "detail" ? detailReturn : defaultReturn;

  console.log(props.children);
  console.log(returned);

  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>{returned}</Suspense>
      {props.children}
    </>
  );
};

export default CarouselStyleWrapper;
