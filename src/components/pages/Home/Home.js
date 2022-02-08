import { Suspense, lazy } from "react";
const PageTitle = lazy(() => import("../../partials/PageTitle"));
const RevolutionSlider = lazy(() => import("../../partials/RevolutionSlider"));
const Paragraph = lazy(() => import("../../partials/Paragraph"));
const Home = () => {
  const slide = [
    {
      image:
        "https://i.pinimg.com/originals/ba/4d/80/ba4d801db37ad7ba4d455d742d46e680.jpg",
    },
    {
      image: "https://wallpaperaccess.com/full/7445.jpg",
    },
    {
      image:
        "https://www.hdnicewallpapers.com/Walls/Big/Games/Assassins_Creed_Valhalla_Game_4K_Wallpaper.jpg",
    },
  ];
  return (
    <>
      <Suspense fallback="">
        <PageTitle
          image="/assets/images/homebg.jpg"
          backtitle="Game Palace"
          title="Welcome to Game Palace"
          subtitle="Enjoy Playing Game With Us"
        />
      </Suspense>
      <Suspense fallback="">
        <RevolutionSlider slide={slide} />
      </Suspense>

      <Suspense fallback="">
        <Paragraph
          title="About Game Palace"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo vitae officiis voluptatem, modi aliquam excepturi iure temporibus dolor ut. Nulla quisquam pariatur, tenetur et ipsum impedit voluptatibus aperiam laborum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum harum odio quisquam perferendis dolor quaerat facilis voluptatum, illo maxime nostrum mollitia. Repudiandae a blanditiis ducimus iusto? Vel, debitis numquam."
        />
      </Suspense>
    </>
  );
};

export default Home;
