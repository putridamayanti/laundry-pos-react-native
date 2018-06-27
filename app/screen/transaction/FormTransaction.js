/**
 * Created by PutriDamayanti on 6/26/2018.
 */
import React from 'react';
import { StyleSheet, ScrollView, Platform, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    Card, CardItem, Form, Item, Input, Picker, DatePicker, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Color from '../../style/Color';

import { Constants } from 'expo';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#030303",
        height: Constants.statusBarHeight,
    },
    content: {
        padding: 20
    },
    textCenter: {
        alignItems: 'center'
    },
    item: {
        marginBottom: 20
    },
    label: {
        fontSize: 14,
        color: '#414042',
        marginBottom: 3
    }
});

export default class DashboardScreen extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);

        this.state = { selected: 'key1' };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <View>
                <Header style={styles.statusBar}/>
                <ScrollView>
                    <Header style={{backgroundColor: Color.red}}>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                        <Title>Transaksi</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content style={styles.content}>
                        <Card style={{marginTop: 20}}>
                            <CardItem header>
                                <Text>Tambah Transaksi</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Label style={styles.label}>Nama Pelanggan</Label>
                                <Item regular style={styles.item}>
                                    <Input/>
                                </Item>

                                <Label style={styles.label}>Jumlah</Label>
                                <Item regular style={styles.item}>
                                    <Input keyboardType = 'numeric'/>
                                </Item>

                                <Label style={styles.label}>Pilih Produk</Label>
                                <Item regular style={styles.item}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                                        placeholder="Select your SIM"
                                        style={{ width: '100%' }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Picker.Item label="Cuci Kering" value="key1" />
                                        <Picker.Item label="Cuci Setrika" value="key2" />
                                        <Picker.Item label="Cuci Mamel" value="key3" />
                                        <Picker.Item label="Setrika" value="key4" />
                                    </Picker>
                                </Item>

                                <Label style={styles.label}>Waktu Selesai</Label>
                                <Item regular style={styles.item}>
                                    <Grid>
                                        <Col>
                                            <DatePicker
                                                style={{ width: '100%' }}
                                                defaultDate={new Date()}
                                                minimumDate={new Date(2018, 1, 1)}
                                                maximumDate={new Date(2018, 12, 31)}
                                                locale={"en"}
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"default"}
                                                placeHolderText="Select Date"
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={this.setDate}
                                            />
                                        </Col>
                                    </Grid>
                                </Item>
                                <Button block style={{backgroundColor: Color.pink}}>
                                    <Text>Tambah</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                    <Footer style={{ backgroundColor: '#f1f2f2', padding: 8 }}>
                        <Text style={{ color: '#d3d3d3', fontSize: 11 }}>Copyright@putri2018</Text>
                    </Footer>
                </ScrollView>
            </View>
        );
    }
}