import { Image, Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface HeaderProps {
  inputLabel: string;
  onChange: (label: string) => void;
  onSubmit: () => void;
}

export function Header({ inputLabel, onChange, onSubmit }: HeaderProps) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/Logo.png")}
        height={70}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          style={[styles.input, focus && styles.inputFocus]}
          value={inputLabel}
          onChangeText={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <EvilIcons name="plus" size={24} color={"#F2F2F2"} />
        </Pressable>
      </View>
    </View>
  );
}
