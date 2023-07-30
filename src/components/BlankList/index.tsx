import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export function BlankList() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <View>
        <Text style={[styles.text, styles.bold]}>
          Você ainda não tem tarefas caastradas
        </Text>
        <Text style={[styles.text, styles.regular]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
