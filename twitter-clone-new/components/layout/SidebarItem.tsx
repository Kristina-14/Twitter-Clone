import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

interface SidebarItemProps{
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    const router = useRouter();
    const handleClick = useCallback(() => {
        if(onClick){
            return onClick();
        }
        if(href){
            router.push(href);
        }
    }, [router, onClick, href]);

    return(       
        <div onClick={handleClick} className='flex flex-row items-center'>
        <div className='
        relative
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
        lg:hidden
        '>
            {/* Icons - for mobile view */}
            <Icon size={30} color='white'/>
        </div>
        <div
        className='
        relative
        hidden
        lg:flex
        items-center
        gap-4
        p-4
        rounded-full
        hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer
        '
        >
            {/* Icons and text for the larger views */}
            <Icon size={25} color="white"/>
            <p className="hidden lg:block text-white text-xl">
                {label}
            </p>
        </div>
    </div>
    );
}

export default SidebarItem;