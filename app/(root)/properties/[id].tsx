import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Comment from '@/components/Comment';
import { useAppwrite } from '@/lib/useAppwrite';
import { getPropertybyId } from '@/lib/appwrite';
import { Models } from 'react-native-appwrite';

const facilitiesIcons: Record<"Laundry" | "Parking" | "Gym" | "Wifi" | "Pet-friendly", any> = {
    "Laundry": icons.laundry,
    "Parking": icons.carPark,
    "Gym": icons.dumbell,
    "Wifi": icons.wifi,
    "Pet-friendly": icons.dog
}

const Screen = () => {
    const { id } = useLocalSearchParams();

    const singleId = Array.isArray(id) ? id[0] : id;

    const { data: property, loading } = useAppwrite({
        fn: getPropertybyId,
        params: { id: singleId },
    })

    const insets = useSafeAreaInsets();

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator className="text-primary-300 mt-5" size="large" />
            </View>
        )
    }

    return (
        <View className="bg-white h-full">
            <ScrollView className="flex flex-col" contentContainerClassName="pb-36" showsVerticalScrollIndicator={false}>
                <View className="w-full">
                    <View className="absolute top-0 left-0 z-[1] w-full flex flex-row items-center justify-between px-7" style={{
                        paddingTop: insets.top
                    }}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image source={icons.backArrow} tintColor="white" className="size-7" />
                        </TouchableOpacity>
                        <View className="flex flex-row items-center gap-3">
                            <Image source={icons.heart} tintColor="white" className="size-7" />
                            <Image source={icons.send} tintColor="white" className="size-7" />
                        </View>
                    </View>
                    <Image source={{ uri: property?.image }} className="w-full h-[460px]" resizeMode="cover" />
                    <Image source={images.cardGradient} className="size-full rotate-180 rounded-2xl absolute bottom-0" />
                </View>

                <View className="px-7 flex flex-col gap-8" style={{ paddingBottom: insets.bottom }}>
                    <View className="flex flex-col gap-4 mt-5">
                        <Text className="text-2xl font-rubik-bold" >{property?.name}</Text>

                        <View className="flex flex-row items-center gap-2">
                            <Text className="text-primary-300 text-xs font-rubik-medium px-2.5 py-1.5 uppercase bg-primary-100 w-fit rounded-full text-center">Apartment</Text>
                            <View className="flex flex-row items-center gap-1.5">
                                <Image source={icons.star} className="size-5" />
                                <Text className="text-sm font-rubik-medium text-black-200">{property?.rating} ({property?.reviews.length} reviews)</Text>
                            </View>
                        </View>

                        <View className="flex flex-row items-center gap-7">
                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.bed} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">{property?.bedrooms} Beds</Text>
                            </View>

                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.bath} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">{property?.bathrooms} Bath</Text>
                            </View>

                            <View className="flex flex-row items-center gap-1.5">
                                <View className="bg-primary-100 p-3 flex items-center justify-center rounded-full">
                                    <Image source={icons.area} className="size-5" />
                                </View>
                                <Text className="text-base font-rubik-medium text-black-300">{property?.area} sqft</Text>
                            </View>
                        </View>

                    </View>
                    <View className="border-b border-primary-200"></View>

                    <View className="flex flex-col gap-4">
                        <Text className="text-xl font-rubik-semibold">Agent</Text>
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row">
                                <Image source={{ uri: property?.agent.avatar }} className="w-16 h-16 rounded-full" />
                                <View className="flex flex-col justify-center ml-5">
                                    <Text className="text-base font-rubik-semibold text-black-300">{property?.agent.name}</Text>
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
                            {property?.description}
                        </Text>
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="text-xl font-rubik-semibold">Facilities</Text>
                        <View className="flex flex-row flex-wrap">
                            {property?.facilities.map((facility: keyof typeof facilitiesIcons, index: number) => (

                                <View key={index} className="flex flex-col items-center justify-center w-1/4 p-3">
                                    <View className="bg-primary-100 p-5 flex items-center justify-center rounded-full">
                                        <Image source={facilitiesIcons[facility]} className="size-7" />
                                    </View>
                                    <Text className="font-rubik text-sm">{facility}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="text-xl font-rubik-semibold">Location</Text>
                        <View className="flex flex-row items-center gap-2 mb-3">
                            <Image source={icons.location} className="size-5" />
                            <Text className="font-rubik-medium text-black-200 text-sm">
                                {property?.address}
                            </Text>
                        </View>
                        <Image source={images.map} resizeMode="contain" className="w-full h-[200px]" />
                    </View>

                    <View className="flex flex-row gap-2 justify-between items-center">
                        <View className="flex flex-row items-center gap-2">
                            <Image source={icons.star} className="size-6" />
                            <Text className="font-rubik-medium text-xl text-black-300">
                                {property?.rating} ({property?.reviews.length} reviews)
                            </Text>
                        </View>
                        <Text className="text-primary-300 font-rubik-medium text-lg">
                            {property?.reviews.length === 0 ? "" : "See All"}
                        </Text>
                    </View>

                    {property?.reviews.length > 0 && (
                        <Comment review={property?.reviews[0]} />
                    )}

                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 drop-shadow-xl shadow-black bg-white border border-primary-200 rounded-t-3xl h-36 flex flex-row justify-between items-center px-7" style={{ paddingBottom: insets.bottom }}>
                <View className="flex flex-col">
                    <Text className="uppercase tracking-widest text-black-200 text-base font-rubik-medium">Price</Text>
                    <Text className="text-primary-300 font-rubik-semibold text-[26px]">${property?.price}</Text>
                </View>

                <TouchableOpacity className="bg-primary-300 rounded-full px-16 drop-shadow-md shadow-black-300 h-12 flex items-center justify-center">
                    <Text className="text-white font-rubik-semibold">Book Now</Text>
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