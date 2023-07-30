import { Pressable, Task, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { styles } from "./styles";
import { useState } from "react";
import { THEME } from "../../theme";

interface TaskProps {
  task: string;
  onRemove: (task: string) => void;
  onChecked: (checked: boolean) => void;
}

export function TaskTile({ task, onRemove, onChecked }: TaskProps) {
  const [isChecked, setChecked] = useState(false);

  function handleChecked(e: boolean) {
    setChecked(e);
    onChecked(e);
  }

  function handleRemove() {
    if (isChecked) {
      onChecked(false);
    }
    onRemove(task);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable
          onPress={() => handleChecked(!isChecked)}
          style={styles.taskChecked}
        >
          <Checkbox
            style={styles.check}
            value={isChecked}
            onValueChange={(e) => handleChecked(e)}
            color={isChecked ? THEME.COLORS.PURPLE_DARK : THEME.COLORS.BLUE}
          />
          <Text style={styles.task}>{task}</Text>
        </Pressable>
        <Pressable style={styles.trash} onPress={handleRemove}>
          <EvilIcons name="trash" size={32} color={THEME.COLORS.DANGER} />
        </Pressable>
      </View>
    </View>
  );
}
