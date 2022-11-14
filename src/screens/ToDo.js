import { format } from "date-fns";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const ToDo = () => {
  const posts = [
    {
      id: 1,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2022-11-26",
    },
    {
      id: 2,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2022-11-27",
    },
  ];

  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  const [modalState, setModalState] = useState(false);

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={markedSelectedDates}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setModalState(!modalState);
        }}
        theme={{
          selectedDayBackgroundColor: "#009688",
          arrowColor: "#009688",
          dotColor: "#009688",
          todayTextColor: "#009688",
        }}
      />
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={modalState}
          onRequestClose={() => {
            setModalState(!modalState);
            console.log("modal appearance");
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeBnt}
              onPress={() => {
                setModalState(!modalState);
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.toDo}>
              <Text >Modal</Text>
            </View>
            <Button title="저장" onPress={() => {}} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  modalView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
    marginTop: 400,
    padding: 5,
    borderRadius: 0,
    borderColor: "#cccccc",
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  closeBnt: {
    marginLeft: "90%",
  },
  toDo: {
    flex: 0.8,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    backgroundColor: "lightgray",
  },
});

export default ToDo;
