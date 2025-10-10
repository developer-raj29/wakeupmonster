import Footer3 from "../footer/Footer3";
import FooterV1 from "../footer/FooterV1";
import HeaderV3 from "../header/HeaderV3";

interface DataType {
    children?: React.ReactNode;
}

const LayoutV2 = ({ children }: DataType) => {
    return (
        <>
            <HeaderV3 />
            {children}
            <Footer3 />
        </>
    );
};

export default LayoutV2;