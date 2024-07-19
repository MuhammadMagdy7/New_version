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


const MenuMobile = ({
    setMobileMenu,
}) => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <div key={item.id}>

                            <li className={`hover:text-secondaryColor py-4 px-5 border-b ${pathname === item?.url ? "text-secondaryColor": ""}`}>
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                    </div>
                );
            })}
        </ul>
    );
};

export default MenuMobile;