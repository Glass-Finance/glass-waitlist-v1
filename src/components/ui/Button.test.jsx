import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button, BUTTON_SIZES, BUTTON_VARIANTS } from "./Button";

// These assert the contract DESIGN-SYSTEM.md §2 pins down, not the exact
// class strings: the class names are an implementation detail, but "the
// radius is 4px" and "Critical is #db0000" are not.

describe("Button", () => {
  it("uses 4px radius (rounded-g-1), never rounded-full or rounded-lg", () => {
    // The most common offender across both repos was rounded-full (9999px) and
    // rounded-xl (12px). Figma says 4px at every state.
    const { rerender } = render(<Button>Go</Button>);
    expect(screen.getByRole("button").className).toContain("rounded-g-1");

    for (const variant of BUTTON_VARIANTS) {
      rerender(<Button variant={variant}>Go</Button>);
      const cls = screen.getByRole("button").className;
      expect(cls).toContain("rounded-g-1");
      expect(cls).not.toContain("rounded-full");
      expect(cls).not.toContain("rounded-xl");
      expect(cls).not.toContain("rounded-lg");
    }
  });

  it("primary fills with the Figma brand and labels in white", () => {
    render(<Button variant="primary">Go</Button>);
    const cls = screen.getByRole("button").className;
    expect(cls).toContain("bg-brand");
    expect(cls).toContain("text-white");
  });

  it("critical fills with #db0000, not Tailwind red-600 (#dc2626)", () => {
    render(<Button variant="critical">Delete</Button>);
    const cls = screen.getByRole("button").className;
    expect(cls).toContain("bg-danger");
    // #dc2626 vs #db0000 look identical but are different colours; the app
    // had five distinct reds before this.
    expect(cls).not.toContain("red-600");
    expect(cls).not.toContain("#dc2626");
  });

  it("every variant has a distinct disabled treatment that keeps the fill", () => {
    // Figma gives no separate disabled colour, so the fill stays and the
    // button dims. A disabled button that swaps fill loses its role.
    for (const variant of BUTTON_VARIANTS) {
      const { unmount } = render(
        <Button variant={variant} disabled>
          Go
        </Button>,
      );
      const cls = screen.getByRole("button").className;
      expect(cls).toContain("opacity-60");
      expect(cls).toContain("cursor-not-allowed");
      expect(cls).not.toContain("hover:");
      unmount();
    }
  });

  it("carries a focus-visible ring in the Figma focus colour", () => {
    render(<Button>Go</Button>);
    const cls = screen.getByRole("button").className;
    expect(cls).toContain("focus-visible:outline-focus");
  });

  it("loading disables the button and announces aria-busy", () => {
    // Plain DOM assertions: v1 has no @testing-library/jest-dom setup file,
    // and adding one just for two matchers is not worth a dependency.
    render(<Button loading>Go</Button>);
    const btn = screen.getByRole("button");
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute("aria-busy")).toBe("true");
  });

  it("defaults type=button so it cannot submit a form by accident", () => {
    render(<Button>Go</Button>);
    expect(screen.getByRole("button").getAttribute("type")).toBe("button");
  });

  it("icon sizes are square and drop the full-width stretch", () => {
    // w-full on a square icon button turns it into an ellipse.
    for (const size of ["icon-sm", "icon-md", "icon-lg"]) {
      const { unmount } = render(
        <Button size={size} aria-label="Close">
          x
        </Button>,
      );
      const cls = screen.getByRole("button").className;
      expect(cls).not.toContain("w-full");
      expect(cls).toMatch(/w-\d+/);
      expect(cls).toMatch(/h-\d+/);
      unmount();
    }
  });

  it("is full width by default but opts out", () => {
    const { rerender } = render(<Button>Go</Button>);
    expect(screen.getByRole("button").className).toContain("w-full");
    rerender(<Button fullWidth={false}>Go</Button>);
    expect(screen.getByRole("button").className).not.toContain("w-full");
  });

  it("maps the three legacy aliases onto spec roles", () => {
    // brand/danger/secondary shipped before DESIGN-SYSTEM.md existed.
    // "secondary" was a *filled* grey pill Figma does not define; it now
    // resolves to the outline role, which is what those callers wanted.
    const { rerender } = render(<Button variant="brand">Go</Button>);
    expect(screen.getByRole("button").className).toContain("bg-brand");
    rerender(<Button variant="danger">Go</Button>);
    expect(screen.getByRole("button").className).toContain("bg-danger");
    rerender(<Button variant="secondary">Go</Button>);
    expect(screen.getByRole("button").className).toContain("bg-transparent");
  });

  it("exports every documented role and size", () => {
    expect(BUTTON_VARIANTS).toEqual(
      expect.arrayContaining([
        "primary",
        "critical",
        "success",
        "warning",
        "outline",
        "outline-neutral",
        "outline-caution",
        "tonal",
        "tertiary",
      ]),
    );
    expect(BUTTON_SIZES).toEqual(
      expect.arrayContaining(["xs", "sm", "md", "lg", "xl", "icon-sm", "icon-md", "icon-lg"]),
    );
  });

  it("merges caller className last so it can override", () => {
    render(<Button className="shadow-lg">Go</Button>);
    const cls = screen.getByRole("button").className;
    expect(cls).toContain("shadow-lg");
    expect(cls).toContain("rounded-g-1");
  });
});
