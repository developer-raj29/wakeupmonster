import { Data } from "@/assets/jsonData/data/data";
import ContactV1 from "@/components/contact/ContactV1";
import FaqV1 from "@/components/faq/FaqV1";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import PartnerV1 from "@/components/partner/PartnerV1";
import TeamV1 from "@/components/team/TeamV1";

export const metadata = {
  title: `${Data.METADATA} - Blogs`,
};

const BlogPage = () => {
  return (
    <>
      <div className="aixor-main about-page">
        <LayoutV3>
          <HeroV2 title="Blogs" />
          <FaqV1 />
          <TeamV1 />
          <ContactV1 />
          <PartnerV1 />
        </LayoutV3>
      </div>
    </>
  );
};

export default BlogPage;
