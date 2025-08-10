import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Models } from 'react-native-appwrite'

const Comment = ({ review }: { review: Models.Document }) => {

    const calcTime = () => {
        const now = new Date();
        const createdAt = new Date(review.$createdAt);
        const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

        const days = Math.floor(diffInSeconds / (3600 * 24));
        const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);

        if (days > 0) return `${days} days ago`;
        if (hours > 0) return `${hours} hours ago`;
        return `${minutes} minutes ago`;
    }

    return (
        <View className="flex flex-col gap-4">
            <View className="flex flex-row items-center gap-3">
                <Image source={images.avatar} className="w-10 h-10 rounded-full" />
                <Text className="font-rubik-semibold text-black-300">{review.name}</Text>
            </View>
            <Text className="font-rubik text-black-200">
                {review.review}
            </Text>
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center gap-2">
                    <Image source={icons.star} className="size-5" />
                    <Text className="text-sm text-black-300 font-rubik-medium">{review.rating}</Text>
                </View>
                <Text className="text-sm text-black-100 font-rubik">{calcTime()}</Text>
            </View>
        </View>
    )
}

export default Comment