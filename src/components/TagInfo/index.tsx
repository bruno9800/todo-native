import { Text, View } from "react-native";
import { styles } from "./styles";

interface TagInfoProps {
  tagName: string;
  type?: "primary" | "secundary";
  counter: number;
}

export function TagInfo({ tagName, counter, type = "primary" }: TagInfoProps) {
  const tagStyle = type === "primary" ? styles.tagPrimary : styles.tagSecundary;
  return (
    <View style={styles.container}>
      <Text style={[styles.tag, tagStyle]}>{tagName}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoValue}>{counter}</Text>
      </View>
    </View>
  );
}
