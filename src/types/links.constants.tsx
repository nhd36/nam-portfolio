import { IconType } from "react-icons";
import { BiHomeAlt } from 'react-icons/bi';
import { BsPerson} from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import { IoNewspaperOutline } from 'react-icons/io5';

interface ILink {
    title: string;
    path: string;
    icon: IconType;
}

const links: ILink[] = [
    {
        title: "Home",
        path: "/",
        icon: BiHomeAlt
    },
    {
        title: "About",
        path: "/about",
        icon: BsPerson
    },
    {
        title: "Work",
        path: "/work",
        icon: MdOutlineWorkOutline
    },
    {
        title: "Projects",
        path: "/project",
        icon: MdOutlineScreenshotMonitor
    },
    {
        title: "Resume",
        path: "/resume",
        icon: IoNewspaperOutline
    }
]

export default links;