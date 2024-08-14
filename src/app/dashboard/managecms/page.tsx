"use client"
import PageTitle from "@/components/ui/PageTitle";
import Tabs from "@/components/ui/Tabs";

export default function ManageCMS() {
    const tabs = [
        {
            name: 'About Us', title: "About Us", content:
                <>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                </>
        },
        {
            name: 'Terms & Condition', title: "Terms & Condition", content:
                <>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                </>
        },
        {
            name: 'Privacy Policy', title: "Privacy Policy", content:
                <>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                    <br />
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit amet velit porro veniam at odit aut iusto, fugit, dolorem, tenetur perspiciatis maxime aspernatur neque? Debitis consequuntur molestiae delectus reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo error velit tenetur molestias expedita? Necessitatibus harum ea eius quo obcaecati qui asperiores aliquid provident. Ratione eius repudiandae tenetur id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, itaque officia aut dolores at quos facere corrupti quam, consectetur asperiores accusantium deleniti illo nihil tenetur labore quo laudantium quas voluptas!</div>
                </>
        },
    ];
    return (
        <>
            <PageTitle
                title="Manage CMS"
                breadcrumbs={[{ href: "/", label: "Manage CMS", isCurrent: true }]}
            />
            <div className="px-5 py-5">
                <Tabs tabs={tabs} />
            </div>
        </>
    );
}