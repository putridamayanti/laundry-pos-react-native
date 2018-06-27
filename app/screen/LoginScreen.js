/**
 * Created by PutriDamayanti on 6/24/2018.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import Color from '../style/Color';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = { header: null };

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <Text>Welcome To Laundry App</Text>
                    <Form>
                        <Item regular style={style.item}>
                            <Icon active name='ios-people' />
                            <Input placeholder='Username'/>
                        </Item>
                        <Item regular style={style.item}>
                            <Icon active name='key' />
                            <Input placeholder='Password' secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <Button block style={style.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 100,
        padding: 20,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: Color.red
    },
    item: {
        marginBottom: 20
    }
});