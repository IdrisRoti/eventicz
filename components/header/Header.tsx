import Logo from './Logo'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <header className='w-[90vw] max-w-[75rem] mx-auto h-[4.75rem] border border-primary fixed top-6 left-0 right-0 rounded-3xl backdrop-blur-sm bg-[#05252C66] z-[99] font-jeju'>
        <div className="flex items-center justify-between py-3 px-4 h-full">
            <Logo />
            <Navlinks />
            <button className='bg-white rounded-xl px-6 py-4 uppercase flex items-center gap-1 text-textDark'>
              <span className='text-sm md:text-base'>My tickets</span>
            </button>
        </div>
    </header>
  )
}

export default Header