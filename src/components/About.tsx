
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 75 },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest mb-2">About Me</h2>
        <h3 className="text-3xl font-bold mb-8">Background</h3>
        <div className="mb-12">
          <p className="text-muted-foreground mb-4">
            I'm a passionate developer focused on creating beautiful and functional digital experiences. With a strong foundation in modern web technologies, I bring ideas to life through clean code and intuitive design.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
