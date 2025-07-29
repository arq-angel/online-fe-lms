import { SectionTitle } from "../sectionTitle/SectionTitle";
import { CustomCard } from "../customCard/CustomCard";

export const Recommendation = () => {
  return (
    <div>
      <SectionTitle title="Recommendations for you" />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
