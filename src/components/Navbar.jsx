import { Link } from 'react-router-dom';
import logo  from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className='bg-indigo-800 border-b border-indigo-700'>
        <div className="mx-auto max-w-7xt px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 item-center justify-between">
                <div className="flex flex-1 item center justify-center md:item-stretch md:justify-start">
                    <Link to="/" className="flex flex-shrink-0 item-center md:items-stretch md:justify-start">
                        <img  className='h-10 w-auto ' src={logo}/>
                        <span className="md:block text-white text-3xl ml-2">
                           Opportuna
                        </span>
                    </Link>
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <Link to='/'>
                            
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar