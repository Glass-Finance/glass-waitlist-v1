import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import CloudImage from "./CloudImage.jsx";

const CLOUD = "ece5jmhy";

beforeEach(() => {
  vi.stubEnv("VITE_CLOUDINARY_CLOUD_NAME", CLOUD);
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("CloudImage", () => {
  it("renders a real image with srcSet and a blurred placeholder", () => {
    const { container } = render(
      <CloudImage publicId="glass/usecase/icon-schools" alt="Schools" width={144} />,
    );
    const real = screen.getByAltText("Schools");
    expect(real.getAttribute("src")).toMatch(/w_144\/glass\/usecase\/icon-schools$/);
    expect(real.getAttribute("srcSet")).toContain("144w");
    expect(real.getAttribute("loading")).toBe("lazy");
    const placeholder = container.querySelector('img[aria-hidden="true"]');
    expect(placeholder).toBeTruthy();
    expect(placeholder.classList.contains("opacity-100")).toBe(true);
  });

  it("loads eagerly and marks fetchpriority=high for priority images", () => {
    render(<CloudImage publicId="glass/hero/hero" alt="Hero" width={1920} priority />);
    const real = screen.getByAltText("Hero");
    expect(real.getAttribute("loading")).toBe("eager");
    expect(real.getAttribute("fetchpriority")).toBe("high");
  });

  it("fades the placeholder out once the real image loads", () => {
    const { container } = render(<CloudImage publicId="glass/Glass" alt="Logo" width={120} />);
    const real = screen.getByAltText("Logo");
    const placeholder = container.querySelector('img[aria-hidden="true"]');
    expect(placeholder.classList.contains("opacity-100")).toBe(true);
    act(() => {
      real.dispatchEvent(new Event("load"));
    });
    expect(placeholder.classList.contains("opacity-0")).toBe(true);
  });
});
