// Sidebar.js
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    window.location.href = '/'
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let userId = JSON.parse(localStorage.getItem("user"))

  let path = [
        {
          name: "Dashboard",
          path: "/",
          svgLogo: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        },
        {
          name: "Wallet",
          path: "/wallet",
          svgLogo: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
        },
        {
          name: "Games",
          path: "/games",
          svgLogo: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
        },

        {
          name: "Refer & Earn",
          path: "/refer&earn",
          svgLogo: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
        },
        {
          name: "Profile",
          path: "/profile",
          svgLogo: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        },
        {
          name: "Support",
          path: "/support",
          svgLogo: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        },
        {
          name: "Legal Terms",
          path: "/term&legal",
          svgLogo: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        },
      ]


  return (
    <>


    <nav className="lg:hidden bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl ">
          <Link to="/user-dashboard">
           <h2><span className='text-blue-600'>Ludo</span>Battle</h2>
          </Link>
        </div>

        {/* Responsive menu button for small screens */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            ) : (
              <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            )}

          </button>
        </div>
      </div>
    </nav>

        <div className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm transition-transform transform ${isMenuOpen ? 'translate-x-0 text-center flex justify-center items-center' : '-translate-x-full'}`}>
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
            <div className="flex items-center justify-center h-14 border-b">
            <div className=" font-bold text-xl ">
                  <Link to="/">
                  <h2><span className='text-blue-600'>Ludo</span>Battle</h2>
                  </Link>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1 ">
                    {path.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-50 text-gray-600 hover:text-blue-700 border-transparent hover:border-blue-500 pr-6 ${activeTab === index ? 'border-blue-500  bg-blue-50 text-blue-700' : ''}`}
                          onClick={() => handleTabClick(index)}
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={link.svgLogo}
                              />
                            </svg>
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}

              </ul>
            </div>
             {/* logout  bottom in sidbar*/}
             <div className="flex justify-center items-center mb-5">

            <button
              onClick={logout}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-2xl pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
            </button>

            </div>
          </div>
        </div>

        {/* Navigation links for larger screens */}
        <div className="lg:block hidden md:flex md:flex-shrink-0 antialiased bg-gray-50 text-gray-800">
          <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full">
            <div className="flex items-center justify-start ml-6 mt-4 h-14 ">
            <div className=" font-bold text-xl ">
              <Link to="/user-dashboard" className='flex justify-center items-center gap-2'>
                <div className='bg-blue-600 py-1 px-2 rounded-xl text-white font-semibold'>
                M
                </div>
              <div>
                <p className='text-[20px]'>Mouris</p>
              </div>
              </Link>
            </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1 ml-4 mr-5">
                    {path.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className={`relative flex flex-row items-center h-11 focus:outline-none rounded-xl hover:text-blue-700 hover:bg-[#f5f7f9] border-transparent pr-6 ${activeTab === index ? 'bg-[#f5f7f9] text-blue-700' : 'text-gray-600'}`}
                          onClick={() => handleTabClick(index)}
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={link.svgLogo}
                              />
                            </svg>
                          </span>
                          
                          <span className={`ml-2 font-semibold hover:text-blue-700  ${activeTab === index ? 'text-blue-700' : 'text-zinc-500'}`}>
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
              </ul>

            </div>
             {/* logout  bottom in sidbar*/}
              <div className="flex justify-center items-center mb-5">

                  <button
                    onClick={logout}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-2xl pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                  </button>

                </div>

          </div>
           {/* Main content */}

            <div className='flex justify-between items-center p-2 bg-white'>
                <div className='ml-[290px]'>
                  <input type="search" name="search" id="" className='py-2 outline-none px-6 w-[400px] rounded-xl bg-[#f5f7f9]' placeholder='Search something...' />
                </div>
              <div className='flex justify-end items-center gap-3 mr-8'>
               
                  <div className='py-2 px-3 bg-[#f5f7f9] rounded-2xl font-semibold flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                  </div>
                  <div className='py-2 px-3 bg-[#f5f7f9] rounded-2xl font-semibold flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                  </div>                                   
                  <div className=''>
                      <img className='size-12' src={userId ? userId?.profile : "https://avatar.iran.liara.run/public/12"} alt="" />
                      
                  </div>
                  
              </div>
           </div>
        </div>


        </>



  );
};

export default Sidebar;