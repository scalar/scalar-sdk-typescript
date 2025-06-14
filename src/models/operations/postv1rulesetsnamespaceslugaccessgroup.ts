/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Postv1RulesetsNamespaceSlugAccessGroupRequestBody = {
  accessGroupSlug: string;
};

export type Postv1RulesetsNamespaceSlugAccessGroupRequest = {
  namespace: string;
  slug: string;
  requestBody: Postv1RulesetsNamespaceSlugAccessGroupRequestBody;
};

/** @internal */
export const Postv1RulesetsNamespaceSlugAccessGroupRequestBody$inboundSchema:
  z.ZodType<
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessGroupSlug: z.string(),
  });

/** @internal */
export type Postv1RulesetsNamespaceSlugAccessGroupRequestBody$Outbound = {
  accessGroupSlug: string;
};

/** @internal */
export const Postv1RulesetsNamespaceSlugAccessGroupRequestBody$outboundSchema:
  z.ZodType<
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody$Outbound,
    z.ZodTypeDef,
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody
  > = z.object({
    accessGroupSlug: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Postv1RulesetsNamespaceSlugAccessGroupRequestBody$ {
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody$inboundSchema;
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody$outboundSchema;
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequestBody$Outbound` instead. */
  export type Outbound =
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody$Outbound;
}

export function postv1RulesetsNamespaceSlugAccessGroupRequestBodyToJSON(
  postv1RulesetsNamespaceSlugAccessGroupRequestBody:
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody,
): string {
  return JSON.stringify(
    Postv1RulesetsNamespaceSlugAccessGroupRequestBody$outboundSchema.parse(
      postv1RulesetsNamespaceSlugAccessGroupRequestBody,
    ),
  );
}

export function postv1RulesetsNamespaceSlugAccessGroupRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  Postv1RulesetsNamespaceSlugAccessGroupRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Postv1RulesetsNamespaceSlugAccessGroupRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Postv1RulesetsNamespaceSlugAccessGroupRequestBody' from JSON`,
  );
}

/** @internal */
export const Postv1RulesetsNamespaceSlugAccessGroupRequest$inboundSchema:
  z.ZodType<
    Postv1RulesetsNamespaceSlugAccessGroupRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    RequestBody: z.lazy(() =>
      Postv1RulesetsNamespaceSlugAccessGroupRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type Postv1RulesetsNamespaceSlugAccessGroupRequest$Outbound = {
  namespace: string;
  slug: string;
  RequestBody: Postv1RulesetsNamespaceSlugAccessGroupRequestBody$Outbound;
};

/** @internal */
export const Postv1RulesetsNamespaceSlugAccessGroupRequest$outboundSchema:
  z.ZodType<
    Postv1RulesetsNamespaceSlugAccessGroupRequest$Outbound,
    z.ZodTypeDef,
    Postv1RulesetsNamespaceSlugAccessGroupRequest
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    requestBody: z.lazy(() =>
      Postv1RulesetsNamespaceSlugAccessGroupRequestBody$outboundSchema
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
export namespace Postv1RulesetsNamespaceSlugAccessGroupRequest$ {
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequest$inboundSchema` instead. */
  export const inboundSchema =
    Postv1RulesetsNamespaceSlugAccessGroupRequest$inboundSchema;
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequest$outboundSchema` instead. */
  export const outboundSchema =
    Postv1RulesetsNamespaceSlugAccessGroupRequest$outboundSchema;
  /** @deprecated use `Postv1RulesetsNamespaceSlugAccessGroupRequest$Outbound` instead. */
  export type Outbound = Postv1RulesetsNamespaceSlugAccessGroupRequest$Outbound;
}

export function postv1RulesetsNamespaceSlugAccessGroupRequestToJSON(
  postv1RulesetsNamespaceSlugAccessGroupRequest:
    Postv1RulesetsNamespaceSlugAccessGroupRequest,
): string {
  return JSON.stringify(
    Postv1RulesetsNamespaceSlugAccessGroupRequest$outboundSchema.parse(
      postv1RulesetsNamespaceSlugAccessGroupRequest,
    ),
  );
}

export function postv1RulesetsNamespaceSlugAccessGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  Postv1RulesetsNamespaceSlugAccessGroupRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Postv1RulesetsNamespaceSlugAccessGroupRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Postv1RulesetsNamespaceSlugAccessGroupRequest' from JSON`,
  );
}
