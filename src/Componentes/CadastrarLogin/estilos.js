import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        width: "90%",
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    texto: {
        color: '#fff'
    },

    backButton: {
        position: 'absolute',
        left: 20,
        top: 50,
    }
})