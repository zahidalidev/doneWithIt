import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup"

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';


// validation schema for form
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container} >
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={value => console.log(value)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            icon="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <ErrorMessage visible={touched.email} error={errors.email} />

                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onBlur={() => setFieldTouched("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("password")}
                        />
                        <ErrorMessage visible={touched.password} error={errors.password} />

                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;