import {
  FlatList,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import EmptyState from "../../components/EmptyState";
import { useGlobalContext } from "../../context/GlobalProvider";

// Mock data
const mockPosts = [
  {
    $id: "1",
    title: "IOCL - Karari Charging Station",
    description: "Kishangarh chownk, Jalandhar - Pathankot Rd",
    imageUrl: "https://content.jdmagicbox.com/comp/def_content/electric-vehicle-charging-stations/electric-vehicles-incentives-fame-india-electric-vehicle-charging-stations-5-s3b2h-250.jpg",
  },
  {
    $id: "2",
    title: "Tata Power - Karari Fuels Charging Station",
    description: "IOCL Nh 44, Kishangarh Chownk",
    imageUrl: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/autocarpro/dd697bf0-a810-4789-9064-d43c4997f910.jpg&w=750&h=490&q=75&c=1",
  },
  {
    $id: "3",
    title: "Tata Power - Amar Highway Charging Station",
    description: "Amar Highway F/Stn,Indian Oil Petrol Pump 222/5 G.T.Road. - Pragpur",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjv8TlugWzwL8uEdnNdIBtVqdZbmAHq2O_Q&s",
  },
  {
    $id: "4",
    title: "IOCL - Sangha Nijjar Charging Station",
    description: "Ground Floor, Jamait Garh, Nakodar Bara Sidhpur",
    imageUrl: "https://www.psuconnect.in/sdsdsd/IOCL4.jpg",
  },
  {
    $id:"5",
    title: 'Bharat Electric Scooter Goraya',
    description: 'Goraya, Jalandhar Bharat Electric Scooter Goraya in Jalandhar is one of the leading businesses in the Electric Vehicle Charging Stations. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Bharat Electric Scooter Goraya, Jalandhar.',
    imageUrl: 'https://content.jdmagicbox.com/comp/def_content/electric-vehicle-charging-stations/electric-vehicles-ev-tata-electric-vehicle-charging-stations-4-dnwjq.jpg',
  },
  {
    $id:"6",
    title: 'ZEVPOINT E-MOBILITY Charging Station',
    description: 'ZEVpoint\'s 7.2kW EV charger is a game-changer! Stylish design, easy installation, and top-notch build quality. Its fast charging speed and smart features make ...',
    imageUrl: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=w1V-xcPChgcqvP1mg3UcYw&cb_client=search.gws-prod.gps&yaw=22.681435&pitch=0&thumbfov=100&w=520&h=175',

  },
  {
    $id:"7",
    title: 'B.BROTHERS & CO. ( ELECTRIC VEHICLE DEALER)',
    description: 'E Rickshaw, Golf Cart & Electric Scooter Wholesaler offered by B. Brothers & Co. from Jalandhar, Punjab, India.',
     imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMMCMlp1dqKCy-kAHLsUHajpfIxqMVnFaxhyWSD=s1360-w1360-h1020',
  }
];

const Home = () => {
  const { user } = useGlobalContext();

  return (
      <SafeAreaView className="bg-primary h-full">
        <FlatList
            data={mockPosts} // Use mock data
            keyExtractor={(item) => item.$id}
            ListHeaderComponent={() => (
                <View className="my-6 px-4 space-y-6">
                  <View className="justify-between items-start flex-row mb-6">
                    <View>
                      <Text className="font-pmedium text-sm text-gray-100">
                        Welcome Back,
                      </Text>
                      <Text className="text-2xl font-psemibold text-white">
                        {user?.username}
                      </Text>
                    </View>
                    <View className="mt-1.5">
                      <Image
                          source={images.logoSmall}
                          className="w-[150px] -top-8"
                          resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
            )}
            renderItem={({ item }) => (
                <View className="p-4 mb-4 bg-gray-800 rounded-lg">
                  <Image
                      source={{ uri: item.imageUrl }}
                      className="w-full h-40 mb-4 rounded-lg"
                      resizeMode="cover"
                  />
                  <Text className="text-white text-lg font-psemibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray-300">{item.description}</Text>
                </View>
            )}
            ListEmptyComponent={() => <EmptyState title="No stations found" />}
        />
      </SafeAreaView>
  );
};

export default Home;
