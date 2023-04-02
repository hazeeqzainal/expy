import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button>
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        </button>
      ) : (
        <div className="fixed top-0 left-0 h-full w-[35vw] bg-teal-600 p-5 duration-300 ease-in-out">
          <button>
            <GiHamburgerMenu
              className="fixed top-4 right-4 p-5 text-white"
              onClick={() => setIsOpen(!isOpen)}
            />
          </button>
          <h2 className="text-2xl text-white">Sidebar</h2>
        </div>
      )}
    </>
  );
}

export default Sidebar;
