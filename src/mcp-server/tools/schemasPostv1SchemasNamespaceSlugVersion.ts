/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schemasPostv1SchemasNamespaceSlugVersion } from "../../funcs/schemasPostv1SchemasNamespaceSlugVersion.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.Postv1SchemasNamespaceSlugVersionRequest$inboundSchema,
};

export const tool$schemasPostv1SchemasNamespaceSlugVersion: ToolDefinition<
  typeof args
> = {
  name: "schemas-postv1-schemas-namespace-slug-version",
  description: `Create a shared component version

Create a shared component version`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await schemasPostv1SchemasNamespaceSlugVersion(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
