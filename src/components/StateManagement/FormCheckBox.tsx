import React, { Dispatch, SetStateAction } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function FormCheckBox(props: {
  checklist: boolean[];
  setChecklist: Dispatch<SetStateAction<boolean[]>>;
  id: number;
  label: string;
  color: string;
}): React.JSX.Element {
  const handlePress = () => {
    const checklistHolder = props.checklist;
    checklistHolder[props.id] = !props.checklist[props.id];
    props.setChecklist(checklistHolder);
  };

  return (
    <BouncyCheckbox
      text={props.label}
      fillColor={props.color}
      isChecked={props.checklist[props.id]}
      onPress={handlePress}
    />
  );
}
