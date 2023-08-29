import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-4 m-10">
        <h1 className="text-xl">Pikurate Help Desk</h1>
        <div className="w-full">
        <p className="mt-10"> We're giving our FAQ guide a makeover at the moment. But don't worry, if you come across any issues or have questions, feel free to get in touch with us anytime! </p>
       
        <Link href="/contact" rel="noopener" target="_blank" className="mt-8 inline-block text-l underline hover:text-base hover:text-indigo-500">Contact us</Link>
        </div>
      </div>
    </>
  );
}