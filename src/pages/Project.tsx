import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface ProjectProps {}

const Project: FC<ProjectProps> = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const projectDetails = {
    "william.travel": {
      title: "william.travel",
      shortTitle: "w.t",
      description:
        "An AI-assisted travel planning website tailored for group trips, using machine learning to create personalized itineraries and optimize user experience with real-time data and collaborative features.",
      longDescription: `
        william.travel is an innovative travel planning platform that leverages artificial intelligence to create personalized travel experiences. The application is designed to simplify group travel planning by providing smart recommendations and real-time collaboration features.
      `,
      image: "/profile-pic.jpeg",
      github: "https://github.com/WJB3003/william.travel",
      demo: "https://www.william.travel",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "OpenAI API",
      ],
      features: [
        "AI-powered itinerary generation",
        "Real-time collaboration",
        "Budget tracking",
        "Interactive maps",
        "Travel API integration",
      ],
    },
    // "will.fun": {
    //   title: "will.fun",
    //   shortTitle: "w.f",
    //   description:
    //     "A React application featuring a curated collection of simple, ad-free games built with modern web technologies.",
    //   longDescription: `
    //     will.fun is a modern web application that brings classic games to life with a clean, minimalist interface. The platform is designed to provide an ad-free gaming experience with a focus on simplicity and enjoyment.
    //   `,
    //   image: "/profile-pic.jpeg",
    //   github: "https://github.com/WJB3003/will.fun",
    //   demo: "https://www.will.fun",
    //   technologies: [
    //     "React",
    //     "TypeScript",
    //     "TailwindCSS",
    //     "Canvas API",
    //     "IndexedDB",
    //   ],
    //   features: [
    //     "Multiple classic games",
    //     "Offline support",
    //     "High scores system",
    //     "Clean UI/UX",
    //     "Mobile-friendly design",
    //   ],
    // },
    // eleos: {
    //   title: "eleos",
    //   shortTitle: "e",
    //   description:
    //     "A reusable component library built with React, TypeScript, and TailwindCSS.",
    //   longDescription: `
    //     eleos is a comprehensive component library designed to accelerate React application development. It provides a collection of pre-styled, accessible, and customizable components that follow modern design principles.
    //   `,
    //   image: "/profile-pic.jpeg",
    //   github: "https://github.com/WJB3003/eleos",
    //   technologies: [
    //     "React",
    //     "TypeScript",
    //     "TailwindCSS",
    //     "Storybook",
    //     "Jest",
    //     "React Testing Library",
    //   ],
    //   features: [
    //     "Accessible components",
    //     "Theme customization",
    //     "Comprehensive docs",
    //     "TypeScript support",
    //     "Unit testing",
    //   ],
    // },
  };

  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mx-auto min-h-full flex flex-col bg-neutral-200 items-center">
      <div className="w-full mx-auto">
        <Navigation />
      </div>
      <div className="max-w-5xl w-full mx-4 mb-4 text-left">
        <div className="w-full grid gap-4 mt-20">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">
                {project.title}
              </CardTitle>
              <CardDescription className="text-lg">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex gap-2 justify-center">
                {project.demo && (
                  <Button onClick={() => window.open(project.demo, "_blank")}>
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    View Demo
                  </Button>
                )}
                {project.github && (
                  <Button onClick={() => window.open(project.github, "_blank")}>
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    View Source
                  </Button>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Button key={tech} disabled size="sm">
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Database Schema</h3>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">User Cases</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
