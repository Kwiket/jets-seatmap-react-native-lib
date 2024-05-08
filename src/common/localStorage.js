import AsyncStorage from '@react-native-async-storage/async-storage';

const ERROR_SAVE_DATA_MESSAGE = 'Error saving data to local storage. Message:';
const ERROR_LOAD_DATA_MESSAGE = 'Error getting data from local storage. Message:';

export class JetsLocalStorageService {
  async getData(key) {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (!storedData) return null;

      const {value, expiry} = JSON.parse(storedData);
      const now = new Date().getTime();

      if (!value || expiry < now) {
        await this.removeData(key);
        return null;
      }

      return value;
    } catch (err) {
      console.log(ERROR_LOAD_DATA_MESSAGE, err);
      return null;
    }
  }

  async setData(key, value, ttl) {
    try {
      const data = {value};

      if (ttl) {
        data['expiry'] = new Date().getTime() + ttl;
      }

      await AsyncStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.log(ERROR_SAVE_DATA_MESSAGE, err);
      return false;
    }
  }

  async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log('Error removing item: ', err);
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log('Error clearing storage: ', err);
    }
  }
}
