"use client";

import Link from "next/link";

import logo from "../assets/BI_color.png";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		console.log(isMenuOpen);
	};

	

	return (
		<nav className="mt-2 border-b font-sans">
			<div className="flex flex-row items-center justify-between mx-12">
				<div className="text-blue-900 flex flex-row items-center md:ml-5 font-sans">
					<Link href="/" className=" flex flow-row items-center gap-3 ">
						<Image src={logo} className="mb-2 w-10" alt="Pikurate Logo" />
						<p>Pikurate Helpdesk</p>
					</Link>
				</div>
				<ul className="flex justify-end">
					<div className=" mr-5 hidden md:flex items-center">
						<Link className="mr-5 hidden md:flex text-blue-900" href="/blog">
							Contact us
						</Link>
						
						
					</div>
				</ul>
				<div className="md:hidden mr-5">
					<button type="button" onClick={handleMenu}>
						<AiOutlineMenu size={30} />
					</button>
				</div>
				{isMenuOpen ? (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<Link href="/contact">Contact us</Link>
						</div>
					</div>
				) : null}
			</div>
		</nav>
	);
};

export default Header;