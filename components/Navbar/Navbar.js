import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CancelIcon from "../CancelIcon";
import HamburgerIcon from "../HamburgerIcon";

const listItems = [
  {
    name: "Tokens",
    link: "#token",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "Roadmap",
    link: "#roadmap",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
  {
    name: "Team",
    link: "#team",
  },
  {
    name: "Contact",
    link: "#contact",
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
      <img className="h-24 pt-5" src="/assets/images/glocomx-logo.png" />
      <AnimateSharedLayout transition={{ duration: 0.2 }}>
        <ul className="text-white hidden lg:flex w-3/5 justify-between items-center">
          {listItems.map((item, i) => (
            <motion.li
              key={i}
              animate
              onClick={() => {
                setSelected(i);
                window.location.replace(item.link);
              }}
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
            <motion.ul className="flex flex-col justify-center items-center h-full gap-y-10 font-medium text-white z-10 relative">
              {listItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="cursor-pointer"
                  onClick={() => {
                    window.location.replace(item.link);
                    isOpen(false);
                  }}
                >
                  {item.name}
                </motion.li>
              ))}
              <motion.div
                onClick={() => isOpen(false)}
                animate
                className="w-8 opacity-70 absolute top-[30px] right-[30px]"
              > 
                <CancelIcon />
              </motion.div>
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
