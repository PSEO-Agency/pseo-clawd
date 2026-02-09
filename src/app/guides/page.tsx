import { Metadata } from "next";
import GuidesIndexClient from "./GuidesIndexClient";

export const metadata: Metadata = {
  title: "Guides | How to Build Programmatic SEO | PSEO Growth Stack",
  description: "Step-by-step guides for programmatic SEO: create 1000+ landing pages, rank for long-tail keywords, build directory websites, and more.",
};

export default function GuidesPage() {
  return <GuidesIndexClient />;
}
