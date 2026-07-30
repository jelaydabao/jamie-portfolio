import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { BarChart3, TrendingUp, Database, PieChart } from "lucide-react";
import { bi } from "../../assets/project_icons";

export default function BusinessIntelligence() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={bi}
        title="Year-Over-Year Growth Analysis of Restaurant Sales Patterns and Visualization"
        subtitle="A Business Intelligence research project using Power BI to analyze restaurant sales trends."
        buttonText="Read Research"
        buttonUrl="https://www.researchgate.net/publication/392270745_Year-Over-Year_Growth_Analysis_of_Restaurant_Sales_Patterns_and_Visualization"
        features={[
          {
            icon: BarChart3,
            title: "Interactive Dashboards",
            description: "Built Power BI dashboards for business reporting.",
          },
          {
            icon: TrendingUp,
            title: "Year-over-Year Analysis",
            description: "Analyzed restaurant sales growth across multiple years.",
          },
          {
            icon: Database,
            title: "Data Processing",
            description: "Prepared and transformed sales data for analysis.",
          },
          {
            icon: PieChart,
            title: "Business Insights",
            description: "Visualized trends to support strategic decision-making.",
          },
        ]}
      />

      {/* Add ProjectOverview, TechStack and TechnicalHighlights here */}
    </ProjectLayout>
  );
}