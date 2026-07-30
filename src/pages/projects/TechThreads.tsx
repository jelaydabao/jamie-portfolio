import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";

import { ShoppingBag, Smartphone, Palette, Database } from "lucide-react";
import { techthreads } from "../../assets/project_icons";

export default function TechThreads() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={techthreads}
        title="Tech & Threads"
        subtitle="An e-commerce mobile application for fashion and technology products."
        buttonUrl="#"
        buttonText="Coming Soon"
        features={[
          {
            icon: ShoppingBag,
            title: "Online Shopping",
            description:
              "Browse and purchase products through an intuitive interface.",
          },
          {
            icon: Smartphone,
            title: "Mobile Friendly",
            description:
              "Designed for a smooth mobile shopping experience.",
          },
          {
            icon: Palette,
            title: "Modern UI",
            description:
              "Clean and user-friendly interface designed in Figma.",
          },
          {
            icon: Database,
            title: "Product Management",
            description:
              "Organized product listings and categories.",
          },
        ]}
      />

      {/* Add ProjectOverview, TechStack and TechnicalHighlights here */}
    </ProjectLayout>
  );
}