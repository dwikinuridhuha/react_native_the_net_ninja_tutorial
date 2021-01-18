import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function AddTodo({submitHandler}) {
    const [text, setText] = useState((''));

    const changeText = (val) => {
        setText(val);
    };

    const handleSubmit = (ok) => {
        submitHandler(ok);
        setText('');
    }

    return (
        <View>
            <TextInput
                style={styes.input}
                placeholder="ketik..."
                onChangeText={changeText}
                value={text}
            />

            <Button onPress={() => handleSubmit(text)} title="add todo" color='coral'/>
        </View>
    )
}

const styes = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderBottomWidth: 6,
        borderBottomColor: '#add'
    }
});