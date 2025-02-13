import { expect, it } from "vitest";
import { isActivePath } from "./userInterface.js";

it("current path matches href exactly", () => {
  const href = "/";
  const currentPath = "/";
  const result = isActivePath(href, currentPath);
  expect(result).toBeTruthy();
});

it("root path (“/”) when path is “/” or “/index.html”", () => {
  const href = "/";
  const currentPath = "/index.html";
  const result = isActivePath(href, currentPath);
  expect(result).toBeTruthy();
});

it("current path includes the href", () => {
  const href = "/login";
  const currentPath = "/login/index.html";
  const result = isActivePath(href, currentPath);
  expect(result).toBeTruthy();
});

it("when paths don’t match", () => {
  const href = "/login";
  const currentPath = "/index.html";
  const result = isActivePath(href, currentPath);
  expect(result).toBeFalsy();
});
