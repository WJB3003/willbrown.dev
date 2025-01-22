import { Button } from "./ui/button";
import { Menubar, MenubarMenu } from "./ui/menubar";

const Navigation = () => {
  return (
    <Menubar className="max-w-6xl mx-auto sm:mx-2 py-6 justify-between fixed top-4 left-0 right-0 z-50 text-sm">
      <MenubarMenu>
        <div className="flex items-center gap-2 pl-2 sm:pl-0">
          <a
            href="/"
            className="hover:scale-110 font-bold text-black hover:text-black"
          >
            William Brown
          </a>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="/projects"
            className="hover:scale-110 hover:text-black text-black"
          >
            My Work
          </a>
        </div>
        <Button
          className="border-none"
          onClick={() => window.open("/resume", "_blank")}
        >
          Resume
        </Button>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;
