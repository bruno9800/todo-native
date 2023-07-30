import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { TagInfo } from "../../components/TagInfo";
import { TaskTile } from "../../components/TaskTile";
import { useState } from "react";
import { BlankList } from "../../components/BlankList";
export function Home() {
  const [inputLabel, setInputLabel] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksDones, setTasksDones] = useState<number>(0);

  function handleOnChangeInputLabel(label: string) {
    setInputLabel(label);
  }

  function handleOnSubmit() {
    if (inputLabel === "") {
      return Alert.alert("Ops!", "Insira uma task válida");
    }
    if (tasks.includes(inputLabel)) {
      return Alert.alert("Ops!", "Essa task já existe");
    }
    setTasks((state) => [...state, inputLabel]);
    setInputLabel("");
  }

  function handleOnRemoveTask(taskToRemove: string) {
    setTasks((state) => state.filter((task) => task !== taskToRemove));
  }

  function handleOnTaskCheckboxChange(checked: boolean) {
    if (checked) {
      setTasksDones((state) => state + 1);
    } else {
      setTasksDones((state) => state - 1);
    }
  }

  console.log(inputLabel);
  return (
    <View style={styles.container}>
      <Header
        inputLabel={inputLabel}
        onChange={handleOnChangeInputLabel}
        onSubmit={handleOnSubmit}
      />
      <View style={styles.content}>
        <View style={styles.infos}>
          <TagInfo tagName="Criadas" counter={tasks.length} />
          <TagInfo tagName="Concluídas" type="secundary" counter={tasksDones} />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(task) => task}
          renderItem={({ item }) => (
            <TaskTile
              task={item}
              key={item}
              onRemove={handleOnRemoveTask}
              onChecked={handleOnTaskCheckboxChange}
            />
          )}
          style={styles.listTasks}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={BlankList}
        />
      </View>
    </View>
  );
}
