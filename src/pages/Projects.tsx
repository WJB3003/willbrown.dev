import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "william.travel",
      shortTitle: "w.t",
      description:
        "An AI-assisted travel planning website tailored for group trips, using machine learning to create personalized itineraries and optimize user experience with real-time data and collaborative features.",
      image: "/profile-pic.jpeg",
      github: "https://github.com/WJB3003/william.travel",
      demo: "https://www.william.travel",
      moreInfo: "/project/william.travel",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "AWS",
      ],
    },
    {
      title: "will.fun",
      shortTitle: "w.f",
      description:
        "A React application featuring a curated collection of simple, ad-free games built with modern web technologies.",
      image: "/profile-pic.jpeg",
      github: "https://github.com/WJB3003/will.fun",
      demo: "https://www.will.fun",
      moreInfo: "/project/will.fun",
      technologies: ["React", "TypeScript", "TailwindCSS"],
    },
    // {
    //   title: "eleos",
    //   shortTitle: "e",
    //   description:
    //     "A reusable component library built with React, TypeScript, and TailwindCSS. It provides a set of pre-styled components that can be used to build consistent and efficient user interfaces.",
    //   image: "/profile-pic.jpeg",
    //   github: "https://github.com/WJB3003/eleos",
    //   moreInfo: "/project/eleos",
    //   technologies: ["React", "TypeScript", "TailwindCSS"],
    // },
  ];

  return (
    <div className="mx-auto min-h-full flex flex-col bg-neutral-200 items-center justify-center">
      <div className="w-full mx-auto">
        <Navigation />
      </div>
      <div className="max-w-5xl mx-4 sm:mt-20">
        <div className="grid gap-4">
          {projects.map((project) => (
            <Card>
              <CardContent className="grid grid-cols-5 sm:grid-cols-1 gap-4 p-4">
                <div className="w-full h-full col-span-1 justify-center">
                  <div className="w-full bg-neutral-200 content-center aspect-square text-8xl font-thin rounded-lg">
                    {project.shortTitle}
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-1 text-left">
                  <CardTitle className="text-2xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-md">
                    {project.description}
                  </CardDescription>
                  <div>
                    <div className="text-lg font-bold">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Button disabled size="sm">
                          {technology}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2 justify-center">
                  {project.demo && (
                    <Button onClick={() => window.open(project.demo, "_blank")}>
                      <FontAwesomeIcon icon={faPlay} />
                      Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Github
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
