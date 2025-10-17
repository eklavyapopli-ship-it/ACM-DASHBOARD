import { House ,Calendar1 , CircleArrowLeft, Video, Plus, LoaderPinwheel, MessageCircle} from 'lucide-react';
export const sidebarLinks=[
    {
        label:"Home",
        imgUrl:House,
        route:"/",
    },
    {
        label:"Upcoming",
        imgUrl:Calendar1,
        route:"/upcoming",
    },
    {
        label:"Previous",
        imgUrl:CircleArrowLeft,
        route:"/previous",
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
        route:"/personal",
    },
]
