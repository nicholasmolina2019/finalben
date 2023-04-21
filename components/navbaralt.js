import React, { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@components/container";
import Link from "next/link";
import Image from "next/image";
import GetImage from "@utils/getImage";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { myLoader } from "@utils/all";
import SearchInput from "./ui/search";

export default function NavbarAlt(props) {
  const menu = [
    {
      label: "Home",
      href: "/"
    },

    {
      label: "Contact",
      href: "/contact"
    },
    ,
    {
      label: "Articles",
      href: "#",
      children: [
        {
          title: "Category Page",
          path: "/category/all"
        },
        {
          title: "Search Page",
          path: "/search?q=life"
        },
        { title: "Archive", path: "/archive" }
      ]
    }
  ];

  return (
    <Container className="!py-0">
      <nav className="my-4">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 lg:flex-nowrap">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <a className="w-28 dark:hidden">
                      {props.logo ? (
                        <Image
                          {...GetImage(props.logo)}
                          alt="Logo"
                          sizes="(max-width: 640px) 100vw, 200px"
                          priority={true}
                        />
                      ) : (
                        <span className="block text-center">
                          Stablo
                        </span>
                      )}
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hidden w-28 dark:block">
                      {props.logoalt ? (
                        <Image
                          {...GetImage(props.logoalt)}
                          alt="Logo"
                          sizes="(max-width: 640px) 100vw, 200px"
                          priority={true}
                        />
                      ) : (
                        <span className="block text-center">
                          Stablo
                        </span>
                      )}
                    </a>
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-col items-center hidden w-full lg:flex lg:flex-row lg:w-auto ">
                    {menu.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.children && item.children.length > 0 ? (
                          <DropdownMenu
                            menu={item}
                            key={index}
                            items={item.children}
                            mobile={props.mobile}
                          />
                        ) : (
                          <Link href={item.href} key={index}>
                            <a
                              className=" py-2 px-5 font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100"
                              target={item.external ? "_blank" : ""}
                              rel={item.external ? "noopener" : ""}>
                              {item.label}
                            </a>
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="hidden lg:block">
                    <form action="/search" method="GET">
                      <SearchInput placeholder="Search Blog" />
                    </form>
                  </div>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-start justify-start order-2 w-full mt-5 -ml-5 lg:hidden">
                  {menu.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={index}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link href={item.href} key={index}>
                          <a
                            className=" py-2 px-5   text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100"
                            target={item.external ? "_blank" : ""}
                            rel={item.external ? "noopener" : ""}>
                            {item.label}
                          </a>
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                  <div className="px-5 mt-2">
                    <form action="/search" method="GET">
                      <SearchInput placeholder="Search Blog" />
                    </form>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 transition-all py-2 px-5  font-medium outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile
                ? "w-full px-4 py-2 text-sm"
                : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="w-4 h-4 mt-0.5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:left-0  focus:outline-none",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"}>
                        <a
                          className={cx(
                            "flex space-x-2 text-sm lg:space-x-4 items-center py-2 px-5",
                            active
                              ? "text-blue-500"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500"
                          )}>
                          <span> {item.title}</span>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
