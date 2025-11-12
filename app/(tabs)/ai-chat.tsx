// import { useChat } from "@ai-sdk/react";
import { useUser } from "@clerk/clerk-expo";
// import { DefaultChatTransport } from "ai";
import React, { useRef, useState } from "react";
import {
    ScrollView
} from "react-native";
// import Markdown from "react-native-markdown-display";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "tamagui";

export default function AIChatScreen() {
  const [input, setInput] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();
  const { user } = useUser();

  return (
<View>
    Hello ai-chat</View>
  );
}