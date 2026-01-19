import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WIREFRAME from "@/assets/wireframe.avif";
import {
  Cluster,
  Container,
  Grid,
  VStack,
  WithSidebar,
} from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About the challenge",
};

type Requirement = {
  title: string;
  description: string;
};

const designRequirements: Requirement[] = [
  {
    title: "System Fonts",
    description:
      "Use of native system fonts like Roboto, SF Pro, and Segoe UI for optimal performance and consistency.",
  },
  {
    title: "Form Validation",
    description:
      "Comprehensive validation examples with clear error states and helpful messages.",
  },
  {
    title: "Responsive Design",
    description:
      "Fully responsive layout adapting from mobile to desktop viewports.",
  },
  {
    title: "Accessibility",
    description:
      "WCAG-compliant with proper ARIA attributes, keyboard navigation, and focus management.",
  },
  {
    title: "Component Library",
    description:
      "Built with reusable components ensuring visual consistency across all internal services.",
  },
  {
    title: "Design Tokens",
    description:
      "Semantic color system with light/dark mode support using CSS custom properties.",
  },
];

const technicalRequirements: Requirement[] = [
  {
    title: "Modern HTML & CSS",
    description:
      "Semantic HTML5 elements with modern CSS features including Tailwind CSS v4.",
  },
  {
    title: "React & Next.js",
    description:
      "Built with Next.js App Router leveraging React Server Components for performance.",
  },
  {
    title: "Browser Support",
    description:
      "Targets latest 2 versions of Firefox, Chrome, Edge, and Safari.",
  },
  {
    title: "TypeScript",
    description:
      "Full type safety with TypeScript for improved developer experience and reliability.",
  },
];

type TocItem = {
  id: string;
  label: string;
};

const tocItems: TocItem[] = [
  { id: "overview-heading", label: "The Challenge" },
  { id: "wireframe-heading", label: "The Wireframe" },
  { id: "colors-heading", label: "Brand Colors" },
  { id: "design-requirements-heading", label: "Design Requirements" },
  { id: "tech-requirements-heading", label: "Technical Implementation" },
  { id: "cta-heading", label: "Try It Now" },
];

function RequirementCard({ requirement }: { requirement: Requirement }) {
  return (
    <article className="rounded-lg border border-fill-secondary bg-background-secondary p-5">
      <VStack className="gap-2">
        <h3 className="font-semibold text-label-primary">
          {requirement.title}
        </h3>
        <p className="text-sm text-label-secondary">
          {requirement.description}
        </p>
      </VStack>
    </article>
  );
}

function WireframeSection() {
  return (
    <section aria-labelledby="wireframe-heading">
      <VStack className="gap-4">
        <header className="prose">
          <h2
            id="wireframe-heading"
            className="text-xl font-semibold text-label-primary scroll-m-20"
          >
            The Wireframe
          </h2>
          <Image
            src={WIREFRAME}
            alt=""
            className="w-full"
            width={912}
            height={570}
            placeholder="blur"
          />
          <p className="text-sm text-label-secondary">
            A &quot;Candidate Registration&quot; page composed of three main
            parts.
          </p>
        </header>

        <div className="prose rounded-lg border border-fill-secondary bg-background-secondary p-5">
          <article>
            <h3 className="font-semibold text-label-primary mt-0">Top Bar</h3>
            <p className="text-label-secondary">
              Main navigation with brand logo on the left, followed by Home,
              Register (selected), and About links. Right side features a
              notification bell with badge and an account dropdown menu showing
              the user&apos;s name.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-label-primary">Main Content</h3>
            <p className="text-label-secondary">
              A two-column registration form with fields for First Name, Last
              Name, Email, Phone, Address (optional), and CV File upload
              (supporting .pdf, .doc, and .odt). Actions include Send and Clear
              buttons.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-label-primary">Footer</h3>
            <p className="mt-1 text-sm text-label-secondary">
              Simple centered copyright text: &quot;© 2022 ACME. All rights
              reserved.&quot;
            </p>
          </article>
        </div>
      </VStack>
    </section>
  );
}

function BrandColorsSection() {
  const primaryColors = [
    { name: "Orange 500", hex: "#FF6002", cssVar: "--color-orange-500" },
    { name: "Blue 500", hex: "#0B0378", cssVar: "--color-blue-500" },
    { name: "Yellow 500", hex: "#FFCE33", cssVar: "--color-yellow-500" },
    { name: "Purple 500", hex: "#BC0067", cssVar: "--color-purple-500" },
  ];

  const grayColors = [
    { name: "White 100", hex: "#FFFFFF", cssVar: "--color-white-100" },
    { name: "Gray 100", hex: "#FAFAFA", cssVar: "--color-gray-100" },
    { name: "Gray 200", hex: "#F5F5F5", cssVar: "--color-gray-200" },
    { name: "Gray 300", hex: "#D9D9D9", cssVar: "--color-gray-300" },
    { name: "Gray 400", hex: "#757575", cssVar: "--color-gray-400" },
    { name: "Gray 500", hex: "#4B4B4B", cssVar: "--color-gray-500" },
  ];

  return (
    <section aria-labelledby="colors-heading">
      <VStack className="gap-6">
        <header>
          <h2
            id="colors-heading"
            className="text-xl font-semibold text-label-primary scroll-m-20"
          >
            Brand Colors
          </h2>
          <p className="text-sm text-label-secondary">
            The challenge provided these brand colors to maintain visual
            identity across all internal services.
          </p>
        </header>

        <VStack className="gap-4">
          <h3 className="text-sm font-medium text-label-primary">
            Primary Colors
          </h3>
          <Cluster className="gap-4">
            {primaryColors.map((color) => (
              <div key={color.hex} className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-md border border-fill-primary"
                  style={{ backgroundColor: `var(${color.cssVar})` }}
                  role="img"
                  aria-label={color.name}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-label-primary">
                    {color.name}
                  </span>
                  <span className="text-xs text-label-secondary">
                    {color.hex}
                  </span>
                </div>
              </div>
            ))}
          </Cluster>
        </VStack>

        <VStack className="gap-4">
          <h3 className="text-sm font-medium text-label-primary">
            Neutral Colors
          </h3>
          <Cluster className="gap-4">
            {grayColors.map((color) => (
              <div key={color.hex} className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-md border border-fill-primary"
                  style={{ backgroundColor: `var(${color.cssVar})` }}
                  role="img"
                  aria-label={color.name}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-label-primary">
                    {color.name}
                  </span>
                  <span className="text-xs text-label-secondary">
                    {color.hex}
                  </span>
                </div>
              </div>
            ))}
          </Cluster>
        </VStack>

        <p className="text-sm text-label-tertiary">
          View the complete{" "}
          <Link
            href="/docs/design-system"
            className="text-brand underline hover:no-underline"
          >
            Design System
          </Link>{" "}
          for semantic color tokens and dark mode adaptations.
        </p>
      </VStack>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-5 pb-20">
      <Container>
        <VStack className="gap-12">
          <PageHeader className="">
            <PageTitle>About This Project</PageTitle>
            <p className="text-lg text-label-secondary text-pretty">
              This project is a solution to the{" "}
              <strong>UI Developer Challenge 2026</strong>, created to
              demonstrate modern front-end development practices.
            </p>
          </PageHeader>

          <WithSidebar.Root className="gap-12 flex-row-reverse">
            <WithSidebar.Side className="basis-60 relative">
              <nav
                aria-labelledby="about-toc-heading"
                className="sticky top-20"
              >
                <VStack className="gap-4">
                  <h2
                    id="about-toc-heading"
                    className="text-sm font-semibold uppercase tracking-wide"
                  >
                    On This Page
                  </h2>
                  <ul className="flex flex-col gap-2 text-sm">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-label-secondary hover:text-brand transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </VStack>
              </nav>
            </WithSidebar.Side>

            <WithSidebar.Content className="min-w-2/3">
              <VStack asChild className="gap-12 max-w-prose">
                <main>
                  {/* Challenge Overview */}
                  <section aria-labelledby="overview-heading">
                    <VStack className="gap-4">
                      <header>
                        <h2
                          id="overview-heading"
                          className="text-2xl font-semibold text-label-primary scroll-m-20"
                        >
                          The Challenge
                        </h2>
                      </header>
                      <p className="text-label-secondary">
                        The Internal Systems Team requested a design proposal
                        that reflects a provided wireframe. The goal was to
                        create a cohesive design system that could be used
                        across multiple internal services, ensuring visual
                        consistency while maintaining accessibility and
                        responsiveness.
                      </p>
                      <p className="text-label-secondary">
                        Rather than using pre-built component libraries like
                        Bootstrap or Material UI, the challenge required
                        crafting custom components from scratch using modern
                        tooling.
                      </p>
                    </VStack>
                  </section>

                  {/* Wireframe Section */}
                  <WireframeSection />

                  {/* Brand Colors */}
                  <BrandColorsSection />

                  {/* Design Requirements */}
                  <section aria-labelledby="design-requirements-heading">
                    <VStack className="gap-6">
                      <header>
                        <h2
                          id="design-requirements-heading"
                          className="text-2xl font-semibold text-label-primary scroll-m-20"
                        >
                          Design Requirements
                        </h2>
                        <p className="text-sm text-label-secondary">
                          Key requirements that guided the design decisions.
                        </p>
                      </header>
                      <Grid className="auto-size-72">
                        {designRequirements.map((req) => (
                          <RequirementCard key={req.title} requirement={req} />
                        ))}
                      </Grid>
                    </VStack>
                  </section>

                  {/* Technical Requirements */}
                  <section aria-labelledby="tech-requirements-heading">
                    <VStack className="gap-6">
                      <header>
                        <h2
                          id="tech-requirements-heading"
                          className="text-2xl font-semibold text-label-primary scroll-m-20"
                        >
                          Technical Implementation
                        </h2>
                        <p className="text-sm text-label-secondary">
                          Technologies and approaches used to build this
                          solution.
                        </p>
                      </header>
                      <Grid className="auto-size-72">
                        {technicalRequirements.map((req) => (
                          <RequirementCard key={req.title} requirement={req} />
                        ))}
                      </Grid>
                    </VStack>
                  </section>

                  {/* CTA */}
                  <section
                    aria-labelledby="cta-heading"
                    className="rounded-2xl bg-brand p-10 text-center"
                  >
                    <VStack className="items-center gap-6">
                      <VStack className="items-center gap-2">
                        <h2
                          id="cta-heading"
                          className="text-2xl font-bold text-brand-foreground scroll-m-20"
                        >
                          Ready to See It in Action?
                        </h2>
                        <p className="max-w-md text-brand-foreground/90">
                          Experience the complete registration form with
                          real-time validation, accessible error states, and
                          responsive design.
                        </p>
                      </VStack>
                      <Cluster className="gap-3 justify-center">
                        <Button
                          asChild
                          size="lg"
                          className="bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                        >
                          <Link href="/register">Try Registration Form</Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="ghost"
                          className="text-brand-foreground hover:bg-brand-foreground/10"
                        >
                          <Link href="/docs/components">View Components</Link>
                        </Button>
                      </Cluster>
                    </VStack>
                  </section>
                </main>
              </VStack>
            </WithSidebar.Content>
          </WithSidebar.Root>
        </VStack>
      </Container>
    </div>
  );
}
