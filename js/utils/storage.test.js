import { beforeEach, expect, it } from "vitest";
import { getUsername } from "./storage.js";

beforeEach(() => {
  const storage = {};

  global.localStorage = {
    setItem: (key, value) => (storage[key] = value),
    getItem: (key) => storage[key],
  };
});

it("returns the name from the user object in storage", () => {
  const user = JSON.stringify({
    name: "TestUser",
    age: 99,
  });
  localStorage.setItem("user", user);

  const result = getUsername();
  expect(result).toBe("TestUser");
});

it("returns null when no user exists in storage", () => {
  const result = getUsername();
  expect(result).toBeNull();
});
