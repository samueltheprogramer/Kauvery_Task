import {Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icons2 from 'react-native-vector-icons/Octicons';
import {ScaledSheet} from 'react-native-size-matters';

const EditEducationDetails = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.backButton}>
          <Icons name="keyboard-arrow-left" size={30} color="black" />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit education details</Text>
          <Text style={styles.subtitle}>
            Fields marked <Text style={styles.mandatoryText}>*</Text> are
            mandatory
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={[styles.inputLabel, text1 !== '' && styles.floatingLabel]}>
            Degree<Text style={styles.mandatoryText}>*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText1(newText)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={[styles.inputLabel, text2 !== '' && styles.floatingLabel]}>
            Enter institute<Text style={styles.mandatoryText}>*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText2(newText)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={[styles.inputLabel, text3 !== '' && styles.floatingLabel]}>
            Start year<Text style={styles.mandatoryText}>*</Text>
          </Text>
          <View style={styles.iconContainer}>
            <Icons2 name="calendar" color="#9ca3af" size={25} />
          </View>
          <TextInput
            onChangeText={newText => setText3(newText)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={[styles.inputLabel, text4 !== '' && styles.floatingLabel]}>
            End year<Text style={styles.mandatoryText}>*</Text>
          </Text>
          <View style={styles.iconContainer}>
            <Icons2 name="calendar" color="#9ca3af" size={25} />
          </View>
          <TextInput
            onChangeText={newText => setText4(newText)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={[styles.inputLabel, text5 !== '' && styles.floatingLabel]}>
            Description<Text style={styles.mandatoryText}>*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText5(newText)}
            multiline={true}
            style={styles.descriptionInput}
            textAlignVertical="top"
            scrollEnabled={true}
          />
        </View>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Update </Text>
        </Pressable>
        <Pressable style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete information </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingVertical: '30@s',
    paddingHorizontal: '4@s',
    gap: '2@ms',
  },
  innerContainer: {
    paddingHorizontal: '16@s',
    flexDirection: 'column',
    gap: '5@ms',
  },
  backButton: {
    backgroundColor: 'white',
    width: '40@s',
    height: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    borderRadius: '20@s',
  },
  titleContainer: {
    marginVertical: '20@s',
  },
  title: {
    fontSize: '20@s',
    fontWeight: '600',
    color: 'black',
  },
  subtitle: {
    color: '#9ca3af',
  },
  mandatoryText: {
    color: '#dc2626',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: '16@ms',
  },
  inputLabel: {
    position: 'absolute',
    top: '12@s',
    left: '12@s',
    fontSize: '16@s',
    color: '#9ca3af',
    fontWeight: '500',
  },
  floatingLabel: {
    top: '-10@s',
    backgroundColor: 'white',
    zIndex: 1,
    paddingHorizontal: '4@s',
  },
  input: {
    borderWidth: '2@s',
    borderRadius: '8@s',
    borderColor: '#d1d5db',
    paddingHorizontal: '16@s',
    fontSize: '16@s',
    color: '#374151',
    height: '48@s',
  },
  descriptionInput: {
    borderWidth: '2@s',
    borderRadius: '8@s',
    borderColor: '#d1d5db',
    padding: '16@s',
    fontSize: '16@s',
    color: '#374151',
    height: '160@s',
  },
  iconContainer: {
    position: 'absolute',
    right: '12@s',
    top: '12@s',
  },
  button: {
    marginVertical: '10@s',
    backgroundColor: '#6b7280',
    borderRadius: '8@s',
    paddingVertical: '12@s',
    alignItems: 'center',
    marginHorizontal: '8@s',
  },
  buttonText: {
    fontSize: '18@s',
    color: 'white',
    textAlign: 'center',
  },
  deleteButtonText: {
    fontSize: '18@s',
    color: 'red',
    fontWeight: '500',
    textAlign: 'center',
  },
  deleteButton: {
    marginVertical: '10@s',
    backgroundColor: 'white',
    borderRadius: '8@s',
    paddingVertical: '12@s',
    alignItems: 'center',
    marginHorizontal: '8@s',
  },
});

export default EditEducationDetails;
