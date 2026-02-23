import Header from '@/components/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Learn() {
  return (
    <SafeAreaView className="flex-1">
        <Header title='Learn' showBack={true} showNotification={true} showProfile={true} />
    </SafeAreaView>
  )
}