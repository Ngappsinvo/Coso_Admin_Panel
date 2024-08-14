"use client"
import PageTitle from "@/components/ui/PageTitle";

export default function ManageSetting() {
    return (
        <>
            <PageTitle
                title="Manage CMS"
                breadcrumbs={[{ href: "/", label: "Manage CMS", isCurrent: true }]}
            />
            <div className="px-5 py-5 pt-20">
                <div className="border p-5 rounded-lg">
                    <span className="text-md font-semibold">Manage Setting</span>
                </div>
            </div>
        </>
    );
}