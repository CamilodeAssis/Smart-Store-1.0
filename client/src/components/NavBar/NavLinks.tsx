import { Link } from "react-router-dom";

export const NavLinks = () => {
  const options = [
    {
      name: "DEPARTAMENTOS",
      submenu: true,
      sublink: [
        { name: "HARDWARE", link: "/hardware" },
        { name: "PERIFÉRICOS", link: "/perifericos" },
        { name: "GAMES", link: "/games" },
        { name: "CONSOLES", link: "/consoles" },
      ],
    },
    { name: "NOVIDADES" },
    { name: "PROMOÇÕES" },
  ];

  return (
    <>
      {options &&
        options.map((options, index) => (
          <div key={index} className=" ">
            <div className="  text-white cursor-pointer group h-auto w-full ">
              <div className="p-2 hover:bg-orange-400 w-full text-[10px] md:text-base ">{options.name}</div>
              {options.submenu && (
                <div>
                  <div className="absolute top-[120px] z-10 hidden  group-hover:block hover:block">
                    <div className=" ">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-orange-500 rotate-45 rounded -z-10 "></div>
                    </div>
                    <div className="bg-orange-500 z-20 w-56 drop-shadow-md rounded ">
                      {options.sublink.map((sublink, index) => (
                        <div key={index} className="">
                          <Link className="" to={sublink.link}>
                            <li className="my-2.5 list-none text-white p-2 w-full hover:bg-orange-400 ">
                              {sublink.name}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
};
