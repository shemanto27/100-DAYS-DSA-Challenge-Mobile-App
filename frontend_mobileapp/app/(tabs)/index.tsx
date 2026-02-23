import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <Header title="Home" showBack={false} showNotification={true} showProfile={true} />
    </SafeAreaView>
    
  );
}
