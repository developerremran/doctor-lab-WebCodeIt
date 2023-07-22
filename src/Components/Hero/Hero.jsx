
import "./Hero.css";
// import hero from "../../../assets/Hero/Doctor.png";

const Hero = () => {
  return (
    <div className="MainWidth">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-9 items-center">
        <div className="">
          <img className="w-full h-[500px]" src='https://i.ibb.co/q9Zhm7D/Doctor.png' alt="" />
        </div>
        <div className="space-y-5">
          <h4 className="text-[45px] w-[400px] font-semibold">
            Medical Service For Science Medicine
          </h4>
          <p className="text-gray-500 font-medium pb-7">
            Medical to eu nibh vitae est tempor molestie id sed exthe medical
            dignissim maximus ipsum metus re many variations Lorem Ipsum
            availab.
          </p>

          <div className="pl-5">
            <ul className="space-y-8 list-disc">
              <li>
                <span>
                  We are many variations of by injected humour or randok pas
                  Ipsum availab. There
                </span>
              </li>
              <li>
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id
                </span>
              </li>
              <li>
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id
                </span>
              </li>
            </ul>
          </div>

          <button className="hover:bg-black transition duration-700">More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;