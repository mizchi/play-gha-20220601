import { add } from "@internal/core/mod";

// @ts-expect-error
globalThis.ret = add(1, 2);