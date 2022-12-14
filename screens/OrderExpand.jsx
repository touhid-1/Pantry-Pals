import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'

const OrderExpand = () => {
  return (
    <View className="flex-1 justify-center items-center p-5 ">
      <View className="w-full h-5/6 p-5 rounded-md" style={{elevation: 0.5}}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {'Beachside Rhino'} has been Deliverd for {'₹ 765'}
        </Text>
        <ScrollView>
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'Burger'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'Giant Bun, with lettuce, a patty of meat, with special Sauce'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 285'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/6/38476/1fc2c60c6d6ee5729c386c18811d8f61.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'Chocolate Cake'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'A cake with top layer Chocolate'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 120'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/chains/2/16529642/871d7282b7a07b3124784f015a37545c_o2_featured_v2.jpg" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'WOW Momos'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'Momos With special Sauce for additional blends'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 360'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>
        </ScrollView>

      </View>
    </View>
  )
}

export default OrderExpand;