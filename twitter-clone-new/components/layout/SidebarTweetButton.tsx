import { useRouter } from 'next/router';
import { FaFeather, FaFeatherAlt } from 'react-icons/fa';
import { FaFeatherPointed } from 'react-icons/fa6';
import useLoginModal from '../../hooks/useLoginModal';

import { useCallback } from 'react';
import { use } from 'react';

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);

    return(
        <div onClick={onClick}>
            <div 
            className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            bg-sky-500
            hover:bg-sky-500
            hover:bg-opacity-80
            transition
            cursor-pointer
            ">
                {/* for the mobile screens */}
              <FaFeatherAlt size={25} color='white'/>  

            </div>             
            {/* larger screens like desktops */}
            <div className='
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition
            '>
                <p className='
                hidden
                lg:block
                text-center
                font-semibold
                text-white
                text-[20px]
                '>
                Post</p>
            </div>
        </div>
    );
}

export default SidebarTweetButton;