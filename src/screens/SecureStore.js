/**
 * 持久化键值对
 */
import {SecureStore} from 'expo';
import {Alert} from "react-native";

export async function saveKeyValue(key, value) {

  try {
	// console.log('securestore: ' + SecureStore);
	await SecureStore.setItemAsync(key, value, {});

	// Alert.alert('Success!', 'Value: ' + value + ', stored successfully for key: ' + key, [
	// { text: 'OK', onPress: () => {} },
	// ]);

  } catch (e) {
	Alert.alert('Error!', e.message, [{
	  text: 'OK', onPress: () => {
	  }
	}]);
  }
}

export async function getValueByKey(key) {

  try {
	const fetchedValue = await SecureStore.getItemAsync(key, {});
	// Alert.alert('Success!', 'Fetched value: ' + fetchedValue, [
	// { text: 'OK', onPress: () => {} },
	// ]);

	return fetchedValue;

  } catch (e) {
	Alert.alert('Error!', e.message, [{
	  text: 'OK', onPress: () => {
	  }
	}]);

	return e.message;
  }
}
