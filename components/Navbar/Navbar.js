import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

const listItems = [
  {
    name: "Shop",
    link: "#",
  },
  {
    name: "Tokens",
    link: "#",
  },
  {
    name: "Portfolio",
    link: "#",
  },
  {
    name: "Roadmap",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Team",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

function SmallNavbar() {
  return <div></div>;
}

function BigNavbar() {
  const [selected, setSelected] = useState(0);
  return (
    <nav className="px-36 flex justify-between fixed w-full">
      <img className="h-28 py-5" src="/assets/images/navbar_logo.png" />
      <AnimateSharedLayout transition={{ duration: 0.2 }}>
        <ul className="text-white flex w-3/5 justify-between items-center">
          {listItems.map((item, i) => (
            <motion.li
              key={i}
              onClick={() => setSelected(i)}
              animate
              className={`hover:hover-state ${
                i === selected && "text-primary"
              }`}
            >
              {item.name}
              {i === selected && (
                <motion.div
                  layoutId="abc"
                  className={`abc w-full rounded-md h-[2px] bg-primary`}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </AnimateSharedLayout>
    </nav>
  );
}

function Navbar() {
  return (
    <div>
      <BigNavbar />
    </div>
  );
}

export default Navbar;
