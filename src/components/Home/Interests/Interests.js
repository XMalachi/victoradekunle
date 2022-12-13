
import {
    AcademicCapIcon,
} from '@heroicons/react/outline'

import {HiOutlineCloud, HiOutlineChat, HiMap} from 'react-icons/hi'  
import {MdPhonelink, MdAssessment} from 'react-icons/md'  

  const actions = [
    {
        title: 'Cloud Computing',
        //   HiOutlineCloud
        icon: HiOutlineCloud,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'NLP',
        href: '#',
        icon: HiOutlineChat,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Machine Learning',
        //   UsersIcon
        icon: AcademicCapIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    
    {
        title: 'Parallel Computing',
        
        icon: HiMap,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: 'Collaboration',
        
        icon: MdPhonelink,
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
    },
    {
        title: 'Data Analytics',
        
        icon: MdAssessment,
        iconForeground: 'text-fuchsia-700',
        iconBackground: 'bg-fuchsia-50',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function Interests() {
    return (
      <div className="p-2 py-24 lg:py-32 lg:p-12 rounded-lg  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0">
        
        <div className='text-center pt-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Areas Of Interest
            </h2>
            <p className='p-6 text-blue-800'>
                Take a look at some of the things I love working on.
            </p>
        </div>
        
        <div className=" rounded-lg  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}


            className='relative group bg-white p-6 hover:ring-2 hover:ring-inset hover:ring-indigo-500 cursor-pointer'
            // className={classNames(
            //   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            //   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            //   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            //   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            //   'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            // )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <div className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </div>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                quo et molestiae.
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
        </div>
        
      </div>
    )
  }

  export default Interests