import FeatureV2Data from "@/public/assets/jsonData/feature/FeatureV3Data.json";
import SingleFeatureV2 from './SingleFeatureV2';

const FeatureV2 = () => {
    return (
        <>
            <div className="feature-sec feature-sec-2" id="projects">
                <div className="custom-container">
                    <div className="feature-projects-lists">
                        {FeatureV2Data.map(feature =>
                            <SingleFeatureV2 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;