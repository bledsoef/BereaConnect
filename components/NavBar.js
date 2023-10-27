import Link from "next/link"
export default function NavBar() {
    return (
    <div className="w-full bg-bereaBlue h-20 flex row-auto items-center text-white">
        <p className="self-center w-1/6 text-3xl m-8 font-semibold">BereaConnect</p>
        <div className="flex row-auto justify-end items-center h-full w-full">
            <Link href={"/findCompany"} className="text-white text-2xl m-8 font-semibold">Find a Company</Link>
            <Link href={"/createProfile"} className="text-white text-2xl m-8 font-semibold">My Profile</Link>

        </div>
</div>)
}