(
  (function_declaration (simple_identifier) @name) @definition.function
)

(
  (class_declaration (type_identifier) @name) @definition.class
)

(
  (object_literal  (delegation_specifier) @name) @definition.object
)

(
  (type_alias (type_identifier) @name) @definition.type
)

(
  (import_header (identifier) @name) @definition.import
)