import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";
import { Container, VStack } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { markdownComponents } from "./markdown-components";

export const metadata: Metadata = {
  title: "About the challenge",
};

async function getChallengeContent() {
  const filePath = join(process.cwd(), "src/app/about/challenge.md");
  return readFileSync(filePath, "utf-8");
}

export default async function AboutPage() {
  const content = await getChallengeContent();

  return (
    <main className="pt-5 pb-20 flex-1">
      <Container>
        <VStack className="max-w-prose gap-12">
          <PageHeader>
            <PageTitle>About This Challenge</PageTitle>
            <p className="text-lg text-label-secondary text-pretty">
              This project is a solution to the{" "}
              <strong>UI Developer Challenge 2026</strong>, created to
              demonstrate modern front-end development practices.
            </p>
          </PageHeader>

          <div className="prose prose-sm max-w-4xl">
            <Markdown components={markdownComponents}>{content}</Markdown>
          </div>

          {/* CTA */}
          <section className="rounded-2xl bg-brand p-10 text-center">
            <VStack className="items-center gap-6">
              <VStack className="items-center gap-2">
                <h2 className="text-2xl font-bold text-brand-foreground scroll-m-20">
                  Ready to See It in Action?
                </h2>
                <p className="max-w-md text-brand-foreground/90">
                  Experience the complete registration form with real-time
                  validation, accessible error states, and responsive design.
                </p>
              </VStack>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                >
                  <Link href="/register">Try Registration Form</Link>
                </Button>
              </div>
            </VStack>
          </section>
        </VStack>
      </Container>
    </main>
  );
}
