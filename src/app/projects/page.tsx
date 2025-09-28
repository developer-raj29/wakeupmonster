import ContactV1 from "@/components/contact/ContactV1";
import FaqV1 from "@/components/faq/FaqV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PartnerV1 from "@/components/partner/PartnerV1";
import { Data } from "@/assets/jsonData/data/data";

export const metadata = {
  title: `${Data.METADATA} Projects`,
};

const ProjectsPage = () => {
  return (
    <>
      <div className="aixor-main projects-page">
        <LayoutV3>
          <HeroV2 title="Features Projects" />
          swsssssssssssssss
          <FeatureV2 />
          <FaqV1 />
          <ContactV1 />
          <PartnerV1 />
        </LayoutV3>
      </div>
    </>
  );
};

export default ProjectsPage;
