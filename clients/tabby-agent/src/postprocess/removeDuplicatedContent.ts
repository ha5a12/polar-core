import { PostprocessFilter, PostprocessContext, logger } from "./filter";

export const removeDuplicatedContent: (context: PostprocessContext) => PostprocessFilter = (context) => {
  return (input) => {
    const suffix = context.text.slice(context.position);
    for (let index = Math.max(0, input.length - suffix.length); index < input.length; index++) {
      if (input.slice(index) === suffix.slice(0, input.length - index)) {
        logger.debug({ input, suffix, duplicateAt: index }, "Remove duplicate content");
        return input.slice(0, index);
      }
    }
    return input;
  };
};
