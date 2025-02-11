import Image from "next/image"

const Logo = () => {
  return (
    <Image
        src="/logo.png"
        alt="ticz logo"
        width={92}
        height={36}
    />
  )
}

export default Logo