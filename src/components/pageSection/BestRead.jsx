import { SectionTitle } from "../sectionTitle/SectionTitle";
import { CustomCard } from "../customCard/CustomCard";

export const BestRead = () => {
  return (
    <div>
      <SectionTitle title="Best Reads" />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
