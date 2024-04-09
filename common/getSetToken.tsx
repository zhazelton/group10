import * as SecureStore from "expo-secure-store";

export const setToken = async (token: any) => {
  try {
    let hash = await SecureStore.setItemAsync("i_hash", token);

    return hash;
  } catch (e) {
    return null;
  }
};
export const getToken = async () => {
  try {
    let hash = await SecureStore.getItemAsync("i_hash");

    return hash;
  } catch (e) {
    return null;
  }
};

export const removeToken = async () => {
  let hash = await SecureStore.deleteItemAsync("i_hash");
  return hash;
};