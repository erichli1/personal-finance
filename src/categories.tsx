import { AiOutlineShopping } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { CiFries } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";

import { Category } from './types';

export const CATEGORIES: Category[] = [
    {
        id: 0,
        title: '1. Food',
        icon: <CiFries />,
        color: 'green',
    },
    {
        id: 1,
        title: '2. Fun',
        icon: <BsLightningCharge />,
        color: 'teal',
    },
    {
        id: 2,
        title: '3. Shopping',
        icon: <AiOutlineShopping />,
        color: 'cyan',
    },
    {
        id: 3,
        title: '4. Essentials',
        icon: <IoWaterOutline />,
        color: 'cyan'
    },
    {
        id: 4,
        title: '5. Other',
        icon: <BiCategoryAlt />,
        color: 'purple',
    },
];

// export const CATEGORIES: Category[] = [
//     {
//         id: 0,
//         title: '1. Food',
//         icon: <CiFries />,
//         color: 'green',
//     },
//     {
//         id: 1,
//         title: '2. Fun',
//         icon: <BsLightningCharge />,
//         color: 'teal',
//     },
//     {
//         id: 2,
//         title: '3. Shopping',
//         icon: <AiOutlineShopping />,
//         color: 'cyan',
//     },
//     {
//         id: 3,
//         title: '4. Essentials',
//         icon: <IoWaterOutline />,
//         color: 'cyan'
//     },
//     {
//         id: 4,
//         title: '5. Other',
//         icon: <BiCategoryAlt />,
//         color: 'purple',
//     },
// ];