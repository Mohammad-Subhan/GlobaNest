import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Comment from '@/components/Comment';

const Screen = () => {
    const { id } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    return (
        <View className="bg-white h-full">
            <ScrollView className="flex flex-col" contentContainerClassName="pb-24" showsVerticalScrollIndicator={false}>
                <View className="w-full">
                    <View className="absolute top-0 left-0 z-[1] w-full flex flex-row items-center justify-between px-7" style={{
                        paddingTop: insets.top
                    }}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image source={icons.backArrow} className="size-7" />
                        </TouchableOpacity>
                        <View className="flex flex-row items-center gap-3">
                            <Image source={icons.heart} tintColor="black" className="size-7" />
                            <Image source={icons.send} tintColor="black" className="size-7" />
                        </View>
                    </View>
                    <Image source={images.newYork} className="w-full h-[460px]" resizeMode="cover" />
                </View>

                <View className="px-7 flex flex-col gap-8" style={{ paddingBottom: insets.bottom }}>
                    <View className="flex flex-col gap-4 mt-5">
                        <Text className="text-2xl font-rubik-bold" >Modern Apartment</Text>

                        <View className="flex flex-row items-center gap-2">
                            <Text className="text-primary-300 text-xs font-rubik-medium px-2.5 py-1.5 uppercase bg-primary-100 w-fit rounded-full text-center">Apartment</Text>
                            <View className="flex flex-row items-center gap-1.5">
                                <Image source={icons.star} className="size-5" />
                                <Text className="text-sm font-rubik-medium text-black-200">4.8 (1275 reviews)</Text>
                            </View>
                        </View>

                        <View className="flex flex-row items-center gap-7">
                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.bed} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">2 Beds</Text>
                            </View>

                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.bath} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">3 Bath</Text>
                            </View>

                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.area} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">2000 sqft</Text>
                            </View>
                        </View>

                    </View>
                    <View className="border-b border-primary-200"></View>

                    <View className="flex flex-col gap-4">
                        <Text className="text-xl font-rubik-semibold">Agent</Text>
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row">
                                <Image source={images.avatar} className="w-16 h-16 rounded-full" />
                                <View className="flex flex-col justify-center ml-5">
                                    <Text className="text-base font-rubik-semibold text-black-300">John Doe</Text>
                                    <Text className="text-sm font-rubik-medium text-black-200">Owner</Text>
                                </View>
                            </View>
                            <View className="flex flex-row gap-5">
                                <Image source={icons.chat} className="size-8" />
                                <Image source={icons.phone} className="size-8" />
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="text-xl font-rubik-semibold">Overview</Text>
                        <Text className="text-base font-rubik text-black-200">
                            Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.
                        </Text>
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="text-xl font-rubik-semibold">Facilities</Text>
                        <View className="flex flex-row flex-wrap">

                            <View className="flex flex-col items-center justify-center w-1/4 p-3">
                                <View className="bg-primary-100 p-5 flex items-center justify-center rounded-full">
                                    <Image source={icons.carPark} className="size-7" />
                                </View>
                                <Text className="font-rubik text-sm">Car Parking</Text>
                            </View>

                            <View className="flex flex-col items-center justify-center w-1/4">
                                <View className="bg-primary-100 p-5 flex items-center justify-center rounded-full">
                                    <Image source={icons.swim} className="size-7" />
                                </View>
                                <Text className="font-rubik text-sm">Swimming</Text>
                            </View>

                            <View className="flex flex-col items-center justify-center w-1/4 p-3">
                                <View className="bg-primary-100 p-5 flex items-center justify-center rounded-full">
                                    <Image source={icons.dumbell} className="size-7" />
                                </View>
                                <Text className="font-rubik text-sm">Gym</Text>
                            </View>

                            <View className="flex flex-col items-center justify-center w-1/4 p-3">
                                <View className="bg-primary-100 p-5 flex items-center justify-center rounded-full">
                                    <Image source={icons.cutlery} className="size-7" />
                                </View>
                                <Text className="font-rubik text-sm">Restaurant</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="text-xl font-rubik-semibold">Location</Text>
                        <View className="flex flex-row items-center gap-2 mb-3">
                            <Image source={icons.location} className="size-5" />
                            <Text className="font-rubik-medium text-black-200 text-sm">Grand City St. 100, New York, United States</Text>
                        </View>
                        <Image source={images.map} resizeMode="contain" className="w-full h-[200px]" />
                    </View>

                    <View className="flex flex-row gap-2 justify-between items-center">
                        <View className="flex flex-row items-center gap-2">
                            <Image source={icons.star} className="size-6" />
                            <Text className="font-rubik-medium text-xl text-black-300">4.8 (1275 reviews)</Text>
                        </View>
                        <Text className="text-primary-300 font-rubik-medium text-lg">
                            See All
                        </Text>
                    </View>

                    <Comment />

                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 drop-shadow-xl shadow-black bg-white border border-primary-200 rounded-t-3xl h-36 flex flex-row justify-between items-center px-7" style={{ paddingBottom: insets.bottom }}>
                <View className="flex flex-col">
                    <Text className="uppercase tracking-widest text-black-200 text-base font-rubik-medium">Price</Text>
                    <Text className="text-primary-300 font-rubik-semibold text-[26px]">$17000</Text>
                </View>

                <TouchableOpacity className="bg-primary-300 rounded-full px-16 drop-shadow-md shadow-black-300 h-12 flex items-center justify-center">
                    <Text className="text-white font-rubik-semibold">Booking Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Property = () => {
    return (
        <SafeAreaProvider>
            <Screen />
        </SafeAreaProvider>
    )
}

export default Property;