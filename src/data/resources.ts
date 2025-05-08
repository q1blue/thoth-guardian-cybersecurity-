import { Resource } from "../types";

const resourcesData: Resource[] = [
  {
    id: "zero-trust-architecture",
    title: "Zero Trust Architecture Implementation Guide",
    type: "Guide",
    category: "architecture",
    description: "A comprehensive guide to implementing Zero Trust security model in your organization.",
    date: "May 2, 2025",
    readTime: "15 min read",
    slug: "zero-trust-architecture-implementation-guide",
    content: `
# Zero Trust Architecture Implementation Guide

## Introduction

In today's rapidly evolving cybersecurity landscape, organizations face increasingly sophisticated threats that can compromise sensitive data and disrupt critical operations. This comprehensive guide explores the essential concepts, implementation strategies, and best practices for enhancing your security posture.

## Key Concepts

Understanding the fundamental principles is crucial before implementing any security solution. This section outlines the core concepts that form the foundation of this approach:

- **Defense in Depth**: Implementing multiple layers of security controls throughout your systems and networks.
- **Principle of Least Privilege**: Providing only the minimum access rights necessary for users to perform their job functions.
- **Continuous Monitoring**: Maintaining constant visibility into your environment to detect and respond to threats in real-time.
- **Security by Design**: Integrating security considerations throughout the development lifecycle rather than adding them afterward.

## Implementation Steps

Follow these key steps to successfully implement this security approach in your organization:

### 1. Assessment & Planning

Begin by conducting a thorough assessment of your current security posture, identifying assets, vulnerabilities, and potential threats. Develop a comprehensive implementation plan that aligns with your organization's goals and risk tolerance.

### 2. Technical Implementation

Deploy the necessary security controls, including network segmentation, access management systems, encryption, and monitoring tools. Ensure proper configuration and integration with existing infrastructure.

### 3. Policy Development

Establish clear policies and procedures that define how security measures will be implemented, maintained, and enforced. Document these policies and ensure they are communicated to all stakeholders.

### 4. Training & Awareness

Develop comprehensive training programs for administrators, users, and management. Foster a security-conscious culture through regular awareness initiatives and clear communication.

### 5. Monitoring & Incident Response

Implement continuous monitoring and establish incident response procedures. Regularly test and refine these processes to ensure effective threat detection and mitigation.

## Conclusion

Successfully implementing robust security measures requires a strategic approach that addresses technical, operational, and human factors. By following the guidance outlined in this resource, organizations can significantly enhance their security posture and better protect against evolving threats.

Remember that security is not a one-time project but an ongoing process that requires continuous improvement and adaptation to address new threats and vulnerabilities.
    `
  },
  {
    id: "owasp-top-10",
    title: "OWASP Top 10 Vulnerabilities Explained",
    type: "Reference",
    category: "application-security",
    description: "Detailed explanations and remediation strategies for the OWASP Top 10 vulnerabilities.",
    date: "Apr 28, 2025",
    readTime: "12 min read",
    slug: "owasp-top-10-vulnerabilities-explained"
  },
  {
    id: "advanced-threat-hunting",
    title: "Advanced Threat Hunting Techniques",
    type: "Tutorial",
    category: "threat-intelligence",
    description: "Learn how to proactively search for threats across your environment using modern techniques.",
    date: "Apr 20, 2025",
    readTime: "18 min read",
    slug: "advanced-threat-hunting-techniques"
  },
  {
    id: "cloud-security-benchmarks",
    title: "Cloud Security Benchmarks & Compliance",
    type: "Guide",
    category: "cloud-security",
    description: "Ensuring your cloud deployments meet industry compliance requirements and security standards.",
    date: "Apr 15, 2025",
    readTime: "10 min read",
    slug: "cloud-security-benchmarks-compliance"
  },
  {
    id: "container-security",
    title: "Container Security Best Practices",
    type: "Guide",
    category: "cloud-security",
    description: "Securing containerized applications and orchestration platforms like Kubernetes.",
    date: "Apr 10, 2025",
    readTime: "15 min read",
    slug: "container-security-best-practices"
  },
  {
    id: "serverless-security",
    title: "Serverless Security Challenges",
    type: "Reference",
    category: "cloud-security",
    description: "Addressing security concerns in serverless computing environments.",
    date: "Apr 5, 2025",
    readTime: "12 min read",
    slug: "serverless-security-challenges"
  },
  {
    id: "casb-implementation",
    title: "Cloud Access Security Brokers (CASBs)",
    type: "Guide",
    category: "cloud-security",
    description: "Understanding and implementing CASBs to secure cloud service usage.",
    date: "Mar 30, 2025",
    readTime: "14 min read",
    slug: "cloud-access-security-brokers"
  }
];

export default resourcesData;

export const getResourceBySlug = (slug: string) => {
  return resourcesData.find(resource => resource.slug === slug);
};

export const getResourcesByCategory = (categoryId: string) => {
  return resourcesData.filter(resource => resource.category === categoryId);
};

export const getLatestResources = (limit = 3) => {
  return [...resourcesData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, limit);
};

export const getResourcesByType = (type: string) => {
  return resourcesData.filter(resource => resource.type === type);
};

export const filterResourcesByOrder = (resources: Resource[], filterType: string) => {
  let filteredResources = [...resources];
  
  switch(filterType) {
    case 'Newest':
      filteredResources.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      break;
    case 'Most Popular':
      // In a real app, this would use view counts or other metrics
      // For now, we'll just use a random order as an example
      filteredResources.sort(() => Math.random() - 0.5);
      break;
    case 'A-Z':
      filteredResources.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }
  
  return filteredResources;
};