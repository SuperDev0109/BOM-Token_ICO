// import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { BrowserRouter } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import logo from '../Images/logo.png' 

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#About', current: false },
  { name: 'Vision', href: '#Vision', current: false },
  { name: 'Services', href: '#Services', current: false },
  { name: 'Features', href: '#Features', current: false },
  { name: 'Roadmap', href: '#Roadmap', current: false },
  { name: 'Tokenmics', href: '#Tokenmics', current: false },
  { name: 'FAQ', href: '#FAQ', current: false },
]
const userNavigation = [
  { name: 'Contact us', href: '#Contact' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const [selectedNav, setSelectedNav] = useState(0);
  return (
    <>
      
      
       {/* className="md:bg-transparent bg-grayM relative md:absolute left-0 right-0 top-0" */}
      <div className="min-h-full">
        <Disclosure as="nav" className={scroll ? "bg-grayM fixed top-0 left-0 right-0 z-full ease-in duration-100 z-10" : "z-10	md:bg-transparent bg-grayM relative md:absolute left-0 right-0 top-0 ease-in duration-100"}>
          {({ open }) => (
            <>
              <div className={scroll ? "max-w-1400 mx-auto px-4 md:px-0 py-2 md:py-2 ease-in duration-100": "max-w-1400 mx-auto px-4 md:px-0 py-2 md:py-6 ease-in duration-100"}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className={scroll ? "w-8 md:w-10 ease-in duration-100":"w-10 md:w-16 ease-in duration-100"}
                        src={logo}
                        alt="Bom"
                      />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 font-roboto">
                        {navigation.map((item, index) => (
                          <a
                            key={item.name}
                            href={item.href}
                            // className={classNames(
                            //   item.current
                            //     ? ''
                            //     : 'text-white hover:text-blMenu',
                            //   'main-nav px-3 py-2 rounded-md text-sm font-medium'
                            // )}
                            className={`main-nav px-3 py-2 rounded-md text-sm font-medium ${index === selectedNav ? 'text-blMenu nav-active' : 'text-white hover:text-blMenu'}`}
                            onClick={e => {
                                setSelectedNav(index)
                                //let offsetValue = document.getElementById(item.name).offsetTop + 100;
                                
                                let hero = document.getElementById(item.name);
                                e.preventDefault();
                                window.scrollTo(0, hero.offsetTop - 200);
                                hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                                //window.history.pushState("scroll", "scroll", "/".item.name);
                            }}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="text-black hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-sm font-medium ml-4 bgGradient"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}


                    <Disclosure.Button className="bg-burgerClr inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-burgerClr focus:outline-non">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="close block h-6 w-6" aria-hidden="true" />
                        
                      ) : (
                        <MenuIcon className="open block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item, index) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`main-nav block px-3 py-2 rounded-md text-base font-medium ${index === selectedNav ? 'text-blMenu nav-active' : 'text-white hover:text-blMenu'}`}
                            onClick={e => {
                                setSelectedNav(index)
                                let hero = document.getElementById(item.name);
                                e.preventDefault();
                                
                                hero && hero.scrollIntoView({ behavior: "smooth", block: "start", top: 200 });
                                window.history.pushState("scroll", "scroll", "/".item.name);
                            }}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}  
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="inline-block text-black hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-sm font-medium ml-2 bgGradient"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </>
  )
}