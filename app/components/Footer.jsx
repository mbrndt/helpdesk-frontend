import React from "react";
import logo from "../assets/BI_color.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="border-t flex justify-around ">
			<div className="flex gap-20 mx-10 sm:mx-0 mt-4 mb-4 flex-wrap">
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">Pikurate</div>
					<div className="text-sm">© 2023 Pikurate</div>
					<div className="text-sm">All Rights Reserved</div>
					{/* <Image src={logo} alt="Pikurate Logo" width={100} height={100} /> */}
				</div>
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">About</div>
					<Link
						href="./about"
						className="text-sm hover:text-base hover:text-blue-600"
					>
						About
					</Link>
					<Link
						href="https://help.pikurate.com/hc/en-us/requests/new?_gl=1*4eywwv*_ga*MTQ1MDg2Mjg5MC4xNjgzNDQ1Nzgy*_ga_14JRT1ZRE5*MTY4NjE4NjQxNy4zNC4xLjE2ODYxODY0NTguMTkuMC4w"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-indigo-500"
					>
						Contact
					</Link>
					<Link
						href="https://www.wanted.co.kr/company/14534"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-violet-500"
					>
						Careers
					</Link>
				</div>
				<div className="flex flex-col gap-3 ">
					<div className="text-blue-600 font-bold font-sans">Legal</div>
					<Link
						href="https://www.pikurate.com/privacy"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-blue-600"
					>
						Privacy Policy
					</Link>
					<Link
						href="https://www.pikurate.com/agreement"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-indigo-500"
					>
						Terms of Service
					</Link>
				</div>
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">Social</div>
					<Link
						href="https://www.facebook.com/pikurate/"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-blue-600"
					>
						Facebook
					</Link>
					<Link
						href="https://twitter.com/pikurate"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-indigo-500"
					>
						Twitter
					</Link>
					<Link
						href="https://www.instagram.com/pikurate/?hl=en"
						rel="noopener"
						target="_blank"
						className="text-sm hover:text-base hover:text-violet-500"
					>
						Instagram
					</Link>
				</div>
			</div>
		</div>
	);
};