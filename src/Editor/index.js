import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import TreeViewPlugin from "./plugins/TreeViewPlugin";

import editorConfig from "./editorConfig";
import onChange from "./onChange";

import "./index.css";

const Placeholder = () => <div className="editor-placeholder">Enter some plain text...</div>;

export default function Editor(props) {
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <PlainTextPlugin
                    contentEditable={<ContentEditable className="editor-input" />}
                    placeholder={<Placeholder />}
                />
                <OnChangePlugin onChange={onChange} />
                <HistoryPlugin />
                <TreeViewPlugin />
            </div>
        </LexicalComposer>
    )
}