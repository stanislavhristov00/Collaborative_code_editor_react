import React, {useEffect, useRef, useState } from 'react';
import * as CodeMirror from 'codemirror';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'

const CPP_MODE = "text/x-c++src";
const C_MODE = "text/x-csrc";
const PYTHON_MODE = "python";
const JAVASCRIPT_MODE = "javascript";
const JAVA_MODE = "text/x-java";

function GetMode(language) {
    if (language === "C++") return CPP_MODE;
    if (language === "C") return C_MODE;
    if (language === "Python") return PYTHON_MODE;
    if (language === "Javascript") return JAVASCRIPT_MODE;
    if (language === "Java") return JAVA_MODE;

    return "UNKNOWN";
}

const Editor = ({ value, theme, language, onChange}) => {
    const textAreaRef = useRef();
    const editorRef = useRef(null);
    const [code, setCode] = useState(value);

    useEffect(() => {
        if (!editorRef.current) {
            editorRef.current = CodeMirror.fromTextArea(textAreaRef.current, {
                lineNumbers: true,
                mode: language,
                theme: theme,
                autoRefresh: false,
            });

            editorRef.current.on('change', (instance) => {
                console.log("Setting code");
                setCode(instance.getValue());

                if (onChange) {
                    onChange(instance.getValue());
                }
            });
        }

        if (editorRef.current) {
            editorRef.current.setOption('theme', theme);
            editorRef.current.setOption('mode', GetMode(language));
        }
    }, [onChange, theme, language]);

    return <textarea ref={textAreaRef} defaultValue={value} />;
};

export default Editor;