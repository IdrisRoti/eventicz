import Logo from './Logo'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <header className='max-w-[75rem] mx-auto h-[4.75rem] border border-primary fixed top-6 left-0 right-0 rounded-3xl backdrop-blur-[4] bg-[#05252C66]'>
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