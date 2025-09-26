import FeatureV3 from "@/components/feature/FeatureV3";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layoutsLayoutV3";

export const metadata = {
    title: "Aixor - Blog"
};

const BlogPage = () => {
    return (
        <>
            <div className="aixor-main blog-page">
                <LayoutV3>
                    <HeroV2 title="Blog Insights" />
                    <FeatureV3 />
                </LayoutV3>
            </div>
        </>
    );
};

export default BlogPage;