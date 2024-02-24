import Contacts from "@/components/contacts";
import ProjectList from "@/components/project-list";
import { ThemeToggle } from "@/components/theme-toogle";
import Link from "next/link";
import Balance from "react-wrap-balancer";

export default function IndexPage() {
  return (
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <Header>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold font-mono uppercase">
              Irsyad Al Ghifary
            </h1>
            <ThemeToggle />
          </div>
          <Balance className="dark:text-paragraph-dark text-paragraph-light my-6 leading-7 space-y-4">
            <p>
              I’m a frontend developer with a blend of creative mind and
              technical skills. Combine aesthetics and functionality to create
              impactful and memorable experiences. Striving to learn and grow in
              my work.
            </p>
            <p>
              Currently working at Boleh Dicoba Digital as frontend developer
              building Boleh Belajar LMS and{" "}
              <span className="underline">
                <Link
                  href={"https://bolehbelajar.com/"}
                  prefetch={false}
                  target="_blank"
                >
                  Boleh Belajar Website
                </Link>
              </span>
              . Spent most of my free time learning about frontend and playing
              around with Spline, Framer and Figma.
            </p>
          </Balance>
        </Header>
        <Contacts />
        <ProjectList className="mt-12" />
      </div>
    </div>
  );
}

function Header({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <section {...props}>{children}</section>;
}
