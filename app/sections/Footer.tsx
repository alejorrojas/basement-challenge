import Image from "next/image";
import footer from "../../public/home/footer.svg";


const Footer = () => {
  return (
    <footer className="w-full md:px-8 xs:px-4 px-10 pb-5">
      <Image alt="basement footer" className="w-full" src={footer} />
    </footer>
  );
}

export default Footer