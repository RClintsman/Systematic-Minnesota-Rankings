import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    {/* <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    /> */}
    {/* change later */}
    <Link href="https://github.com/RClintsman/Systematic-Minnesota-Rankings/tree/TarikDev">
      <Button>Github</Button>
    </Link>
  </Section>
);

export { Banner };
