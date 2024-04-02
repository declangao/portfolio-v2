import HeroSection from './_components/hero-section';
import ProjectSection from './_components/project-section';
import SkillSection from './_components/skill-section';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section>
        <HeroSection />
      </section>

      <section>
        <SkillSection />
      </section>

      <section>
        <ProjectSection />
      </section>
    </div>
  );
}
