export function add(a: number, b: number) {
  return a + b;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("1+1=2", () => {
    expect(add(1, 1)).toBe(2);
  });
}