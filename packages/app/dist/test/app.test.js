import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { renderToString } from "react-dom/server";
import { App } from "@sample/app";
describe("<App />", () => {
    it("renders without throwing on the server", () => {
        assert.doesNotThrow(() => renderToString(_jsx(App, { text: "" })));
    });
    it("renders provided text", () => {
        assert.match(renderToString(_jsx(App, { text: "It works" })), /It works/);
    });
});
//# sourceMappingURL=app.test.js.map