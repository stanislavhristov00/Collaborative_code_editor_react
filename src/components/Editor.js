import React, {useEffect, useRef, useState } from 'react';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css' // Default css styles
import 'codemirror/mode/javascript/javascript'; // Js style mode

const Editor = ({ value, onChange}) => {
    const textAreaRef = useRef();
    const [code, setCode] = useState(value);

    useEffect(() => {
        const editor = CodeMirror.fromTextArea(textAreaRef.current, {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'default',
            autoRefresh: false,
        });

        editor.on('change', (instance) => {
            console.log('We updatin');
            setCode(instance.getValue());
        });

        return () => {
            editor.toTextArea();
        }
    }, [onChange]);

    return <textarea ref={textAreaRef} defaultValue={value} />;
};

export default Editor;