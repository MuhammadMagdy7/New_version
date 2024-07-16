'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [    
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Services", url: "/services" },
    { id: 4, name: "Customers", url: "/customers" },
    { id: 5, name: "Portfolio", url: "/portfolio" },
    { id: 6, name: "Contact", url: "/contact" },
];


const Menu = () => {
    const pathname = usePathname();
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <div key={item.id}>
                            <li className={`cursor-pointer ${pathname === item?.url ? "text-primaryColor": ""}  `}>
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                    </div>
                );
            })}
        </ul>
    );
};

export default Menu;