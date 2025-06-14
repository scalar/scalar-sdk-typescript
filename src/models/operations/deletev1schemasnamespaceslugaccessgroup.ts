/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Deletev1SchemasNamespaceSlugAccessGroupRequestBody = {
  accessGroupSlug: string;
};

export type Deletev1SchemasNamespaceSlugAccessGroupRequest = {
  namespace: string;
  slug: string;
  requestBody: Deletev1SchemasNamespaceSlugAccessGroupRequestBody;
};

/** @internal */
export const Deletev1SchemasNamespaceSlugAccessGroupRequestBody$inboundSchema:
  z.ZodType<
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessGroupSlug: z.string(),
  });

/** @internal */
export type Deletev1SchemasNamespaceSlugAccessGroupRequestBody$Outbound = {
  accessGroupSlug: string;
};

/** @internal */
export const Deletev1SchemasNamespaceSlugAccessGroupRequestBody$outboundSchema:
  z.ZodType<
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody$Outbound,
    z.ZodTypeDef,
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody
  > = z.object({
    accessGroupSlug: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deletev1SchemasNamespaceSlugAccessGroupRequestBody$ {
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody$inboundSchema;
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody$outboundSchema;
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequestBody$Outbound` instead. */
  export type Outbound =
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody$Outbound;
}

export function deletev1SchemasNamespaceSlugAccessGroupRequestBodyToJSON(
  deletev1SchemasNamespaceSlugAccessGroupRequestBody:
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody,
): string {
  return JSON.stringify(
    Deletev1SchemasNamespaceSlugAccessGroupRequestBody$outboundSchema.parse(
      deletev1SchemasNamespaceSlugAccessGroupRequestBody,
    ),
  );
}

export function deletev1SchemasNamespaceSlugAccessGroupRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  Deletev1SchemasNamespaceSlugAccessGroupRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Deletev1SchemasNamespaceSlugAccessGroupRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Deletev1SchemasNamespaceSlugAccessGroupRequestBody' from JSON`,
  );
}

/** @internal */
export const Deletev1SchemasNamespaceSlugAccessGroupRequest$inboundSchema:
  z.ZodType<
    Deletev1SchemasNamespaceSlugAccessGroupRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    RequestBody: z.lazy(() =>
      Deletev1SchemasNamespaceSlugAccessGroupRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type Deletev1SchemasNamespaceSlugAccessGroupRequest$Outbound = {
  namespace: string;
  slug: string;
  RequestBody: Deletev1SchemasNamespaceSlugAccessGroupRequestBody$Outbound;
};

/** @internal */
export const Deletev1SchemasNamespaceSlugAccessGroupRequest$outboundSchema:
  z.ZodType<
    Deletev1SchemasNamespaceSlugAccessGroupRequest$Outbound,
    z.ZodTypeDef,
    Deletev1SchemasNamespaceSlugAccessGroupRequest
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    requestBody: z.lazy(() =>
      Deletev1SchemasNamespaceSlugAccessGroupRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deletev1SchemasNamespaceSlugAccessGroupRequest$ {
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequest$inboundSchema` instead. */
  export const inboundSchema =
    Deletev1SchemasNamespaceSlugAccessGroupRequest$inboundSchema;
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequest$outboundSchema` instead. */
  export const outboundSchema =
    Deletev1SchemasNamespaceSlugAccessGroupRequest$outboundSchema;
  /** @deprecated use `Deletev1SchemasNamespaceSlugAccessGroupRequest$Outbound` instead. */
  export type Outbound =
    Deletev1SchemasNamespaceSlugAccessGroupRequest$Outbound;
}

export function deletev1SchemasNamespaceSlugAccessGroupRequestToJSON(
  deletev1SchemasNamespaceSlugAccessGroupRequest:
    Deletev1SchemasNamespaceSlugAccessGroupRequest,
): string {
  return JSON.stringify(
    Deletev1SchemasNamespaceSlugAccessGroupRequest$outboundSchema.parse(
      deletev1SchemasNamespaceSlugAccessGroupRequest,
    ),
  );
}

export function deletev1SchemasNamespaceSlugAccessGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  Deletev1SchemasNamespaceSlugAccessGroupRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Deletev1SchemasNamespaceSlugAccessGroupRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Deletev1SchemasNamespaceSlugAccessGroupRequest' from JSON`,
  );
}
