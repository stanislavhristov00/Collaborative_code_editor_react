import React, {useEffect, useRef, useState } from 'react';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css' // Default css styles
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript'; // Js style mode

const Editor = ({ value, theme, language, onChange}) => {
    const textAreaRef = useRef();
    const [code, setCode] = useState(value);

    useEffect(() => {
        const editor = CodeMirror.fromTextArea(textAreaRef.current, {
            lineNumbers: true,
            mode: language,
            theme: theme,
            autoRefresh: false,
        });

        editor.on('change', (instance) => {
            setCode(instance.getValue());
        });

        return () => {
            editor.toTextArea();
        }
    }, [onChange, theme, language]);

    return <textarea ref={textAreaRef} defaultValue={value} />;
};

export default Editor;