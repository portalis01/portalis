import type { LucideIcon } from "lucide-react";
import { Award, Building2, Trophy, Shield, Sparkles, Lightbulb } from "lucide-react";

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    icon: Award,
    title: "Elite Craftsmanship & Quality",
    desc: "Exceptional workmanship and unwavering adherence to the highest standards, utilizing premium-quality materials.",
  },
  {
    icon: Building2,
    title: "Client-Centric Partnership",
    desc: "Viewing our clients as true partners, working closely to deliver tailored solutions that align with their vision.",
  },
  {
    icon: Trophy,
    title: "Record-Breaking Innovation",
    desc: "Constantly pushing the boundaries of what is possible, including our milestone Guinness World Record achievement.",
  },
  {
    icon: Shield,
    title: "Integrity in Commitments",
    desc: "Consistently honoring our budget and timeline commitments to deliver absolute peace of mind.",
  },
  {
    icon: Sparkles,
    title: "End-to-End Excellence",
    desc: "Owning the entire project lifecycle seamlessly from the initial concept design to final authority clearances.",
  },
  {
    icon: Lightbulb,
    title: "Environmental Stewardship",
    desc: "Prioritizing sustainable methods, materials, and processes to create responsible and beautiful environments.",
  },
];
