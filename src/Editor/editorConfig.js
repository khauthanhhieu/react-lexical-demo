import { EmojiNode } from "./nodes/EmojiNode";
import DefaultTheme from "./theme/DefaultTheme";

const editorConfig = {
  theme: DefaultTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode]
};

export default editorConfig;
