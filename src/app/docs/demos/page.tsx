"use client";

import { Splitter } from "@ark-ui/react/splitter";
import { Container, VStack } from "@/components/layout";
import { PageTitle } from "@/components/page-title";
import { RegistrationForm } from "@/components/registration/form";

export default function ComponentsPage() {
  return (
    <main className="pt-5 pb-20">
      <Container>
        <VStack className="gap-10">
          <div className="px-6">
            <VStack className="gap-3">
              <PageTitle>Form Responsiveness Demo</PageTitle>
              <p className="text-label-secondary text-pretty max-w-2xl">
                Drag the divider to resize the container and watch the form
                respond in real time.
              </p>
            </VStack>
          </div>

          <div className="flex-1 px-6 hidden lg:flex">
            <Splitter.Root
              defaultSize={[50, 50]}
              panels={[
                { id: "form", minSize: 20 },
                { id: "info", minSize: 20 },
              ]}
              className="h-full flex rounded-lg border border-fill-secondary overflow-hidden bg-background-secondary"
            >
              <Splitter.Panel
                id="form"
                className="flex flex-col overflow-auto bg-background-primary p-6"
              >
                <div className="flex-1">
                  <RegistrationForm />
                </div>
              </Splitter.Panel>

              <Splitter.ResizeTrigger
                id="form:info"
                className="w-1 bg-fill-secondary hover:bg-brand/50 cursor-col-resize transition-colors data-dragging:bg-brand"
                aria-label="Resize form and info panels"
              />

              <Splitter.Panel
                id="info"
                className="flex items-center justify-center p-6"
              >
                <p className="text-label-secondary text-center">
                  Drag to resize
                </p>
              </Splitter.Panel>
            </Splitter.Root>
          </div>

          <div className="flex-1 flex lg:hidden items-center justify-center px-6">
            <div className="text-center space-y-4">
              <p className="text-label-primary font-medium">
                This demo is only available on larger screens.
              </p>
              <p className="text-sm text-label-secondary">
                Open this page on a desktop or tablet to see the responsive form
                demo with a resizable split panel.
              </p>
            </div>
          </div>
        </VStack>
      </Container>
    </main>
  );
}
