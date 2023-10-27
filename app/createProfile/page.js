"use client";
import { Menu } from "@headlessui/react"
import Link from "next/link"
export default function CreateProfile() {
    return (
        <div>
            <input className="flex p-4 rounded text-xl text-black mr-4" placeholder="Full Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Position"/>
            <input type="text" placeholder="Company Name"/>
            <input type="text" placeholder="LinkedIn"/>
            <input type="text" placeholder="Graduation Year"/>
            <select></select>
            <input name="referralBox" type="checkbox"/>
            <label for={"referralBox"} className="text-black">Open to giving referrals?</label>
        </div>
    )
}

// function ReferralDropdown() {
//     return (
//     <Menu>
//       <Menu.Button className={"text-black"}>More</Menu.Button>
//       <Menu.Items>
//         <Menu.Item>
//           {({ active }) => (
//             <Link
//               className={`${active && 'bg-blue-500'} text-black`}
//               href="/account-settings"
//             >
//               Account settings
//             </Link>
//           )}
//         </Menu.Item>
//         <Menu.Item>
//           {({ active }) => (
//             <Link
//               className={`${active && 'bg-blue-500'}`}
//               href="/account-settings"
//             >
//               Documentation
//             </Link>
//           )}
//         </Menu.Item>
//         <Menu.Item disabled>
//           <span className="opacity-75">Invite a friend (coming soon!)</span>
//         </Menu.Item>
//       </Menu.Items>
//     </Menu>
//     )
// }