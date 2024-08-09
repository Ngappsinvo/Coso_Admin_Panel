import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-[200px]">
            <button className="p-2 text-blue hover:bg-gray-200">
                <Search className="h-5 w-5 text-primary" />
            </button>
            <input
                type="text"
                placeholder="Search your name"
                className="w-full p-2 outline-none text-sm placeholder:text-xs placeholder:font-semibold"
            />
        </div>
    );
}