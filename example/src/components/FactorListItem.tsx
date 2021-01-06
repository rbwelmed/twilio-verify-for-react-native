import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import type { Factor } from 'react-native-twilio-verify';
import FactorComponent from './Factor';

type FactorListItemProps = {
  item: Factor;
  onPress: (factor: Factor) => void;
};

const FactorListItem = ({ item, onPress }: FactorListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <FactorComponent factor={item} styles={styles} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 5,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 20,
  },
});

export default FactorListItem;
