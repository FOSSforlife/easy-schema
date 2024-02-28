import { parse } from 'yaml';
import { z } from 'zod';

type FieldType = string; // should be the name of a first-order Zod function, e.g. z.string()
type FieldSpec = string; // should be the name of a second-order Zod function, e.g. .email()

// databases contain models, models contain fields
export type FieldSchema = { fieldType: FieldType; specs: Array<FieldSpec> };
export type ModelSchema = Record<string, FieldSchema>;
export type DatabaseSchema = Record<string, ModelSchema>;

export const parseText = (yamlContent: string): DatabaseSchema => {
  const parsed = parse(yamlContent);
  const databaseInputSchema = z.record(z.array(z.string()));
  const databaseInput = databaseInputSchema.parse(parsed);
  // TODO: throw error if schema is not valid

  // each key is the name of the model, each value is an array of the model's fields
  return Object.entries(databaseInput).reduce(
    (databaseObj, [modelName, modelSchemaInput]) => {
      databaseObj[modelName] = modelSchemaInput.reduce(
        (modelObj, fieldName) => {
          modelObj[fieldName] = {
            fieldType: 'string',
            specs: [],
          };
          return modelObj;
        },
        {} as ModelSchema
      );
      return databaseObj;
    },
    {} as DatabaseSchema
  );
};
