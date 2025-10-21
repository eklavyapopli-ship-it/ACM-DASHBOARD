import { House ,Calendar1 , CircleArrowLeft, Video, Plus, LoaderPinwheel, MessageCircle, GithubIcon} from 'lucide-react';
export const sidebarLinks=[
    {
        label:"Home",
        imgUrl:House,
        route:"/",
    },
    {
        label:"Schedule",
        imgUrl:Calendar1,
        route:"/upcoming",
    },
  
     {
        label:"GitHub",
        imgUrl:GithubIcon,
        route:"/github",
    },
    {
        label:"My Progress",
        imgUrl:LoaderPinwheel,
        route:"/personal",
    },
    {
        label:"Chat Room",
        imgUrl:MessageCircle,
        route:"/chatroom",
    },
   
]
