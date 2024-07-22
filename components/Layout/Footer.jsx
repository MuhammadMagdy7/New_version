import Link from "next/link";
import { MdEmail, MdHome, MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black relative z-30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-8">
          <div className="mb-6 md:mb-0 space-y-5">
            <h1 className="text-secondaryColor">
              Verison <span className="text-primaryColor">AVI</span>
            </h1>
            {/* IMAGE HERE */}

            <img src="img/logo.png" alt="Logo" className="h-24" />
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between w-full md:w-auto space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-primaryColor font-bold">Pages</h3>
              <ul>
                <li className="mt-2">
                  <Link
                    href="/services"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/portfolio"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-primaryColor font-bold">Resources</h3>
              <ul>
                <li className="mt-2">
                  <a
                    href="https://web.facebook.com/profile.php?id=100063908745776"
                    target="_blank"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://mmego.site/"
                    target="_blank"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    Mmego
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-primaryColor font-bold">Company</h3>
              <ul>
                <li className="mt-2">
                  <Link
                    href="about"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    About
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="contact"
                    className="text-paragraphColor hover:text-gray-50"
                  >
                    Join us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-primaryColor font-bold">Contact Info</h3>
              <ul className="flex flex-col justify-center items-center md:block">
                <li className="mt-2 text-gray-300 flex items-center gap-2">
                  <span>
                    <MdHome />
                  </span>
                  <p>
                    4 st sdat Masr el gdida,
                    <br /> Cairo, Egypt
                  </p>
                </li>
                <li className="mt-2 text-gray-300 flex items-center gap-2">
                  <span>
                    <MdLocalPhone />
                  </span>
                  <p>+201287934393</p>
                </li>
                <li className="mt-2 text-gray-300 flex  items-center gap-2">
                  <span>
                    <MdEmail />
                  </span>
                  <p>Info@version-eg.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between items-center pt-6"> */}
        {/* <div className="flex items-center">
                        <select className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-4">
                            <option>English</option>
                            <option>Arabic</option>
                        </select>
                    </div> */}
        <div className="text-paragraphColor mt-6 md:mt-0 text-center pt-5">
          © 2024 Version AVI, Inc.
          {/* • <a href="#" className="hover:text-gray-50">Privacy</a> • <a href="#" className="hover:text-gray-50">Terms</a> • <a href="#" className="hover:text-gray-50">Sitemap</a> */}
        </div>
        {/* <div className="flex space-x-4 mt-6 md:mt-0">
                        <a href="#" className="text-paragraphColor hover:text-gray-50"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-paragraphColor hover:text-gray-50"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="text-paragraphColor hover:text-gray-50"><i className="fab fa-youtube"></i></a>
                    </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
