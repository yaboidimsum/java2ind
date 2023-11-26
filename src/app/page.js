import Image from "next/image";
import Card from "@/components/Card";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#4285F4]">
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-16">
          <h2 className="text-6xl font-bold text-white">DeDiDa Team</h2>
          <p className="max-w-[750px] text-center text-white font-medium text-lg">
            Cheers to the incredible DeDiDa Team! 🌟 Transforming ideas into
            reality, these amazing people are bridging languages, from Javanese
            to Indonesian, and shaping the future. 🚀🌐 Still in development,
            but already rocking the game!
          </p>
          <div className="flex flex-row items-center justify-center gap-24">
            <Card
              image="/img/user.png"
              name="Darren Prasetya"
              title="Lead DL Manager & Researcher"
            />
            <Card
              image="/img/user.png"
              name="Dimas Prihady S."
              title="Web Developer & Researcher"
            />
            <Card
              image="/img/user.png"
              name="Dewangga Dhika D."
              title="Data Provider & Researcher"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Page;
