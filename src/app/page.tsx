import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Welcome to ACME
            </h1>
            <p className="text-lg text-label-secondary">
              Join our team and help shape the future of design and development.
            </p>
          </div>

          <p className="text-base text-label-secondary max-w-md mx-auto">
            We're looking for talented designers and developers to join our
            growing team. Get started by registering below.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/register">
                Start Registration
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
