import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

const Comment = () => {
    return (
        <View className="flex flex-col gap-4">
            <View className="flex flex-row items-center gap-3">
                <Image source={images.avatar} className="w-10 h-10 rounded-full" />
                <Text className="font-rubik-semibold text-black-300">John Doe</Text>
            </View>
            <Text className="font-rubik text-black-200">
                The apartment is very clean and modern. I really like the interior design. Looks like I&apos;ll feel at home 😍
            </Text>
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center gap-2">
                    <Image source={icons.heart} className="size-5" tintColor="#0061FF" />
                    <Text className="text-sm text-black-300 font-rubik-medium">938</Text>
                </View>
                <Text className="text-sm text-black-100 font-rubik">6 days ago</Text>
            </View>
        </View>
    )
}

export default Comment