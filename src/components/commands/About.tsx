import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Arseni Sorin Hodoroja</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a student at the Center of Excellence in Computer Science, meanwhile a full-stack developer</HighlightAlt> based in Chișinău,
        Republic of Moldova.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.<br />
        I am also passionate about videography.

      </p>
    </AboutWrapper>
  );
};

export default About;
