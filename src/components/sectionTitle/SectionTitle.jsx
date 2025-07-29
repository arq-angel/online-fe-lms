import style from "./sectionTitle.module.css";

export const SectionTitle = ({ title }) => {
  return (
    <div className={style.titleContainer}>
      <h2>{title}</h2>
      <div className={style.line}></div>
    </div>
  );
};
