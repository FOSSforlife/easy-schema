import { FieldSchema } from '../parser';

export function zodGenerator(schemaProperties: Array<FieldSchema>): string {
  return (
    'z' +
    schemaProperties
      .map(({ fieldType, specs }) => `.${fieldType}(${specs.join(', ')})`)
      .join('')
  );
}
