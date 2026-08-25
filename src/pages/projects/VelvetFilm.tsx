import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";

import { Camera, Layout, Image, Palette } from "lucide-react";
import { velvetfilm } from "../../assets/project_icons";

export default function VelvetFilm() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={velvetfilm}
        title="velvet & film"
        subtitle={
          "a vintage-inspired photobooth i made out of boredom ♡ with 4 layouts to choose from, customizable photo strips, cute filters, stickers, and all the little details to make every photobooth session feel a little more special 🎞️🍒"
        }
        buttonText="Live Demo"
        buttonUrl="https://velvet-film-gj76.vercel.app/"
        features={[
          {
            icon: Camera,
            title: "Multiple Layouts",
            description: "Four vintage-inspired layouts to choose from for each session.",
          },
          {
            icon: Layout,
            title: "Custom Strips",
            description: "Create and download customizable photo strips with ease.",
          },
          {
            icon: Image,
            title: "Cute Filters & Stickers",
            description: "A selection of nostalgic filters and playful stickers.",
          },
          {
            icon: Palette,
            title: "All the Little Details",
            description: "Thoughtful UI touches to make sessions feel special.",
          },
        ]}
      />

      {/* Optionally add ProjectOverview, TechStack and TechnicalHighlights here */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-base mb-6">
          made because i love taking photobooth pics and thought, why not make my own? &lt;33
        </p>

        <h3 className="text-xl font-medium mb-2">Tech Stack</h3>
        <p className="text-sm mb-6">Next.js, React, Tailwind CSS, PostCSS</p>

        <a
          href="https://velvet-film-gj76.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
          style={{ backgroundColor: '#F9E4F7', color: '#7C1D6F' }}
        >
          Live Demo
        </a>
      </div>
    </ProjectLayout>
  );
}
