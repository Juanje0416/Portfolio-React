import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/portfolio-box";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <CircleImage />
                <div className="flex flex-col justify-center h-full pt-14 overflow-hidden">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                    </h1>

                    <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-4 max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </>
    );
}

export default PortfolioPage;
