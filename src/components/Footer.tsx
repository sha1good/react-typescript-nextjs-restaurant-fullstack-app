
import Link from "next/link"

const Footer = () => {
  return (
    <div className="h-12 mt-60 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex justify-between items-center">
      <Link href="/" className="font-bold text-sm md:text-xl lg:md:text-xl">MASSIMO</Link>
      <p className="text-sm md:text-xl lg:text-xl">© ALL RIGHTS RESERVED.</p>
    </div>
  )
};

export default Footer;
