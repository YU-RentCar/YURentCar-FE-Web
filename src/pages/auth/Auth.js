import Logo from "../../assets/Logo.png";
import Naver from "../../assets/Naver.png";
import Kakao from "../../assets/Kakao.png";

function Auth() {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] h-[100vh] overflow-x-hidden mx-auto">
      <img src={Logo} alt="logo" className="object-contain w-1/3 h-1/5"></img>
      <div className="w-1/3 h-1/5">
        <a href="http:/yurentcar.kro.kr:8080/oauth2/authorization/naver">
          <img
            src={Naver}
            alt="naver"
            className="object-contain w-full h-full"
          ></img>
        </a>
      </div>
      <div className="w-1/3 h-1/5">
        <a href="http:/yurentcar.kro.kr:8080/oauth2/authorization/kakao">
          <img
            src={Kakao}
            alt="kakao"
            className="object-contain w-full h-full"
          ></img>
        </a>
      </div>
    </div>
  );
}

export { Auth };
