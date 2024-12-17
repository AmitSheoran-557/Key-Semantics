import CustomButton from "./CustomButton";

function Header() {
    return (
        <nav className="flex lg:flex-col w-full justify-between items-center px-4 max-sm:px-3 relative z-50">
            <div className="flex justify-between xl:pb-[198px] lg:pb-40 md:pb-32 sm:pb-16 pb-10 items-center xl:pt-12 lg:pt-10 md:pt-8 pt-4 w-full max-w-[1200px]">
                <a href="/"><img className="lg:max-w-[248px] md:max-w-52 max-w-40 max-h-10 w-full" src="./assets/image/png/page-logo.png" alt="page-logo" /></a>
                <CustomButton tittle="Request a demo" className="!px-3 lg:!py-3 sm:!py-2 !py-1 lg:max-w-[146px] max-w-max" />
            </div>
        </nav>
    );
}

export default Header;
