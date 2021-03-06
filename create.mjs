#!/usr/bin/env zx

const countOutput = await $`ls -ld src/* | wc -l`;
const questionNo = Number(countOutput.stdout.trim()) + 1;
await $`mkdir src/${questionNo}`;
cd(`src/${questionNo}`);
await $`touch question.md`;
await $`touch solution.ts`;
await $`touch solution.test.ts`;

const testContent = `
describe("Question ${questionNo}", () => {
  test("Test ${questionNo}.1", () => {
    const actual = 1;
    const expected = 1;

    expect(actual).toBe(expected);
  });
});`;

await $`echo ${testContent} > solution.test.ts`;
