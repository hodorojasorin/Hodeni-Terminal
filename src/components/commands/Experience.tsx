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
    title: "Upkid Programming School",
    desc: "Dedicated teacher with experience teaching both Python programming and AI fundamentals to students of various ages.",
  },
];

export default Experience;
