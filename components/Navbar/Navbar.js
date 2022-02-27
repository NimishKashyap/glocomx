import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HamburgerIcon from "../HamburgerIcon";

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

function SmallNavbar(props) {
  return <HamburgerIcon {...props} />;
}

function BigNavbar() {
  const [selected, setSelected] = useState(0);
  const [open, isOpen] = useState(false);
  return (
    <nav className="px-10 lg:px-36 flex justify-between absolute w-full items-center">
      <img className="h-28 py-5" src="/assets/images/navbar_logo.png" />
      <AnimateSharedLayout transition={{ duration: 0.2 }}>
        <ul className="text-white hidden lg:flex w-3/5 justify-between items-center">
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
      <div className="block lg:hidden" onClick={() => isOpen(true)}>
        <SmallNavbar className="h-8" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl z-10"
          >
            <motion.ul className="flex flex-col justify-center items-center h-full gap-y-10 font-medium text-white z-10">
              {listItems.map((item, i) => (
                <motion.li
                key={i}
                  className="cursor-pointer"
                  onClick={() => isOpen(false)}
                >
                  {item.name}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Navbar() {
  return (
    <>
      <div>
        <BigNavbar />
      </div>
    </>
  );
}

export default Navbar;
