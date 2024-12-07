import Image from "next/image";
import SideBar from "./SideBar";
const ConnectSection = () => {
  return (
    <div className="flex justify-center w-f">
      <section className="bg-gray-50 py-16 w-4/5">
        {/* First Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center py-4 bg-gray-50 w-16 ">
            {/* Highlighted Section */}
            <div className="relative flex flex-col items-center">
              <div className="bg-red-500 w-12 pt-8 rounded-t-lg flex flex-col justify-end items-end ">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center -mb-6">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 30"
                    style={{ enableBackground: "new 0 0 28 30" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
                c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
                C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
                c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
                c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
                c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
                c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
                c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
                C27.9,16.6,27.5,15,26.6,13.9z M21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2
                C21.3,10.2,21.3,10.2,21.3,10.2z M21.3,10.2L21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2z M6,23l0-3h0h2
                v3H6z M16,25h-2h-4v-7h4h2c2.2,0,4,1.6,4,3.5C20,23.4,18.2,25,16,25z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Other Icons */}
            <div className="mt-8 space-y-6 text-gray-400">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  style={{ enableBackground: "new 0 0 30 30" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
                    <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
                    <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
                    <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
                    <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <g>
                    <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
                    <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
                    <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
                    <path
                      d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
        c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
        s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
        c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
        c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
        c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
                    ></path>
                    <path
                      d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
        L10.7,14.3z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path
                    d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
      c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
                  ></path>
                  <g>
                    <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
                  </g>
                  <g>
                    <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
                  </g>
                  <g>
                    <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Connect</h2>
                <p className="text-gray-600">
                  Once connected, Suridata's first mission is discovery:
                  identifying automatically which SaaS platforms are part of
                  your ecosystem and might have an effect on your security
                  posture. Within minutes, Suridata connects to your SaaS
                  applications and is up and running, using out-of-the-box
                  policies to seek out the vulnerabilities hidden underneath
                  your SaaS operations. This seamless onboarding helps you to
                  map out your SaaS Stack and Security Posture easily.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-1.png"
              alt="Laptop Connect"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="flex flex-col items-center py-4 bg-gray-50 w-16 ">
            {/* Highlighted Section */}
            <div className="relative flex flex-col items-center">
              <div className="bg-red-500 w-12 pt-8 rounded-t-lg flex justify-end items-end flex-col gap-3">
                <div className="w-12 h-12  flex items-center justify-center ">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 30"
                    style={{ enableBackground: "new 0 0 28 30" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
                c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
                C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
                c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
                c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
                c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
                c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
                c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
                C27.9,16.6,27.5,15,26.6,13.9z M21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2
                C21.3,10.2,21.3,10.2,21.3,10.2z M21.3,10.2L21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2z M6,23l0-3h0h2
                v3H6z M16,25h-2h-4v-7h4h2c2.2,0,4,1.6,4,3.5C20,23.4,18.2,25,16,25z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center  -mb-6">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    style={{ enableBackground: "new 0 0 30 30" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
                      <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
                      <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
                      <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
                      <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Other Icons */}
            <div className="mt-8 space-y-6 text-gray-400">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <g>
                    <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
                    <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
                    <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
                    <path
                      d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
        c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
        s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
        c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
        c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
        c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
                    ></path>
                    <path
                      d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
        L10.7,14.3z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path
                    d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
      c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
                  ></path>
                  <g>
                    <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
                  </g>
                  <g>
                    <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
                  </g>
                  <g>
                    <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Identify Security Risks
              </h2>
              <p className="text-gray-600">
                Security risks and threats can be buried deep, obscured by
                misconfigurations, access management rules, version changes, and
                even outdated privileges. Suridata digs through the layers to
                map out the interconnections, interdependencies, overlaps and
                oversights to identify where threats can be lying in wait.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-2.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        {/* Third Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="flex flex-col items-center py-4 bg-gray-50 w-16 ">
            {/* Highlighted Section */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="bg-red-500 w-12 pt-8 rounded-t-lg flex justify-end items-center flex-col gap-3">
                <div className="w-12 h-12 flex items-center justify-center ">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 30"
                    style={{ enableBackground: "new 0 0 28 30" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
                c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
                C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
                c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
                c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
                c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
                c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
                c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
                C27.9,16.6,27.5,15,26.6,13.9z M21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2
                C21.3,10.2,21.3,10.2,21.3,10.2z M21.3,10.2L21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2z M6,23l0-3h0h2
                v3H6z M16,25h-2h-4v-7h4h2c2.2,0,4,1.6,4,3.5C20,23.4,18.2,25,16,25z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12  flex items-center justify-center">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    style={{ enableBackground: "new 0 0 30 30" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
                      <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
                      <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
                      <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
                      <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg -mb-6">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
                      <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
                      <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
                      <path
                        d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
        c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
        s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
        c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Other Icons */}
            <div className="mt-8 space-y-6 text-gray-400">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
        c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
        c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
                    ></path>
                    <path
                      d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
        L10.7,14.3z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path
                    d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
      c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
                  ></path>
                  <g>
                    <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
                  </g>
                  <g>
                    <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
                  </g>
                  <g>
                    <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
              Prioritize Risks​
              </h2>
              <p className="text-gray-600">
              Once all SaaS security risks have been identified, the next challenge is deciding where the efforts should be focused. You should evaluate which risks have more impact on business continuity vs. those that are easier to exploit.

Suridata studies your SaaS environment to become your SaaS expert, saving precious time and effort. The result is a comprehensive, prioritized list of actions that guides you to focus on the most critical issues that threaten the foundations of your SaaS environment.​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-3.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        {/* Forth Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="flex flex-col items-center py-4 bg-gray-50 w-16 ">
            {/* Highlighted Section */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="bg-red-500 w-12 pt-8 rounded-t-lg flex justify-end items-center flex-col gap-3">
                <div className="w-12 h-12 flex items-center justify-center ">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 30"
                    style={{ enableBackground: "new 0 0 28 30" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
                c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
                C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
                c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
                c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
                c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
                c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
                c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
                C27.9,16.6,27.5,15,26.6,13.9z M21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2
                C21.3,10.2,21.3,10.2,21.3,10.2z M21.3,10.2L21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2z M6,23l0-3h0h2
                v3H6z M16,25h-2h-4v-7h4h2c2.2,0,4,1.6,4,3.5C20,23.4,18.2,25,16,25z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12  flex items-center justify-center">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    style={{ enableBackground: "new 0 0 30 30" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
                      <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
                      <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
                      <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
                      <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12 flex items-center justify-center ">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
                      <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
                      <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
                      <path
                        d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
        c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
        s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
        c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center -mb-6">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
        c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
        c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
                      ></path>
                      <path
                        d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
        L10.7,14.3z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Other Icons */}
            <div className="mt-8 space-y-6 text-gray-400">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path
                    d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
      c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
                  ></path>
                  <g>
                    <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
                  </g>
                  <g>
                    <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
                  </g>
                  <g>
                    <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
              Evaluate Remediation Effect​​
              </h2>
              <p className="text-gray-600">
              Tackling security risks can jeopardize your business operations by creating errors, failures or User Experience issues. Suridata is able to see through the darkness underneath a complex SaaS application and provide analysis about the potential impact of each remediation effort. This allows you to resolve the risks without disrupting your employees day-to-day work routine. ​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-4.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
        {/* Fifth Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="flex flex-col items-center py-4 bg-gray-50 w-16 ">
            {/* Highlighted Section */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="bg-red-500 w-12 pt-8 rounded-t-lg flex justify-end items-center flex-col gap-3">
                <div className="w-12 h-12 flex items-center justify-center ">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 30"
                    style={{ enableBackground: "new 0 0 28 30" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
                c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
                C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
                c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
                c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
                c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
                c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
                c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
                C27.9,16.6,27.5,15,26.6,13.9z M21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2
                C21.3,10.2,21.3,10.2,21.3,10.2z M21.3,10.2L21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2C21.3,10.2,21.3,10.2,21.3,10.2z M6,23l0-3h0h2
                v3H6z M16,25h-2h-4v-7h4h2c2.2,0,4,1.6,4,3.5C20,23.4,18.2,25,16,25z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12  flex items-center justify-center">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    style={{ enableBackground: "new 0 0 30 30" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
                      <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
                      <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
                      <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
                      <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12 flex items-center justify-center ">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
                      <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
                      <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
                      <path
                        d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
        c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
        s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
        c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12  flex items-center justify-center">
                  <svg
                    className={`home__screenshots-line-ico no-active h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
        c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
        c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
                      ></path>
                      <path
                        d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
        L10.7,14.3z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center -mb-6">
                <svg
                  className={`home__screenshots-line-ico no-active h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path
                    d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
      c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
                  ></path>
                  <g>
                    <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
                  </g>
                  <g>
                    <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
                  </g>
                  <g>
                    <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
                  </g>
                </svg>
              </div>
              </div>
            </div>

            {/* Other Icons */}
            <div className="mt-8 space-y-6 text-gray-400">
            </div>
          </div>
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
              Guide and Remediate​​
              </h2>
              <p className="text-gray-600">
              The process of mitigating security risks involves multiple, parallel efforts from various departments and stakeholders to strengthen your SaaS environment. This requires coordination and constant monitoring. ​Suridata provides guidance on how to remediate, allowing you to create and run workflows that assist your team. Risks are organized into clusters, so alerts can be managed to make sure that only the most critical items are communicated within the pack in order to generate an instantaneous reaction.​


              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-5.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectSection;
