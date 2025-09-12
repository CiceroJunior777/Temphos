import style from "./Paragraph.module.css";

type ParagraphProps = {
  children: React.ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <p className={style.paragraph}> {children} </p>;
}
