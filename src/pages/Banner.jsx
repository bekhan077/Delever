
import Img1 from '../../public/assets/img1.png';
import Img2 from '../../public/assets/img2.png';
import Img3 from '../../public/assets/img3.png';
import Img4 from '../../public/assets/img4.png';
import NavImg from "../../public/assets/nav.png";


const Banner = () => {
  return (
    <div className="mx-3 my-5  bg-white p-5 rounded-lg">
      <div className="border rounded-lg">
        <div className="flex justify-between py-5 pl-3 pr-20">
          <div className="flex gap-6">
            <h1 className="font-medium">Изображение</h1>
            <h1 className="font-medium">Hазвание на узбекском</h1>
          </div>
          <h1 className="font-medium">Hазвание на русском</h1>
          <h1 className="font-medium mr-10">Статус</h1>
        </div>
        <hr />
        <div className="flex justify-between items-center pl-5 cursor-pointer">
          <div className="flex items-center gap-20 py-2">
            <img src={Img1} alt="img1" />
            <h1>Баннер 1</h1>
          </div>
          <h1 className="ml-32">Баннер 1</h1>
          <div className="flex gap-4 items-center">
            <button className="px-8 text-[#4094F7] bg-[#e4eeff] rounded-lg">
              Активный
            </button>
            <div className="px-4 shadow-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                  fill="#4094F7"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center pl-5 py-2 cursor-pointer">
          <div className="flex items-center gap-20">
            <img src={Img2} alt="img1" />
            <h1>Баннер 1</h1>
          </div>
          <h1 className="ml-32">Баннер 1</h1>
          <div className="flex gap-4 items-center">
            <button className="px-8 text-[#4094F7] bg-[#e4eeff] rounded-lg">
              Активный
            </button>
            <div className="px-4 shadow-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                  fill="#4094F7"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center pl-5 py-2 cursor-pointer">
          <div className="flex items-center gap-20">
            <img src={Img3} alt="img1" />
            <h1>Баннер 1</h1>
          </div>
          <h1 className="ml-32">Баннер 1</h1>
          <div className="flex gap-4 items-center">
            <button className="px-8 text-[#4094F7] bg-[#e4eeff] rounded-lg">
              Активный
            </button>
            <div className="px-4 shadow-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                  fill="#4094F7"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center pl-5 py-2 cursor-pointer">
          <div className="flex items-center gap-20">
            <img src={Img4} alt="img1" />
            <h1>Баннер 1</h1>
          </div>
          <h1 className="ml-32">Баннер 1</h1>
          <div className="flex gap-4 items-center">
            <button className="px-8 text-[#4094F7] bg-[#e4eeff] rounded-lg">
              Активный
            </button>
            <div className="px-4 shadow-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                  fill="#4094F7"
                />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex justify-end mt-12">
        <img src={NavImg} alt="img" />
      </div>
    </div>
  );
}

export default Banner