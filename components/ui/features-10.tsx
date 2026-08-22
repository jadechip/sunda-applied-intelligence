import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Blocks, Focus, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Features() {
  return (
    <div className="mx-auto grid gap-4 lg:grid-cols-2">
      <FeatureCard>
        <CardHeader className="pb-3">
          <CardHeading
            icon={Focus}
            title="See the work"
            description="Follow the decisions, exceptions, and workarounds."
          />
        </CardHeader>
        <div className="relative mt-1 border-t border-dashed px-6 pb-6 pt-7">
          <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_0%,transparent_34%,hsl(var(--muted))_120%)]" />
          <WorkflowPreview />
        </div>
      </FeatureCard>

      <FeatureCard>
        <CardHeader className="pb-3">
          <CardHeading
            icon={Blocks}
            title="Find the wedge"
            description="Locate one narrow change with disproportionate value."
          />
        </CardHeader>
        <CardContent className="relative overflow-hidden pt-4">
          <div className="absolute -inset-6 bg-[radial-gradient(55%_55%_at_75%_50%,transparent,hsl(var(--background))_100%)]" />
          <ConstraintPreview />
        </CardContent>
      </FeatureCard>

      <FeatureCard className="p-6 lg:col-span-2">
        <div className="mx-auto max-w-xl py-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">A practical loop</span>
          <p className="mt-4 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Learn from the work, prove value in context, and build from evidence.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4 overflow-hidden sm:gap-7">
          <CircularUI label="Observe" circles={[{ pattern: "border" }, { pattern: "border" }]} />
          <CircularUI label="Shape" circles={[{ pattern: "none" }, { pattern: "primary" }]} />
          <CircularUI label="Prove" circles={[{ pattern: "blue" }, { pattern: "none" }]} />
          <CircularUI label="Learn" circles={[{ pattern: "primary" }, { pattern: "none" }]} className="hidden sm:block" />
        </div>
      </FeatureCard>
    </div>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

export const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn("group relative overflow-hidden rounded-none border-zinc-200 shadow-zinc-950/5", className)}>
    <CardDecorator />
    {children}
  </Card>
);

export const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-primary" />
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-primary" />
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-primary" />
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-primary" />
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-1 sm:p-4">
    <span className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="size-4 text-primary" aria-hidden="true" />
      {title}
    </span>
    <p className="mt-8 max-w-sm text-balance text-2xl font-semibold tracking-tight">{description}</p>
  </div>
);

const WorkflowPreview = () => (
  <div className="relative z-10 mx-auto aspect-[76/48] max-w-md border border-zinc-200 bg-white p-3 shadow-sm">
    <div className="mb-3 flex items-center justify-between border-b border-dashed border-zinc-200 pb-2">
      <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-400">Workflow trace</span>
      <span className="flex items-center gap-1.5 text-[9px] text-zinc-500"><i className="size-1.5 rounded-full bg-blue-600" /> Live</span>
    </div>
    <div className="space-y-2">
      {["Customer request", "Operator review", "Manual exception"].map((label, index) => (
        <div className="grid grid-cols-[20px_1fr_auto] items-center gap-2" key={label}>
          <span className={cn("grid size-5 place-items-center rounded-full border text-[8px]", index === 2 ? "border-blue-600 bg-blue-50 text-blue-700" : "border-zinc-200 text-zinc-400")}>{index + 1}</span>
          <span className="text-[10px] text-zinc-600">{label}</span>
          <span className={cn("h-1.5 rounded-full", index === 2 ? "w-16 bg-blue-600" : "w-10 bg-zinc-200")} />
        </div>
      ))}
    </div>
  </div>
);

const ConstraintPreview = () => (
  <div className="relative z-10 mx-auto aspect-[76/48] max-w-md border border-zinc-200 bg-white p-4 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-400">Constraint map</span>
      <span className="text-[9px] text-blue-600">Highest leverage</span>
    </div>
    <div className="grid grid-cols-6 gap-1.5">
      {Array.from({ length: 30 }, (_, index) => (
        <i
          className={cn("aspect-square border", index === 15 || index === 16 ? "border-blue-600 bg-blue-600" : index % 5 === 0 ? "border-blue-200 bg-blue-50" : "border-zinc-200 bg-zinc-50")}
          key={index}
        />
      ))}
    </div>
  </div>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="size-fit rounded-2xl bg-gradient-to-b from-border to-transparent p-px">
      <div className="relative flex aspect-square w-fit -space-x-4 rounded-[15px] bg-gradient-to-b from-background to-muted/25 p-4">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]": circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]": circle.pattern === "primary",
              "z-1 border-blue-500 bg-background bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]": circle.pattern === "blue",
            })}
          />
        ))}
      </div>
    </div>
    <span className="mt-1.5 block text-center text-sm text-muted-foreground">{label}</span>
  </div>
);
