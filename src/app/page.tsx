import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Lock from "../../public/ProtectFilesDark.svg";
import Magnifier from "../../public/SharedContentDark.svg";
import Collaborate from "../../public/CollaborateDark.svg";
import Manage from "../../public/ManageBusinessDark.svg";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800 ">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox <br />
            <br />
            Storing Everything for you and your business needs. All in one
            place.
          </h1>
          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important dccuments and media, and exprience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="py-20 px-10 bg-[#1E1919]">
        <h1 className="text-center text-4xl text-gray-100">
          What can you do with Dropbox?
        </h1>
        <div className="py-10 lg:flex lg:flex-row max-w-[1400px] lg:gap-10 mx-auto ">
          <div className="flex sm:flex-row gap-10 justify-center lg:w-1/2">
            <div className="text-gray-100 w-1/2">
              <Image className="mb-8" src={Lock} alt="lock" />
              <h2 className="text-bold text-lg mb-5">
                Store and protect your files
              </h2>
              <p>
                Get the storage you and your teams need with security features
                like file recovery, password protection, watermarking and viewer
                history.
              </p>
            </div>
            <div className="text-gray-100 w-1/2">
              <Image className="mb-8" src={Magnifier} alt="lock" />

              <h2 className="text-bold text-lg mb-5">
                Stay in control of shared content
              </h2>
              <p>
                Trackable links show when someone has opened a shared file and
                how long they've engaged with it. Plus, you can turn off access
                for any individual at any time without affecting others'
                permissions.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row justify-center gap-10 pt-10 lg:pt-0 lg:w-1/2">
            <div className="text-gray-100 w-1/2">
              <Image className="mb-8" src={Collaborate} alt="lock" />
              <h2 className="text-bold text-lg mb-5">
                Collaborate on your work
              </h2>
              <p>
                Directly edit PDFs and use video tools to streamline feedback
                and approval proccesses.
              </p>
            </div>
            <div className="text-gray-100 w-1/2">
              <Image className="mb-8" src={Manage} alt="lock" />

              <h2 className="text-bold text-lg mb-5">Manage your business</h2>
              <p>
                Automate manual processess with tools with eSignature templates,
                which let you reuse documents in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
