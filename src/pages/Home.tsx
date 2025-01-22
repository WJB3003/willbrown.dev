import Navigation from "@/components/Navigation";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Home = () => {
  return (
    <div className="mx-auto min-h-full flex flex-col bg-neutral-200">
      <Navigation />
      <div className="max-w-5xl relative flex self-center items-center justify-center mt-20 mx-4">
        <div className="text-center content-end text-shadow-xl w-full grid gap-12">
          <div className="h-full grid grid-cols-3 sm:grid-cols-1 gap-12">
            <Card className="col-span-1 border-none animate-in fade-in-2 slide-in-from-top-1/2 duration-700">
              <img
                src="/profile-pic.jpeg"
                className="w-full h-full object-cover aspect-square rounded-lg"
                alt="home cover"
              />
            </Card>
            <Card className="col-span-2 sm:col-span-1 py-16 sm:py-4 content-center animate-in fade-in-2 slide-in-from-top-1/2 duration-700">
              <CardHeader>
                <CardTitle className="text-5xl font-bold">
                  William Brown
                </CardTitle>
              </CardHeader>
              <CardContent className="px-12">
                <div className="text-2xl font-thin mb-6">Software Engineer</div>
                <Button
                  className="sm:w-full"
                  onClick={() => (window.location.href = "/projects")}
                >
                  View My Work
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card className="py-12 animate-in fade-in-2 slide-in-from-top-1/2 duration-700">
            <CardContent className="flex flex-col gap-4 justify-center items-center p-0">
              <CardTitle className="text-2xl font-bold py-4">
                Contact Me
              </CardTitle>
              <CardDescription className="flex sm:flex-col justify-center items-center gap-4 w-full sm:px-12">
                <Button
                  className="sm:w-full bg-[#dd4b39]"
                  onClick={() =>
                    window.open("mailto:willbrown.co@gmail.com", "_blank")
                  }
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </Button>
                <Button
                  className="sm:w-full bg-[#0077B5]"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/williamjamesbrown/",
                      "_blank",
                    )
                  }
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </Button>
                <Button
                  className="sm:w-full bg-black"
                  onClick={() =>
                    window.open("https://github.com/WJB3003", "_blank")
                  }
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="animate-in fade-in-2 slide-in-from-top-1/2 duration-700 mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Technologies</CardTitle>
              <CardDescription className="flex flex-wrap gap-2 self-center justify-center">
                <div className="py-8 flex flex-wrap gap-8 self-center justify-center content-center delay-500 animate-slidein700">
                  {[
                    {
                      name: "Typescript",
                      icon: "/tech/icon/typescript.png",
                    },
                    {
                      name: "Javascript",
                      icon: "/tech/icon/javascript.png",
                    },
                    {
                      name: "React",
                      icon: "/tech/icon/react.png",
                    },
                    {
                      name: "React Native",
                      icon: "/tech/icon/react-native.png",
                    },
                    {
                      name: "PostgreSQL",
                      icon: "/tech/icon/postgresql.png",
                    },
                    {
                      name: "AWS",
                      icon: "/tech/icon/aws.png",
                    },
                    {
                      name: "PHP",
                      icon: "/tech/icon/php.png",
                    },
                  ].map((tech) => (
                    <div
                      key={tech.icon}
                      className="flex flex-col items-center gap-2"
                    >
                      <img
                        alt={tech.icon}
                        src={tech.icon}
                        height={56}
                        width={56}
                      />
                      <div className="font-thin text-black">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
