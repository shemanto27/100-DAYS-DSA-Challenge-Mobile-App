import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface HeaderProps {
  title: string
  showBack: boolean
  showNotification: boolean
  showProfile: boolean
}

export default function Header({ title, showBack, showNotification, showProfile }: HeaderProps) {

    const router = useRouter();

  return (
    <View className='bg-white flex-row items-center justify-between px-4 py-3'>
        {/* left side */}
      <View className='border border-red-700 w-full flex-row items-center flex-1'>
        {showBack && (
            <TouchableOpacity onPress={()=> router.back()} className='mr-4'>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            )}
      </View>

      {/* center title */}
      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg font-bold'>{title}</Text>
      </View>

      {/* right side */}
        <View className='border border-red-700 w-full flex-row items-center flex-1 justify-end'>
        {showNotification && (
            <TouchableOpacity className='mr-4'>
                <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
            )}

        {showProfile && (
            <TouchableOpacity>
                <Ionicons name="person" size={24} color="black" />
            </TouchableOpacity>
            )}
        </View>
    </View>
  )
}