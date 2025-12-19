import { useThemeStore } from "@/store/theme";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import { Camera } from "lucide-react-native";
import { useState } from "react";
import {
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const { toggleTheme } = useThemeStore();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View className=" flex-1">
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          padding: 10,
        }}
        refreshControl={
          <RefreshControl
            refreshing={true}
            onRefresh={() => {
              console.log("123123");
            }}
          ></RefreshControl>
        }
      >
        <Pressable
          className="btn-primary "
          onPress={() => {
            console.log("123");
            setModalVisible(!modalVisible);
          }}
        >
          <Text className="text-white">打开弹窗</Text>
        </Pressable>
        <Pressable
          className="btn-primary"
          onPress={() => {
            toggleTheme();
          }}
        >
          <Text>切换主题</Text>
        </Pressable>
        <Pressable
          className="btn-primary"
          onPress={() => (player.playing ? player.pause() : player.play())}
        >
          <Text>播放/暂停</Text>
        </Pressable>
        <Text className=" text-4xl text-red-500">Nativewind</Text>
        <Image
          source={"https://reactnative.dev/img/tiny_logo.png"}
          style={{ width: 50, height: 50 }}
          transition={300}
        ></Image>
        <Camera color="red" size={48}></Camera>
        <VideoView player={player} allowsFullscreen allowsPictureInPicture />
      </ScrollView>
      <Modal
        className="flex-1"
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <Pressable
          className="flex-1 bg-black/50 items-center justify-center"
          onPress={() => setModalVisible(false)}
        >
          <Pressable
            className=" bg-white p-10 rounded-xl w-4/5 h-2/7 "
            onPress={(e) => e.stopPropagation()}
          >
            <Text>我是一个弹窗</Text>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
