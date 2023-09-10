package com.gigahack.dashboard.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("customer")
data class Customer(
  @Id
  val id: Int,
  val name: String,
  val volumeSegment: VolumeSegment,
  val city: String,
  val region: Region,
  val srCode: String,
  val channel: Channel,
  val locationType: LocationType,
  val preferentialSegment: PreferentialSegment
)

data class CustomerDTO (
  val id: Int,
  val name: String,
  val volumeSegment: VolumeSegment,
  val city: String,
  val region: Region,
  val srCode: String,
  val channel: Channel,
  val locationType: LocationType,
  val preferentialSegment: PreferentialSegment
)

enum class VolumeSegment {
  D, C, B, A
}

enum class Region {
  SOUTH, CENTER, NORTH
}

enum class Channel(val channelName: String) {
  CHANNEL_1("Channel 1"),
  CHANNEL_2("Channel 2"),
  CHANNEL_3("Channel 3"),
  CHANNEL_4("Channel 4"),
  CHANNEL_5("Channel 5")
}

enum class LocationType(val locationTypeName: String) {
  LOCATION_TYPE_1("Location Type 1"),
  LOCATION_TYPE_2("Location Type 2"),
  LOCATION_TYPE_3("Location Type 3"),
  LOCATION_TYPE_4("Location Type 4"),
  LOCATION_TYPE_5("Location Type 5"),
  LOCATION_TYPE_6("Location Type 6"),
  LOCATION_TYPE_7("Location Type 7"),
  LOCATION_TYPE_8("Location Type 8"),
  LOCATION_TYPE_9("Location Type 9"),
  LOCATION_TYPE_10("Location Type 10"),
  LOCATION_TYPE_11("Location Type 11"),
  LOCATION_TYPE_12("Location Type 12"),
  LOCATION_TYPE_13("Location Type 13"),
  LOCATION_TYPE_14("Location Type 14"),
  LOCATION_TYPE_15("Location Type 15")
}

enum class PreferentialSegment(private val value: Int) {
  SEGMENT_1(1),
  SEGMENT_2(2);

  fun getValue(): Int {
    return value
  }
}

@Document
data class Product (
  @Id
  val parentCode: Int,
  val groupCode: Int,
  val imported: Boolean,
  val alcoGroup: Boolean,
  val volume: String,
  val packageType: PackageType,
  val materialType: MaterialType,
  val priceSegment: PriceSegment,
)

data class ProductDTO (
  val parentCode: Int,
  val groupCode: Int,
  val imported: Boolean,
  val alcoGroup: Boolean,
  val volume: String,
  val packageType: PackageType,
  val materialType: MaterialType,
  val priceSegment: PriceSegment,
)

enum class PriceSegment {
  SEGMENT_1,
  SEGMENT_2,
  SEGMENT_3,
  SEGMENT_4,
  SEGMENT_5,
  SEGMENT_6,
}

enum class MaterialType {
  TYPE_1,
  TYPE_12,
  TYPE_16,
  TYPE_17,
  TYPE_18,
  TYPE_19,
  TYPE_20,
  TYPE_21,
  TYPE_22
}

enum class PackageType {
  TYPE_1,
  TYPE_2,
  TYPE_3,
  TYPE_4,
}

@Document("userSettings")
data class UserSettings (
  @Id
  val id: Int,
  val customers: MutableList<Int>,
  val brands: MutableList<Int>,
)

data class UserSettingsDTO (
  val id: Int,
  val customers: MutableList<Int>,
  val brands: MutableList<Int>,
)

data class StoreData (
  val id: Int,
  val city: String,
  val name: String,
  val region: Region,

  val brands: List<Brand>
)

data class Brand(
  val id: Int,
  val name: String,
  val products: List<Subproduct>
)

data class Subproduct (
  val id: Int,
  val name: String,
)