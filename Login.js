import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import axios from 'axios';
import LoginContext from './LoginAuthProvider/Context';
import { useEffect } from 'react';
import HomePage from './HomePage';



const Login = () => {

    const loginContext = useContext(LoginContext);

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [showLoginPage, setShowLoginPage] = React.useState(true)

    const logoutFunc = () => {
        setPassword('')
        setShowLoginPage(true)
        loginContext.setUserDets({})
    }

    const login = async () => {
        console.log("checkgin loging ", password, email)
        const headers = {
            "Content-Type": "application/json",
        };
        await  axios.post('http://202.21.44.157:9080/bjpapp/api/login',{
            "username" :email,
            "password" : password
        },{headers}).then((res)=> {
            console.log(res.data)
            if (res.data.length > 0) {
                loginContext.setUserDets(res.data[0])
            } else {
                loginContext.setUserDets({}) 
            }
            
        });
    }

    useEffect(()=>{
       
        if (Object.keys(loginContext.userDets).length > 0){
            console.log("logged")
            setShowLoginPage(false)
        } else {
            console.log("not logged")
            setShowLoginPage(true)
        }
        
    },[loginContext.userDets])

    return (
        <View >
            {
                showLoginPage &&           
                <View style={styles.loginContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={require('./assests/bjp.png')}
                    />
                    <TextInput style={styles.textInputeContainer}
                        label="email"
                        value={email}
                        selectionColor={'black'}
                        textColor={'black'}
                        outlineColor={'black'}
                        activeOutlineColor={'black'}
                        mode='outlined'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput style={styles.textInputeContainer}
                        label="password"
                        value={password}
                        selectionColor={'black'}
                        textColor={'black'}
                        outlineColor={'black'}
                        activeOutlineColor={'black'}
                        secureTextEntry
                        mode='outlined'
                        onChangeText={text => setPassword(text)}
                    />
                    <Button 
                     style={styles.buttonContainer} 
                     icon="login" 
                     buttonColor={'#f97d09'}
                     mode="contained" 
                     onPress={() => login()}>
                        login
                    </Button>
                </View>
            }

            {
                !showLoginPage &&        
                <HomePage logoutFunc={logoutFunc}/>
            }
        </View>
      );
}

const styles = StyleSheet.create({
    textInputeContainer: {
        margin: 20,
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        margin: 20,
        // backgroundColor: '#ffffff',
    },
    imageStyle:{
        marginLeft:120,
        marginTop:50,
        alignContent:'center',
        justifyContent:'center',
        width: 150,
        height: 150
    },
    loginContainer: {
        // alignItems: 'center',
        justifyContent: 'center',
        // width: 200,
        // height: 500,
        // backgroundColor: '#FF6666',
        // flex: 1
    }
  });

export default Login;