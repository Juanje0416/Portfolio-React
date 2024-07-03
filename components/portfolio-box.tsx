import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { title, image, urlGithub, urlDemo } = data;

    return (
        <div className="p-4 border border-teal-50 rounded-xl max-w-xs mx-auto md:max-w-sm">
            <h3 className="mb-4 text-xl text-center">
                {title}
            </h3>
            <div className="border-2 border-white rounded-2xl">
                <Image src={image} alt="Image product" width={200} height={200}
                    className="w-full rounded-2xl h-auto mx-auto"/>
            </div>
            <div className="flex justify-center mt-5">
                <Link href={urlGithub} target="_blank">
                    <button className="px-4 py-2 bg-secondary hover:bg-secondary/65 rounded-lg">
                        Github
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox;
