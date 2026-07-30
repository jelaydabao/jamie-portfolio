import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { BookOpen, Search, Library, Layout } from "lucide-react";
import { mangaverse } from "../../assets/project_icons";

export default function MangaVerse() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={mangaverse}
        title="MangaVerse"
        subtitle="A UI/UX prototype for an online manga reading platform."
        buttonText="View Prototype"
        buttonUrl="https://www.figma.com/proto/Q1V3kqwqmUE6dejcYeTn38/MANGAVERSE-PROTOTYPE?node-id=283-1625&p=f&t=xCX2KwX5XDtTWiXZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=285%3A2486&show-proto-sidebar=1"
        features={[
          {
            icon: BookOpen,
            title: "Read Manga",
            description: "Browse and read manga through an organized library.",
          },
          {
            icon: Search,
            title: "Smart Search",
            description: "Quickly search manga titles and genres.",
          },
          {
            icon: Library,
            title: "Bookmarks",
            description: "Save favorite manga for later reading.",
          },
          {
            icon: Layout,
            title: "Modern Interface",
            description: "Designed with accessibility and usability in mind.",
          },
        ]}
      />

      {/* Add ProjectOverview, TechStack and TechnicalHighlights here */}
    </ProjectLayout>
  );
}