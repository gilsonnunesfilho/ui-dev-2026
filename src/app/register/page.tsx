import type { Metadata } from "next";
import { Container, VStack } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { PageTitle } from "@/components/page-title";
import { RegistrationForm } from "@/components/registration/form";

export const metadata: Metadata = {
  title: "Candidate Registration",
};

export default function RegisterPage() {
  return (
    <Container asChild>
      <VStack asChild className="gap-10 pt-5 pb-20">
        <main>
          <PageHeader>
            <PageTitle>Candidate Registration</PageTitle>
          </PageHeader>

          <RegistrationForm />
        </main>
      </VStack>
    </Container>
  );
}
