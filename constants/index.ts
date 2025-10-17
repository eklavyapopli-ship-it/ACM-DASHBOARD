import { House ,Calendar1 , CircleArrowLeft, Video, Plus, LoaderPinwheel, MessageCircle} from 'lucide-react';
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
        label:"Recordings",
        imgUrl:Video,
        route:"/recordings",
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
