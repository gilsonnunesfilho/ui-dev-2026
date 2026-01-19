import type { Metadata } from "next";
import { Container, Grid, VStack, WithSidebar } from "@/components/layout";

export const metadata: Metadata = {
  title: "Design system",
};

type ColorToken = {
  name: string;
  cssVar: string;
  value: string;
};

type ColorCategory = {
  title: string;
  description: string;
  tokens: ColorToken[];
};

const primitiveColors: ColorToken[] = [
  { name: "Orange 500", cssVar: "--color-orange-500", value: "#ff6002" },
  { name: "Blue 500", cssVar: "--color-blue-500", value: "#0b0378" },
  { name: "Yellow 500", cssVar: "--color-yellow-500", value: "#ffce33" },
  { name: "Purple 500", cssVar: "--color-purple-500", value: "#bc0067" },
  { name: "White 100", cssVar: "--color-white-100", value: "#ffffff" },
  { name: "Gray 500", cssVar: "--color-gray-500", value: "#4b4b4b" },
  { name: "Gray 400", cssVar: "--color-gray-400", value: "#757575" },
  { name: "Gray 300", cssVar: "--color-gray-300", value: "#d9d9d9" },
  { name: "Gray 200", cssVar: "--color-gray-200", value: "#f5f5f5" },
  { name: "Gray 100", cssVar: "--color-gray-100", value: "#fafafa" },
];

const semanticColors: ColorCategory[] = [
  {
    title: "Label Colors",
    description: "Used for text and iconography across the interface.",
    tokens: [
      {
        name: "Primary",
        cssVar: "--color-label-primary",
        value: "var(--color-gray-500)",
      },
      {
        name: "Secondary",
        cssVar: "--color-label-secondary",
        value: "var(--color-gray-400)",
      },
      {
        name: "Tertiary",
        cssVar: "--color-label-tertiary",
        value: "30% transparent mix",
      },
    ],
  },
  {
    title: "Background Colors",
    description: "Surface colors for containers and page backgrounds.",
    tokens: [
      {
        name: "Primary",
        cssVar: "--color-background-primary",
        value: "var(--color-white-100)",
      },
      {
        name: "Secondary",
        cssVar: "--color-background-secondary",
        value: "var(--color-gray-100)",
      },
    ],
  },
  {
    title: "Fill Colors",
    description: "Used for borders, dividers, and subtle UI elements.",
    tokens: [
      {
        name: "Primary",
        cssVar: "--color-fill-primary",
        value: "var(--color-gray-300)",
      },
      {
        name: "Secondary",
        cssVar: "--color-fill-secondary",
        value: "30% transparent mix",
      },
    ],
  },
  {
    title: "Brand Colors",
    description: "Primary brand color for interactive elements and CTAs.",
    tokens: [
      {
        name: "Brand",
        cssVar: "--color-brand",
        value: "var(--color-orange-500)",
      },
      {
        name: "Brand Foreground",
        cssVar: "--color-brand-foreground",
        value: "var(--color-white-100)",
      },
    ],
  },
  {
    title: "Accent Colors",
    description: "Used for informational messages and states.",
    tokens: [
      {
        name: "Accent",
        cssVar: "--color-accent",
        value: "var(--color-blue-500)",
      },
      {
        name: "Accent Foreground",
        cssVar: "--color-accent-foreground",
        value: "var(--color-white-100)",
      },
    ],
  },
  {
    title: "Destructive Colors",
    description: "Used for destructive actions and error states.",
    tokens: [
      {
        name: "Destructive",
        cssVar: "--color-destructive",
        value: "var(--color-purple-500)",
      },
      {
        name: "Destructive Foreground",
        cssVar: "--color-destructive-foreground",
        value: "var(--color-white-100)",
      },
    ],
  },
  {
    title: "Alert Colors",
    description: "Used for warnings and cautionary messages.",
    tokens: [
      {
        name: "Alert",
        cssVar: "--color-alert",
        value: "var(--color-yellow-500)",
      },
      {
        name: "Alert Foreground",
        cssVar: "--color-alert-foreground",
        value: "var(--color-gray-500)",
      },
    ],
  },
];

function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <article className="flex flex-col rounded-lg border border-fill-secondary">
      <div
        className="h-16 w-full rounded-t-md border border-fill-primary"
        style={{ backgroundColor: `var(${token.cssVar})` }}
        role="img"
        aria-label={`Color swatch for ${token.name}`}
      />
      <VStack className="gap-1 p-2.5">
        <h3 className="text-sm font-medium text-label-primary">{token.name}</h3>
        <code className="text-xs text-label-secondary">{token.cssVar}</code>
        <span className="text-xs text-label-tertiary">{token.value}</span>
      </VStack>
    </article>
  );
}

function SemanticColorSection({ category }: { category: ColorCategory }) {
  return (
    <section
      aria-labelledby={`section-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <VStack className="gap-4">
        <header>
          <h2
            id={`section-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xl font-semibold text-label-primary"
          >
            {category.title}
          </h2>
          <p className="text-sm text-label-secondary">{category.description}</p>
        </header>
        <Grid className="auto-size-48">
          {category.tokens.map((token) => (
            <ColorSwatch key={token.cssVar} token={token} />
          ))}
        </Grid>
      </VStack>
    </section>
  );
}

function TailwindUsageTable() {
  const usageExamples = [
    {
      token: "label-primary",
      usage: "text-label-primary",
      description: "Primary text color",
    },
    {
      token: "label-secondary",
      usage: "text-label-secondary",
      description: "Secondary text color",
    },
    {
      token: "background-primary",
      usage: "bg-background-primary",
      description: "Primary background",
    },
    {
      token: "background-secondary",
      usage: "bg-background-secondary",
      description: "Secondary background",
    },
    {
      token: "fill-primary",
      usage: "border-fill-primary",
      description: "Primary border color",
    },
    {
      token: "fill-secondary",
      usage: "border-fill-secondary",
      description: "Secondary border color",
    },
    {
      token: "brand",
      usage: "bg-brand text-brand-foreground",
      description: "Brand button/link",
    },
    {
      token: "accent",
      usage: "bg-accent text-accent-foreground",
      description: "Info state",
    },
    {
      token: "destructive",
      usage: "bg-destructive text-destructive-foreground",
      description: "Destructive action",
    },
    {
      token: "alert",
      usage: "bg-alert text-alert-foreground",
      description: "Warning state",
    },
  ];

  return (
    <section aria-labelledby="usage-section">
      <VStack className="gap-4">
        <header>
          <h2
            id="usage-section"
            className="text-xl font-semibold text-label-primary"
          >
            Tailwind CSS Usage
          </h2>
          <p className="text-sm text-label-secondary">
            How to use these tokens with Tailwind CSS v4 utility classes.
          </p>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-fill-primary">
                <th className="px-4 py-3 text-left font-medium text-label-primary">
                  Token
                </th>
                <th className="px-4 py-3 text-left font-medium text-label-primary">
                  Tailwind Class
                </th>
                <th className="px-4 py-3 text-left font-medium text-label-primary">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {usageExamples.map((example) => (
                <tr
                  key={example.token}
                  className="border-b border-fill-secondary"
                >
                  <td className="px-4 py-3 text-label-secondary">
                    {example.token}
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-background-secondary px-2 py-1 text-xs text-label-primary">
                      {example.usage}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-label-tertiary">
                    {example.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </VStack>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="pt-10 pb-20">
      <Container>
        <VStack className="gap-12">
          <header className="border-b border-fill-secondary pb-6">
            <h1 className="text-4xl font-bold text-label-primary">
              Design System
            </h1>
            <p className="mt-2 text-lg text-label-secondary">
              A comprehensive guide to the design tokens used throughout this
              project.
            </p>
          </header>
          <WithSidebar.Root className="gap-12 flex-row-reverse">
            <WithSidebar.Side className="basis-60 relative">
              <nav aria-labelledby="toc-heading" className="sticky top-20">
                <VStack className="gap-4">
                  <h2
                    id="toc-heading"
                    className="text-sm font-semibold text-label-primary uppercase tracking-wide"
                  >
                    On This Page
                  </h2>
                  <ul className="flex flex-col gap-2 text-sm">
                    <li>
                      <a
                        href="#primitives-section"
                        className="text-label-secondary hover:text-brand transition-colors"
                      >
                        Primitive Colors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#semantic-section"
                        className="text-label-secondary hover:text-brand transition-colors"
                      >
                        Semantic Colors
                      </a>
                      <ul className="mt-2 ml-3 flex flex-col gap-1.5 border-l border-fill-secondary pl-3">
                        {semanticColors.map((category) => (
                          <li key={category.title}>
                            <a
                              href={`#section-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-xs text-label-tertiary hover:text-brand transition-colors"
                            >
                              {category.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#usage-section"
                        className="text-label-secondary hover:text-brand transition-colors"
                      >
                        Tailwind CSS Usage
                      </a>
                    </li>
                    <li>
                      <a
                        href="#dark-mode-section"
                        className="text-label-secondary hover:text-brand transition-colors"
                      >
                        Dark Mode Support
                      </a>
                    </li>
                  </ul>
                </VStack>
              </nav>
            </WithSidebar.Side>
            <WithSidebar.Content className="min-w-2/3 bg-background-primary sticky">
              <VStack asChild className="gap-12 max-w-prose">
                <main>
                  {/* Primitive Colors Section */}
                  <section aria-labelledby="primitives-section">
                    <VStack className="gap-6">
                      <header>
                        <h2
                          id="primitives-section"
                          className="text-2xl font-semibold text-label-primary"
                        >
                          Primitive Colors
                        </h2>
                        <p className="text-sm text-label-secondary">
                          The foundational color palette. These are raw values
                          that semantic tokens reference.
                        </p>
                      </header>
                      <Grid className="auto-size-40">
                        {primitiveColors.map((token) => (
                          <ColorSwatch key={token.cssVar} token={token} />
                        ))}
                      </Grid>
                    </VStack>
                  </section>

                  <section aria-labelledby="semantic-section">
                    <VStack className="gap-8">
                      <header>
                        <h2
                          id="semantic-section"
                          className="text-2xl font-semibold text-label-primary"
                        >
                          Semantic Colors
                        </h2>
                        <p className="text-sm text-label-secondary">
                          Purpose-driven color tokens that adapt to light and
                          dark modes.
                        </p>
                      </header>
                      {semanticColors.map((category) => (
                        <SemanticColorSection
                          key={category.title}
                          category={category}
                        />
                      ))}
                    </VStack>
                  </section>

                  <TailwindUsageTable />
                </main>
              </VStack>
            </WithSidebar.Content>
          </WithSidebar.Root>
        </VStack>
      </Container>
    </div>
  );
}
