import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import SearchBar from "@/components/ui/Searchbar";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon, ViewIcon } from "lucide-react";
import Image from "next/image";
import ManageCustomer from "./managecustomer/page";

export default function Home() {
  return (
    <>
      <ManageCustomer />
    </>
  );
}
