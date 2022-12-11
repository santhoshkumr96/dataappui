import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView , SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import axios from 'axios';
import LoginContext from './LoginAuthProvider/Context';
import { useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { ActivityIndicator, MD2Colors,Avatar, Card, Title,DefaultTheme, Paragraph ,Modal, Portal, Provider , Chip} from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

const searchList = [
        // {
        //     label : "id",
        //     value : "id"
        // },
        // {
        //     label : "boothNumber",
        //     value : "boothNumber"
        // },
        {
            label : "Name",
            value : "name"
        },
        {
            label : "Father Name",
            value : "father_name"
        },
        // {
        //     label : "age",
        //     value : "age"
        // },
        {
            label : "Gender",
            value : "gender"
        },
        {
            label : "Address 1",
            value : "address_one"
        },
        {
            label : "Address 2",
            value : "address_two"
        },
        {
            label : "Pincode",
            value : "pincode"
        },
        {
            label : "Village",
            value : "village"
        },
        {
            label : "Caste",
            value : "caste"
        },
        {
            label : "Religion",
            value : "religion"
        },
        {
            label : "Serial Id",
            value : "serial_id"
        },
        {
            label : "Roll Id",
            value : "roll_id"
        },
        {
            label : "Scheme Benifit",
            value : "scheme_benifit"
        },
        // {
        //     label : "constituency",
        //     value : "constituency"
        // },
        // {
        //     label : "createdBy",
        //     value : "createdBy"
        // },
        // {
        //     label : "updatedBy",
        //     value : "updatedBy"
        // }
  ];


const defaultValue = [
    // {
    //     label: "age",
    //     value: "33"
    // },
    // {
    //     label: "father_name",
    //     value: "s1"
    // },
    // {
    //     label: "father_name",
    //     value: "s2"
    // }
]

const HomePage = ({logoutFunc}) => {

    const loginContext = useContext(LoginContext);

    const [data,setData] = useState([]);
    const [isDataLoad, setIsDataLoad] = useState(true);
    const [isCreateData, setIsCreateData] = useState(false);
    const [isViewData, setIsViewData] = useState(false);
    const [isEditData, setIsEditData] = useState(false);
    const [isSearchData, setIsSearch] = useState(false);
    const [refresh, setRefresh] = useState(true)


    //THIS IS THE SEARCH SECTION
    const [searchText, setSearchText] = useState('')
    const [showDropDown, setShowDropDown] = useState(false);
    const [ddValue, setDdValue] = useState('');
    const [searchChipData, setSearchChipData] = useState(defaultValue)

    const searchBar = () => {
        setIsSearch(!isSearchData);
    }

    //THIS IS THE MODAL SECTION
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    //THIS IS CREATE SECTION DETAILS
    const [boothNumber, setboothNumber] = useState(loginContext.userDets.boothNumber)
    const [name, setname] = useState('')
    const [fatherName, setfatherName] = useState('')
    const [age, setage] = useState(0)
    const [gender, setgender] = useState('')
    const [addressOne, setaddressOne] = useState('')
    const [addressTwo, setaddressTwo] = useState('')
    const [pinCode, setpinCode] = useState('')
    const [village, setvillage] = useState('')
    const [caste, setcaste] = useState('')
    const [religion, setreligion] = useState('')
    const [serialId, setserialId] = useState('')
    const [rollId, setrollId] = useState('')
    const [schemeBenifit, setschemeBenifit] = useState('')
    const [constituency, setconstituency] = useState(loginContext.userDets.constituency)
    const [createdBy, setcreatedBy] = useState(loginContext.userDets.name)
    const [id,setId] = useState(0)


    const logout = () => {
        logoutFunc();
    }

    const createData = () => {
        setIsCreateData(true);
    }

    const viewData = (data) => {
        setboothNumber(data.boothNumber);
        setname(data.name);
        setfatherName(data.fatherName);
        setage(data.age);
        setgender(data.gender);
        setaddressOne(data.addressOne);
        setaddressTwo(data.addressTwo);
        setpinCode(data.pinCode);
        setvillage(data.village);
        setcaste(data.caste);
        setreligion(data.religion);
        setserialId(data.serialId);
        setrollId(data.rollId);
        setschemeBenifit(data.schemeBenifit);
        setconstituency(data.constituency);
        setcreatedBy(data.createdBy);
        setIsCreateData(true);
        setIsViewData(true);
    }

    const editData = (data) => {
        setId(data.id)
        setboothNumber(data.boothNumber);
        setname(data.name);
        setfatherName(data.fatherName);
        setage(data.age);
        setgender(data.gender);
        setaddressOne(data.addressOne);
        setaddressTwo(data.addressTwo);
        setpinCode(data.pinCode);
        setvillage(data.village);
        setcaste(data.caste);
        setreligion(data.religion);
        setserialId(data.serialId);
        setrollId(data.rollId);
        setschemeBenifit(data.schemeBenifit);
        setconstituency(data.constituency);
        setcreatedBy(data.createdBy);
        setIsCreateData(true);
        setIsEditData(true);
    }

    const deleteData = (data) => {
        setId(data.id)
        setboothNumber(data.boothNumber);
        setname(data.name);
        setfatherName(data.fatherName);
        setage(data.age);
        setgender(data.gender);
        setaddressOne(data.addressOne);
        setaddressTwo(data.addressTwo);
        setpinCode(data.pinCode);
        setvillage(data.village);
        setcaste(data.caste);
        setreligion(data.religion);
        setserialId(data.serialId);
        setrollId(data.rollId);
        setschemeBenifit(data.schemeBenifit);
        setconstituency(data.constituency);
        setcreatedBy(data.createdBy);
        showModal();
    }

    const exitCreateData = () => {
        // setboothNumber('')
        setId('')
        setname('')
        setfatherName('')
        setage(0)
        setgender('')
        setaddressOne('')
        setaddressTwo('')
        setpinCode('')
        setvillage('')
        setcaste('')
        setreligion('')
        setserialId('')
        setrollId('')
        setschemeBenifit('')
        // setconstituency('')
        // setcreatedBy('')
        setIsCreateData(false);
        setIsViewData(false);
        setIsEditData(false)
    }

    const getData = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        await  axios.post('http://202.21.44.157:9080/bjpapp/api/data',{
            "constituency" : loginContext.userDets.constituency,
            "boothNumber" : loginContext.userDets.boothNumber,
            "searchFilters" : searchChipData
        },{headers}).then((res)=> {
            // console.log(res.data)
            setData(res.data) 
            setIsDataLoad(false)           
        });
    }

    const createDataCall = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        setIsCreateData(false);
        setIsViewData(false);
        setIsEditData(false);
        setIsDataLoad(true)
        await  axios.post('http://202.21.44.157:9080/bjpapp/api/insert-data',{
            "boothNumber":boothNumber,
            "name":name,
            "fatherName":fatherName,
            "age":age,
            "gender":gender,
            "addressOne":addressOne,
            "addressTwo":addressTwo,
            "pinCode":pinCode,
            "village":village,
            "caste":caste,
            "religion":religion,
            "serialId":serialId,
            "rollId":rollId,
            "schemeBenifit":schemeBenifit,
            "constituency":constituency,
            "createdBy":createdBy
        },{headers}).then((res)=> {
            // console.log(res.data)
            exitCreateData()
            setRefresh(!refresh)
        });
    }


    const updateDataCall = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        setIsCreateData(false);
        setIsViewData(false);
        setIsEditData(false);
        setIsDataLoad(true)
        await  axios.post('http://202.21.44.157:9080/bjpapp/api/update-data',{
            "id":id,
            "boothNumber":boothNumber,
            "name":name,
            "fatherName":fatherName,
            "age":age,
            "gender":gender,
            "addressOne":addressOne,
            "addressTwo":addressTwo,
            "pinCode":pinCode,
            "village":village,
            "caste":caste,
            "religion":religion,
            "serialId":serialId,
            "rollId":rollId,
            "schemeBenifit":schemeBenifit,
            "constituency":constituency,
            "createdBy":createdBy,
            "updatedBy":loginContext.userDets.name
        },{headers}).then((res)=> {
            // console.log(res.data)
            exitCreateData()
            setRefresh(!refresh)
        });
    }

    const deleteDataCall = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        setIsDataLoad(true)
        hideModal()
        await  axios.post('http://202.21.44.157:9080/bjpapp/api/delete',{
            "id":id,
            "boothNumber":boothNumber,
            "name":name,
            "fatherName":fatherName,
            "age":age,
            "gender":gender,
            "addressOne":addressOne,
            "addressTwo":addressTwo,
            "pinCode":pinCode,
            "village":village,
            "caste":caste,
            "religion":religion,
            "serialId":serialId,
            "rollId":rollId,
            "schemeBenifit":schemeBenifit,
            "constituency":constituency,
            "createdBy":createdBy,
            "updatedBy":loginContext.userDets.name
        },{headers}).then((res)=> {
            // console.log(res.data)
            exitCreateData()
            hideModal()
            setRefresh(!refresh)
        });
    }

    const hideModalPopUp = () => {
        hideModal();
        exitCreateData();
    }

    const closeChip = (d) => {
        var temp = [...searchChipData];
        temp.splice(d,1)
        setSearchChipData(temp)
        setRefresh(!refresh)
    }

    const addChip = () => {
        var temp = [...searchChipData];
        var temp1 = {label:ddValue, value:searchText};
        console.log(temp)
        if(!(ddValue === "" || searchText === "")){
            temp.push(temp1)
        }
        
        setSearchChipData(temp)
        setRefresh(!refresh)
    }

    useEffect(()=>{
        async function fetchData() {
            setIsDataLoad(true)
            getData()
          }
          fetchData()
    },[refresh])

    return(
        <View>
            <Appbar.Header mode="small"
            statusBarHeight={0}
            style={{backgroundColor:'#f97d09'}}
            >
                {/* <Appbar.BackAction onPress={() => logout()} /> */}
                <Appbar.Content title={<Text style={{color: 'white', fontSize: 25}}>Data app</Text>} />
                {
                    !isViewData && !isEditData && !isCreateData &&
                    <Appbar.Action color={'white'} style={{color: 'white'}} icon="plus"  onPress={() => createData()} />
                }
                                {
                    !isViewData && !isEditData && !isCreateData &&
                    <Appbar.Action color={'white'} icon="account-search-outline"  onPress={() => searchBar()} />
                }
                                {
                    !isViewData && !isEditData && !isCreateData &&
                    <Appbar.Action color={'white'} icon="logout"  onPress={() => logout()} />
                }
            </Appbar.Header>
            {/* <Text>
               sdfalkdsfjakl {JSON.stringify(loginContext.userDets)}
            </Text> */}

            {
                isSearchData && 
                <Card mode='elevated' elevation={3} style={{margin:5}}>
                    <Card.Content>
                        <TextInput
                            label="Search Text"
                            style={styles.textInputeContainer}
                            value={searchText}
                            mode='outlined'
                            selectionColor={'black'}
                            textColor={'black'}
                            outlineColor={'black'}
                            activeOutlineColor={'black'}
                            onChangeText={text => setSearchText(text)}
                        />
                        <View>
                            {/* <Provider style={styles.searchContainerStyle}> */}
                                <SafeAreaView style={styles.textInputeContainer}>
                                    <DropDown
                                    label={""}
                                    placeholder="Search Field"
                                    mode={"outlined"}
                                    value={ddValue}
                                    setValue={setDdValue}
                                    list={searchList}
                                    visible={showDropDown}
                                    showDropDown={() => setShowDropDown(true)}
                                    onDismiss={() => setShowDropDown(false)}
                                    inputProps={{
                                        right: <TextInput.Icon name="eye" />,
                                    }}
                                    />
                                </SafeAreaView>
                            {/* </Provider> */}
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <Button  buttonColor={'#EEEEEE'} textColor={'black'} style={styles.buttonContainer} mode={'outlined'} icon="cancel" onPress={()=>searchBar()}>cancel</Button>
                        <Button  buttonColor={'#829460'} textColor={'white'} style={styles.buttonContainer} mode={'outlined'} icon="location-enter" onPress={()=>addChip()}>Submit</Button>
                    </Card.Actions>
                </Card>
            }


           {/* THIS IS THE VIEW DATA SECTION */}
           { 
                !isCreateData &&
                <View>
                    {
                        isDataLoad &&
                        <ActivityIndicator style={{marginTop:50}} animating={true} color={MD2Colors.red800} />
                    }
                    {
                        !isDataLoad && 
                        <SafeAreaView>
                            <ScrollView>
                                {
                                    !isDataLoad && 
                                    <View>
                                        {
                                            searchChipData.map((d,i) => {
                                                return <Chip style={styles.chip} onClose={()=>closeChip(i)} onPress={() =>closeChip(i)}>{d.label}{' '}{d.value}</Chip>
                                            })
                                        }
                                    </View>
                                }

                                <Card mode='elevated' elevation={3} style={{margin:5}}>
                                    <Card.Content>
                                        {/* <Paragraph> {JSON.stringify(loginContext.userDets)}</Paragraph> */}
                                        <Paragraph> {loginContext.userDets.name}{' '}{loginContext.userDets.constituency}{' '}{loginContext.userDets.boothNumber}</Paragraph>
                                        {/* <Paragraph> {'Constituency: '}{loginContext.userDets.constituency}</Paragraph> */}
                                        {/* <Paragraph> {'Booth Number: '}{loginContext.userDets.boothNumber}</Paragraph> */}
                                    </Card.Content>
                                </Card>

                                <View style={{flex: 1,paddingBottom: 500}}>
                                    {
    
                                        data.map((d, index) => {
                                        return  <Card mode='elevated' elevation={3} style={{margin:5}}>
                                            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                                            <Card.Content>
                                            <Title>{d.name}{'  (Age:'}{d.age}{') '}</Title>
                                            <Paragraph>{'Father Name: '}{d.fatherName}</Paragraph>
                                            <Paragraph>{'Address: '}{d.addressOne}{' '}{d.addressTwo}</Paragraph>
                                            <Paragraph>{'Village Name: '}{d.village}</Paragraph>
                                            <Paragraph>{'Serial ID: '}{d.serialId}</Paragraph>
                                            {/* <Paragraph>{'Pincode: '}{d.pinCode}</Paragraph> */}
                                            {/* <Paragraph>{'Age: '}{d.age}</Paragraph> */}
                                            {/* <Paragraph>{'Id: '}{d.id}</Paragraph> */}
                                            {/* <Paragraph>{JSON.stringify(d)}</Paragraph> */}
                                            </Card.Content>
                                            <Card.Actions>
                                            <Button  textColor={'black'} icon="eye" onPress={()=>viewData(d)}>View</Button>
                                            <Button  buttonColor={'#47B5FF'} icon="pen" onPress={()=>editData(d)}>Edit</Button>
                                            <Button  buttonColor={'#DD5353'} icon="delete" onPress={()=>deleteData(d)}>Delete</Button>
                                            </Card.Actions>
                                        </Card>
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </SafeAreaView>

                    }
                </View>
            }



            {/* THIS IS THE CREATE DATA SECTION */}
            {
                isCreateData &&
                    <ScrollView>
                        <View style={{flex: 1,paddingBottom: 500}}>
                            <TextInput
                                style={styles.textInputeContainer}
                                label="Booth Number"
                                value={boothNumber}
                                mode='outlined'
                                disabled
                                onChangeText={text => setboothNumber(text)}
                            />

                            <TextInput
                                style={styles.textInputeContainer}
                                label="Name"
                                value={name}
                                mode='outlined'
                                onChangeText={text => setname(text)}
                            />

                            <TextInput
                                 style={styles.textInputeContainer}
                                label="Father Name"
                                value={fatherName}
                                mode='outlined'
                                onChangeText={text => setfatherName(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Age"
                                keyboardType='numeric'
                                value={age+''}
                                mode='outlined'
                                onChangeText={text => setage(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Gender"
                                value={gender}
                                mode='outlined'
                                onChangeText={text => setgender(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Address One"
                                value={addressOne}
                                mode='outlined'
                                onChangeText={text => setaddressOne(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Address Two"
                                value={addressTwo}
                                mode='outlined'
                                onChangeText={text => setaddressTwo(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Pincode"
                                keyboardType='numeric'
                                value={pinCode}
                                mode='outlined'
                                onChangeText={text => setpinCode(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Village"
                                value={village}
                                mode='outlined'
                                onChangeText={text => setvillage(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Caste"
                                value={caste}
                                mode='outlined'
                                onChangeText={text => setcaste(text)}
                            />

                            <TextInput 
                            style={styles.textInputeContainer}
                                label="Religion"
                                value={religion}
                                mode='outlined'
                                onChangeText={text => setreligion(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Serial Id"
                                value={serialId}
                                mode='outlined'
                                // disabled={isEditData}
                                onChangeText={text => setserialId(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Roll Id"
                                value={rollId}
                                mode='outlined'
                                // disabled={isEditData}
                                onChangeText={text => setrollId(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Scheme Benifit"
                                value={schemeBenifit}
                                mode='outlined'
                                onChangeText={text => setschemeBenifit(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="Constituency"
                                disabled
                                value={constituency}
                                mode='outlined'
                                onChangeText={text => setconstituency(text)}
                            />

                            <TextInput
                             style={styles.textInputeContainer}
                                label="CreatedBy"
                                disabled
                                value={createdBy}
                                mode='outlined'
                                onChangeText={text => setcreatedBy(text)}
                            />
                            {
                                !isViewData && !isEditData &&
                                <Button  buttonColor={'#829460'} style={styles.buttonContainer} icon="check" mode="contained" onPress={() => createDataCall()}>
                                    Submit
                                </Button>
                            }
                            {
                                isEditData &&
                                <Button  buttonColor={'#829460'} style={styles.buttonContainer} icon="check" mode="contained" onPress={() => updateDataCall()}>
                                     Update
                                </Button>
                            }
                            <Button buttonColor='#EEEEEE' textColor={'black'} style={styles.buttonContainer} icon="cancel" mode="outlined" onPress={() => exitCreateData()}>
                                Cancel
                            </Button>
                        </View>
                    </ScrollView>
            }

            <Modal style={styles.buttonContainer} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text>Are you sure.</Text>
                <Button buttonColor={'#DD5353'} style={styles.buttonContainer} icon="delete" mode="contained" onPress={() => deleteDataCall()}>
                    Delete
                </Button>
                <Button  buttonColor='#EEEEEE' textColor={'black'} style={styles.buttonContainer} icon="cancel" mode="outlined" onPress={() => hideModalPopUp()}>
                    Cancel
                </Button>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    chip: {
        // flex: 1,
        margin: 7
    },
    searchContainerStyle: {

    // flex:  1,
    
    // marginHorizontal:  20,
    
    // justifyContent:  'center',
    
    },
    textInputeContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop:10,
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        // backgroundColor: '#ffffff',
    },
  });

  
export default HomePage;
