import { Category } from "../types";
import { Shield, Code, Cloud, Brain, AlertTriangle, PenTool as Tool, BookOpen, LayoutGrid } from "lucide-react";

const categoryData: Category[] = [
  {
    id: "network-security",
    title: "Network Security",
    description: "Explore protocols, firewalls, IDS/IPS, and VPN documentation to secure your network infrastructure.",
    slug: "network-security",
    icon: "Shield"
  },
  {
    id: "application-security",
    title: "Application Security",
    description: "Learn about OWASP, secure coding practices, vulnerability management, and penetration testing.",
    slug: "application-security",
    icon: "Code"
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    description: "Discover best practices for securing your cloud infrastructure across different platforms.",
    slug: "cloud-security",
    icon: "Cloud"
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence",
    description: "Stay updated with the latest threats, attack vectors, and defensive strategies.",
    slug: "threat-intelligence",
    icon: "Brain"
  },
  {
    id: "incident-response",
    title: "Incident Response",
    description: "Learn methodologies and best practices for responding to security incidents effectively.",
    slug: "incident-response",
    icon: "AlertTriangle"
  },
  {
    id: "security-tools",
    title: "Security Tools",
    description: "Explore various cybersecurity tools, their use cases, and implementation guides.",
    slug: "security-tools",
    icon: "Tool"
  },
  {
    id: "compliance-governance",
    title: "Compliance & Governance",
    description: "Navigate regulatory requirements and establish effective security governance frameworks.",
    slug: "compliance-governance",
    icon: "BookOpen"
  },
  {
    id: "security-architecture",
    title: "Security Architecture",
    description: "Design secure systems and infrastructure with proven architectural patterns and models.",
    slug: "security-architecture",
    icon: "LayoutGrid"
  }
];

export default categoryData;

export const getCategoryBySlug = (slug: string) => {
  return categoryData.find(category => category.slug === slug);
};

export const getCategoryById = (id: string) => {
  return categoryData.find(category => category.id === id);
};