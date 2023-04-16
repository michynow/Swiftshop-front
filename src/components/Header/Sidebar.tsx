import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
interface SidebarProps {
  showSidebar: Boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<Boolean>>;
}
export default function Sidebar({
  showSidebar,
  setShowSidebar,
}: SidebarProps) {
  return (
    <>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="overlay w-full h-full fixed top-0 z-20 bg-black  transition-all"
          ></motion.div>
        )}
      </AnimatePresence>
      <aside
        className={`fixed top-0 
        ${
          showSidebar ? "right-0" : "right-[-100%]"
        } bg-slate-100 w-[75%] h-full p-8 shadow-lg border-l-2 border-slate-300 transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-row justify-between">
          Navigation
          <button onClick={() => setShowSidebar(false)}>
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>
      </aside>
    </>
  );
}
