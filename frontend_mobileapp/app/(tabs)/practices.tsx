import Header from '@/components/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Practices() {
  return (
   <SafeAreaView className="flex-1">
    <Header title='Practices' showBack={true} showNotification={true} showProfile={true} />
   </SafeAreaView>
  )
}