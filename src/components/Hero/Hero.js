import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome<br />
        I am Zulikif Folawiyo
      </SectionTitle>
      <SectionText>
        I am Javascript Fullstack software developer with 3 years of experience facilitating cutting-edge engineering solution with a wide range of e-commerce application and technology skills
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/folawiyo-zulikif-476387185'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;