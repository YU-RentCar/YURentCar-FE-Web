import { Outlet } from "react-router-dom";
import { HomeSelectLocation } from "./homeSelectLocation/HomeSelectLocation";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <HomeSelectLocation
          width="w-[1200px]"
          height="h-[calc(100vh-120px)]"
          isFold={false}
        ></HomeSelectLocation>
        <Outlet context={["w-[1200px]"]}></Outlet>
      </div>
    </>
  );
}

export { Home };
