import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import codeforce from "../assets/codeforce.png";
import Kickstart from "../assets/Kickstart.png";

export default function CP() {
  const data = [
    {
      title: "Expert at Codeforces",
      image: codeforce,
    },
    {
      title: "Ranked in Top 700 Google Kickstart Round H",
      image: Kickstart,
    },
  ];
  return (
    <div id="CP" className="bg-black text-white">
      <div className="pt-16 flex flex-col gap-20">
        <div className="text-4xl text-center ">Competitve Programming</div>
        <div className="flex justify-center">
          <div className="h-[700px] w-[940px]">
            <AwesomeSlider>
              {data.map((item, index) => (
                <div className="py-10 h-full w-full">
                  <div className="text-center text-3xl">{item.title}</div>
                  <div className="py-10 px-10">
                    <img src={item.image} />
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
