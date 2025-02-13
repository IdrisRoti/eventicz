import Link from "next/link"

const navlinks = [
    {
        id: 1,
        label: "Events",
        href: "/"
    },
    {
        id: 2,
        label: "My Tickets",
        href: "/"
    },
    {
        id: 3,
        label: "About Project",
        href: "/"
    },
]

const Navlinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 text-lg p-2.5">
        {
            navlinks.map(({id, label,href}) => {
                return (
                    <Link className="text-textGray hover:text-white transition" key={id} href={href}>{label}</Link>
                )
            })
        }
    </nav>
  )
}

export default Navlinks