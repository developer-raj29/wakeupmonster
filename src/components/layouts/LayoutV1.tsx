import Footer3 from "../footer/Footer3";
import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

interface DataType {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: DataType) => {
    return (
        <>
            <HeaderV1 />
            {children}
            <Footer3 />
        </>
    );
};

export default LayoutV1;