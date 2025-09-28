import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json";
import SingleFeatureV2, { DataType } from "./SingleFeatureV2";

const FeatureV2 = () => {
  return (
    <div className="feature-sec feature-sec-2" id="projects">
      <div className="custom-container">
        <div className="feature-projects-lists">
          {FeatureV2Data.map((feature: DataType) => (
            <SingleFeatureV2 features={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureV2;
