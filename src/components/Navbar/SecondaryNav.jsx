import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const SecondaryNav = ({ change, scrollPosition }) => {
  const { pathname } = useLocation();
  const [subNav, setSubNav] = useState([]);

  const CULT = [
    { name: "Cult Center", path: "/cult/gym" },
    { name: "Gyms", path: "/cult/cult-pass" },
    { name: "Online PT", path: "/cult/online-personal-training" },
    { name: "cultsport", path: "/store/gear" },
    { name: "Luxury Gyms", path: "/cult/othergyms" },
  ];
  const LIVE = [
    { name: "Fitness", path: "/live/fitness" },
    { name: "Mindfulness", path: "/live/mindfulness" },
    { name: "Recipes", path: "/live/recipe" },
  ];
  const CARE = [
    { name: "Online Consult", path: "/care/doctor-consultation" },
    { name: "Lab Tests", path: "/care/diagnostic-tests" },
    { name: "Dietician", path: "/care/dietician" },
  ];
  const EAT = [
    { name: "Order", path: "/eat/eatordernow" },
    { name: "Meal Plans", path: "/eat/subscribe" },
  ];
  const MIND = [
    { name: "Therapy", path: "/mind/therapy" },
    { name: "Mindfulness", path: "/mind/home" },
  ];
  const STORE = [{ name: "cultsport", path: "/store/gear" }];
  useEffect(() => {
    changeCats();
  }, [change]);

  if (pathname === "/") {
    return null;
  }
  function changeCats() {
    setSubNav(
      pathname.startsWith("/cult/")
        ? CULT
        : pathname.startsWith("/live/")
        ? LIVE
        : pathname.startsWith("/care/")
        ? CARE
        : pathname.startsWith("/eat/")
        ? EAT
        : pathname.startsWith("/mind/")
        ? MIND
        : pathname.startsWith("/store/")
        ? STORE
        : []
    );
  }
  const button = {
    cursor: "pointer",
    marginRight: " 20px",
  };
  const activeButton = {
    background: "#1D1D21",
    marginRight: " 20px",
  };

  return (
    <div
      style={{
        background: "#393A3B",
        position: scrollPosition > 35 ? "fixed" : "static",
        transition: "all 2s ease",
        zIndex: "999",
      }}
      className="w-full flex justify-center  top-0"
    >
      <div className="justify-between flex mr-20">
        {subNav.map((N, i) => {
          return (
            <Link key={i + 1} to={N.path}>
              <button
                style={pathname === N.path ? activeButton : button}
                className=" px-6 py-4  my-3 rounded-xl main-font text-gray-300 text-2xl space-x-11 "
              >
                {N.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
