import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi, { ObjectSchema, ValidationResult } from "joi";

import ApiError from "../utils/apiError.js";
import pick from "../utils/pick.js";

interface IValidate {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}

const validate = (schema: IValidate) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema) as (keyof Request)[]);
    const validationResult: ValidationResult = Joi.object(validSchema)
      .prefs({ abortEarly: false, errors: { label: "key" } })
      .validate(object);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, value } = validationResult;

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(", ");
      next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
      return;
    }

    Object.assign(req, value);
    next();
  };
};

export default validate;
