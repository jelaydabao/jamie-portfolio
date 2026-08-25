// Social Links Configuration - uses environment variables only
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/jelaydabao';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/jamie-dabao-69651b305/';
const EMAIL = import.meta.env.VITE_EMAIL || '';

export const socialLinks = {
  // Main social profiles
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  email: EMAIL,
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: GITHUB_URL.replace('https://', ''),
    linkedin: LINKEDIN_URL.replace('https://', ''),
    email: EMAIL,
  }
};

export default socialLinks;