import { useRouter } from "next/router";
import { BsTwitter, BsTwitterX } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div 
        onClick={() =>router.push('/')}
        className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-sky-500
        hover:bg-opacity-10
        cursor-pointer
        transition
        ">
           <BsTwitterX size={30} color="white" />
        </div>
    )
}

export default SidebarLogo;