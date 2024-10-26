import React from "react";
import TeaAvatar from "@/assets/tea_avatar-removebg-preview.png";
import VanjaAvatar from "@/assets/vanja_avatar-removebg-preview.png";
import BorisAvatar from "@/assets/boris-avatar-bg-rmvd.png";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const StaffList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 py-12">
      <div className="flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden">
        <Image
          src={BorisAvatar}
          width={320}
          height={320}
          alt="Boris Backend Developer"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <Link
          href={"https://www.linkedin.com/in/boris-ba%C5%A1i%C4%87-a42a03249/"}
          target="_blank"
        >
          <Linkedin color="white" size={32} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden">
        <Image
          src={TeaAvatar}
          width={320}
          height={320}
          alt="Tea Graphic Designer"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <Link
          href={
            "https://www.linkedin.com/in/tea-ja%C4%87imovi%C4%87-385b24292/"
          }
          target="_blank"
        >
          <Linkedin color="white" size={32} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden">
        <Image
          src={VanjaAvatar}
          width={320}
          height={320}
          alt="Vanja Frontend Developer"
          className="rounded-lg w-[300px] h-[300px]"
        />
        <Link
          href={"https://www.linkedin.com/in/vanja-sukurma-458905250/"}
          target="_blank"
        >
          <Linkedin color="white" size={32} />
        </Link>
      </div>
    </div>
  );
};

export default StaffList;
