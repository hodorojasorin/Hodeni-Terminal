import { EduIntro, EduList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="Experience">
      <EduIntro>Here is my experience background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "System Development",
    desc: "Center of Excellence in Computer Science | 2022 - 2026",
  },
];

export default Experience;
