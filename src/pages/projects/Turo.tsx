import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";

import { Users, Calendar, MessageCircle, Shield } from "lucide-react";
import { turo } from "../../assets/project_icons";

export default function Turo() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={turo}
        title="TURO: Mentorship Mobile Application"
        subtitle="A mobile application that connects mentors and mentees."
        buttonText="Download App"
buttonUrl="https://apps.apple.com/ph/app/turo/id6760473404"
        features={[
          {
            icon: Users,
            title: "User Accounts",
            description: "Separate mentor and mentee profiles.",
          },
          {
            icon: Calendar,
            title: "Scheduling",
            description: "Book and manage mentoring sessions.",
          },
          {
            icon: MessageCircle,
            title: "Messaging",
            description: "Communicate directly inside the app.",
          },
          {
            icon: Shield,
            title: "Authentication",
            description: "Secure login and account management.",
          },
        ]}
      />

      {/* Add ProjectOverview, TechStack, and TechnicalHighlights here */}
    </ProjectLayout>
  );
}