import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="text-center py-10">
      <h2 className="text-[#737373] font-bold text-[16px] mt-5">WHAT WE DO</h2>
      <h1 className="text-[58px] font-bold mt-3 text-[#252B42]">
        Innovation tailored for you
      </h1>
      <p className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
        <span className="text-[#737373]">Team</span>
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {/* First Image taking 2x2 space */}
        <div className="col-span-2 row-span-2 transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/team1.png"
            alt="team"
            height={530}
            width={700}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Remaining Images */}
        <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/team2.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/team3.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/team4.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/team5.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
