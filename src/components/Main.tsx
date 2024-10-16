import React, { useState } from 'react';
import { Clipboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputBox from './ass2comps/InputBox';
import Output from './ass2comps/Output';
import Btn from './ass2comps/Btn';
import FormCheckBox from './ass2comps/FormCheckBox';
import { generatePasswordString } from './ass2comps/utility/passwordGenerator';
import {
  showErrorSnackbar,
  showInfoSnackBar,
  showSuccessSnackBar,
} from './ass2comps/utility/utils';
import { PasswordRequirement } from './ass2comps/utility/Consts';

export default function Main(): React.JSX.Element {
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checklist, setChecklist] = useState<boolean[]>([false, false, false, false]);

  const handleGenerate = () => {
    if (number.length === 0) {
      showErrorSnackbar('Please enter password length');
      setPassword('');
    } else if (isNaN(+number)) {
      showErrorSnackbar('Please enter a number for password length');
      setPassword('');
    } else if (+number < 8 || +number > 16) {
      showErrorSnackbar('Please enter password length between 8 and 16 (inclusive)');
      setPassword('');
    } else if (!checklist[0] && !checklist[1] && !checklist[2] && !checklist[3]) {
      setPassword('');
      showErrorSnackbar('Please Choose a complexity');
    } else {
      const input: PasswordRequirement = {
        length: +number,
        includeUpper: checklist[0],
        includeLower: checklist[1],
        includeNumber: checklist[2],
        includeSymbol: checklist[3],
      };

      setPassword(generatePasswordString(input));
    }
  };

  const handleReset = () => {
    setNumber('');
    setPassword('');
    setChecklist([false, false, false, false]);
    showInfoSnackBar('All inputs have been reset');
  };
  const handleCopy = () => {
    Clipboard.setString(password);
    showSuccessSnackBar('Password copied to clipboard');
  };

  return (
    <SafeAreaView>
      <Text style={styles.header}>Password Generator</Text>
      <InputBox number={number} setNumber={setNumber} />
      <View style={styles.formContainer}>
        <FormCheckBox
          checklist={checklist}
          setChecklist={setChecklist}
          id={0}
          label="Upper Case Letter"
          color="blue"
        />
        <FormCheckBox
          checklist={checklist}
          setChecklist={setChecklist}
          id={1}
          label="Lower Case Letter"
          color="green"
        />
        <FormCheckBox
          checklist={checklist}
          setChecklist={setChecklist}
          id={2}
          label="Special Characters"
          color="orange"
        />
        <FormCheckBox
          checklist={checklist}
          setChecklist={setChecklist}
          id={3}
          label="Numbers"
          color="purple"
        />
      </View>
      <Output generatedPassword={password} placeholder={'Select Options'} handleCopy={handleCopy} />
      <Btn type={1} title="Generate Password" onPress={handleGenerate} />
      <Btn type={2} title="Reset" onPress={handleReset} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    gap: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#000080',
  },
});
