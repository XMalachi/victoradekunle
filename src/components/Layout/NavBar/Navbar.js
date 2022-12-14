import React,  {useState} from 'react'
import './Navbar.css'
import { SiAcademia } from "react-icons/si";

const navigation = [
  
  
    {
      name: 'Academia',
      href: 'https://victoraduragbemiadekunle.academia.edu/',
      icon: SiAcademia,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Javascreen1?tab=repositories',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/victor-adekunle/',
      icon: (props) => (
        
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" viewBox="0 0 24 24">
        <path
        clipRule="evenodd"
        fillRule="evenodd"
         d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
         
        </svg>
      ),
      
    },
  
  ]

function Navbar() {
    const [open, setOpen] = useState(false)

    const toggledropdown = () => {
        setOpen(prev => !prev)
    }

    const onChangeHandler = () => {
      setOpen(open)
    }
  return (
    <nav className="bg-slate-200 fixed w-full z-50 box-border top-0 ">
        <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-20">
            <div className="relative flex h-16 items-center justify-between">

                <div className='text-dark text-xl lg:text-2xl text-bold uppercase'>
                    <h1>V. Adekunle</h1>
                </div>



                <div className="hidden lg:flex justify-center space-x-6 md:order-2 lg:mr-16">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} target='_blank' rel='noreferrer' className="text-gray-600 hover:text-gray-400">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>

            
            </div>

        </div>
        
        
        

        <div>
          
          <div>
            <div className="header"></div>
            <input type="checkbox" checked={open} className="openSidebarMenu" id="openSidebarMenu" onChange={onChangeHandler} />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle" onClick={toggledropdown}>
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>

            {open && 
              <div id="sidebarMenu">
              <ul className="sidebarMenuInner">
                <a href='/' onClick={toggledropdown}><li>Victor A. Adekunle<span>Data Scientist</span></li></a>
                <a href="/"  onClick={toggledropdown} className="sidebarContent text-white hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>

                <a href="/portfolio"  onClick={toggledropdown} className="text-blue-500 hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>

                <a href="/about"  onClick={toggledropdown} className="text-white hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>

                <a href="/research"  onClick={toggledropdown} className="text-white hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Research Work</a>
                <a href="/awards"  onClick={toggledropdown} className="text-white hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Awards And Certifications</a>
                <a href="/membership"  onClick={toggledropdown} className="text-white hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Memberships And Recognition.</a>

                <a href="https://www.academia.edu/attachments/95831182/download_file?s=portfolio"
                  onClick={toggledropdown}
                   className="bg-blue-900 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                   Resume
                   
                </a>

                <div className=" flex justify-center space-x-6 md:order-2 pt-10">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} target='_blank' rel='noreferrer' className="text-white hover:text-gray-400">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
              </ul>
            </div>
            
            }
            
          
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar